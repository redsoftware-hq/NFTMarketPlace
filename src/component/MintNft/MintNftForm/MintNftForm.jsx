import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import UploadImage from '../../common/Form/UploadImage';
import Input from '../../common/Form/Input';
import PrimaryButton from '../../common/Buttons/PrimaryButton';
import ErrorMessage from '../../common/Form/ErrorMessage';
import TextArea from '../../common/Form/TextArea';
import SecondaryButton from '../../common/Buttons/SecondaryButton';
import { mintNft } from '../../../apis/cryptoApi';

const labels = { name: 'name', description: 'description' };

const options = {
  name: { required: 'This is required' },
  description: { required: 'Please provide a description' },
  metadata: {
    required: 'Field cannot be empty',
    validate: (value) => value !== ''
  },
  upload: {
    required: 'Please Upload'
  }
};

const DYNAMIC_FIELD = { name: 'metadata', key: 'key', value: 'value' };
const METADATA_OBJ = { key: '', value: '' };

export default function MintNftForm({ setMessage }) {
  const [wallet, setWallet] = useState({ walletAddress: '', blockchain: '' });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: DYNAMIC_FIELD.name
  });

  useEffect(() => {
    try {
      const getWallet = async () => {
        const provider = new ethers.providers.Web3Provider(window?.ethereum, 'goerli');
        const requestAccounts = await provider.send('eth_requestAccounts', []);
        const network = await provider.getNetwork();
        const walletAddress = requestAccounts[0];
        const blockchain = 'Ethereum_' + network.name;
        return {
          walletAddress,
          blockchain
        };
      };
      (async function () {
        const walletObj = await getWallet();
        setWallet(walletObj);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async function convert(file) {
    const dataURI = await toBase64(file);
    return dataURI;
  }

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const { name, description, metadata, upload } = data;

      const fileName = upload[0].name;
      const fileData = await convert(upload[0]);

      const textData = {
        name: name,
        description: description
      };

      if (metadata.length !== 0) {
        metadata.forEach((ele) => {
          textData[ele.key] = ele.value;
        });
      }

      const payload = {
        walletAddress: wallet.walletAddress,
        blockchain: wallet.blockchain,
        nftID: textData.name,
        textData: textData,
        fileData: {
          name: fileName,
          data: fileData
        }
      };

      mintNft(payload).then((response) => {
        setMessage(`Token Id: ${response[1].text.data}`);
      });
    } catch (error) {
      setMessage('Cannot Mint nft');
      console.log(error);
    }
  };

  return (
    <form className="px-1 flex flex-col gap-3 font-work-sans" onSubmit={handleSubmit(onSubmit)}>
      <UploadImage register={register} options={options.upload} />
      {errors.upload && <ErrorMessage message={errors.upload?.message} />}
      <div className="nft-name inline-grid p-1 gap-1">
        <label className="px-2 text-white" htmlFor={labels.name}>
          Name *
        </label>
        <Input
          name={labels.name}
          id={labels.name}
          type="text"
          options={options.name}
          register={register}
          placeholder="Example: Treasure of Sea"
        />
        {errors.name && <ErrorMessage message={errors.name?.message} />}
      </div>

      <div className="description p-1 inline-grid gap-1">
        <label htmlFor={labels.description} className="px-2 capitalize text-white">
          description
        </label>
        <span className="px-2 text-[#858584] font-work-sans">
          Make your items more discoverable on Metajuice by adding a description
        </span>
        <TextArea
          id={labels.description}
          name={labels.description}
          register={register}
          options={options.description}
          rows="4"
        />
        {errors.description && <ErrorMessage message={errors.description?.message} />}
      </div>

      <div>
        {fields.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center gap-4 md:flex-row"
            key={item.id}>
            <div className="md:basis-1/4">
              <label className="px-2 py-1 text-white">Metadata Key *</label>
              <input
                placeholder="Key"
                className="p-3 rounded-2xl w-full caret-[#f15623] focus:accent-[#f15623]"
                {...register(
                  `${DYNAMIC_FIELD.name}.${index}.${DYNAMIC_FIELD.key}`,
                  options.metadata
                )}
              />
              {errors.metadata && (
                <ErrorMessage
                  className="py-1 text-xs"
                  message={errors.metadata[index].key?.message}
                />
              )}
            </div>
            <div className="">
              <label className="px-2 py-1 text-white">Metadata Value *</label>
              <Controller
                render={({ field }) => (
                  <input
                    placeholder="Value"
                    className="p-3 rounded-2xl w-full caret-[#f15623] focus:accent-[#f15623]"
                    {...field}
                  />
                )}
                name={`${DYNAMIC_FIELD.name}.${index}.${DYNAMIC_FIELD.value}`}
                control={control}
                rules={options.metadata}
              />
              {errors.metadata && (
                <ErrorMessage
                  className="py-1 text-xs"
                  message={errors.metadata[index].value?.message}
                />
              )}
            </div>
            <div className={errors.metadata ? 'mr-auto md:m-auto' : 'mr-auto md:mt-auto'}>
              <SecondaryButton btnName="Remove" type="button" handleClick={() => remove(index)} />
            </div>
          </div>
        ))}
      </div>

      <div>
        <SecondaryButton btnName="Add" type="button" handleClick={() => append(METADATA_OBJ)} />
      </div>

      <div className="btn-container">
        <PrimaryButton btnName="Mint" />
      </div>
    </form>
  );
}
