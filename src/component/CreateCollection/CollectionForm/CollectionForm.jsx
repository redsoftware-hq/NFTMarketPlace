import React from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../common/Buttons/PrimaryButton';
import ErrorMessage from '../../common/Form/ErrorMessage';
import Input from '../../common/Form/Input';
import TextArea from '../../common/Form/TextArea';
import UploadImage from '../../common/Form/UploadImage';

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function CollectionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const labels = {
    name: 'name',
    upload: 'upload',
    address: 'address',
    creator: 'creator',
    mail: 'mail',
    description: 'description'
  };

  return (
    <form
      className="px-1 flex flex-col gap-3 font-work-sans"
      onSubmit={handleSubmit((data) => console.log(data))}>
      <UploadImage register={register} />
      <div className="collection-name inline-grid p-1 gap-1">
        <label className="px-2 text-white" htmlFor={labels.name}>
          Name *
        </label>
        <Input
          name={labels.name}
          type="text"
          options={{
            required: 'This is required.'
          }}
          register={register}
          placeholder="Example: Treasure of Sea"
        />
        {errors.name && (
          <p className="px-2 text-red-500 font-space-mono font-semibold">{errors.name?.message}</p>
        )}
      </div>

      <div className="description p-1 inline-grid gap-1">
        <label htmlFor={labels.description} className="px-2 capitalize text-white">
          description
        </label>
        <span className="px-2 text-[#858584] font-work-sans">
          Make your items more discoverable on Metajuice by adding a description
        </span>
        <TextArea name={labels.description} register={register} rows="4" />
      </div>

      <div className="creator-name inline-grid p-1 gap-2">
        <label className="px-2 text-white" htmlFor={labels.address}>
          Wallet Address *
        </label>
        <span className="px-2 text-[#858584] font-work-sans">
          {`Collection owners can collect creator earnings when a user re-sells an item they created.
            Contact the collection owner to change the collection earnings percentage or the payout address.`}
        </span>
        <Input
          name={labels.address}
          type="text"
          register={register}
          options={{ required: 'This is required' }}
          placeholder="Please enter an address, e.g. 0x1ed3... or destination.eth, destination"
        />
        {errors.address && <ErrorMessage message={errors.address?.message} />}
      </div>

      <div className="creator-name inline-grid p-1 gap-1">
        <label className="px-2 text-white" htmlFor={labels.creator}>
          Creator Name *
        </label>
        <Input
          name={labels.creator}
          type="text"
          register={register}
          options={{ required: 'This is required' }}
          placeholder="Example: Jon Doe"
        />
        {errors.creator && <ErrorMessage message={errors.creator?.message} />}
      </div>

      <div className="creator-email inline-grid p-1 gap-1">
        <label className="px-2 text-white" htmlFor={labels.mail}>
          Creator Email *
        </label>
        <Input
          name={labels.mail}
          type="text"
          register={register}
          options={{
            required: 'This is required',
            pattern: {
              value: emailPattern,
              message: 'Not a valid mail'
            }
          }}
          placeholder="Enter Your Mail"
        />
        {errors.mail && <ErrorMessage message={errors.mail?.message} />}
      </div>

      <div className="btn-container">
        <PrimaryButton btnName="Create" />
      </div>
    </form>
  );
}

export default CollectionForm;
