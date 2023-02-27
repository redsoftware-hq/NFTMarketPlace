import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import UploadImage from '../../common/Form/UploadImage';
import Input from '../../common/Form/Input';
import PrimaryButton from '../../common/Buttons/PrimaryButton';
import ErrorMessage from '../../common/Form/ErrorMessage';
import TextArea from '../../common/Form/TextArea';
import SecondaryButton from '../../common/Buttons/SecondaryButton';

const labels = { name: 'name', description: 'description' };
const options = {
  name: { required: 'This is required' }
};

const DYNAMIC_FIELD = { name: 'metadata', key: 'key', value: 'value' };
const METADATA_OBJ = { key: '', value: '' };

export default function MintNftForm() {
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
  return (
    <form
      className="px-1 flex flex-col gap-3 font-work-sans"
      onSubmit={handleSubmit((data) => console.log(data))}>
      <UploadImage register={register} />

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
        <TextArea id={labels.description} name={labels.description} register={register} rows="4" />
      </div>

      <ul>
        {fields.map((item, index) => (
          <li className="flex flex-col md:flex-row items-center gap-3" key={item.id}>
            <div className="md:basis-1/5">
              <label className="px-2 text-white">Metadata Key *</label>
              <input
                placeholder="Key"
                className="p-3 rounded-2xl w-full caret-[#f15623] focus:accent-[#f15623]"
                {...register(`${DYNAMIC_FIELD.name}.${index}.${DYNAMIC_FIELD.key}`)}
              />
            </div>
            <div>
              <label className="px-2 text-white">Metadata Value *</label>
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
              />
            </div>
            <div className="mr-auto md:mt-auto">
              <SecondaryButton btnName="Remove" type="button" handleClick={() => remove(index)} />
            </div>
          </li>
        ))}
      </ul>

      <div>
        <SecondaryButton btnName="Add" type="button" handleClick={() => append(METADATA_OBJ)} />
      </div>

      <div className="btn-container">
        <PrimaryButton btnName="Mint" />
      </div>
    </form>
  );
}
