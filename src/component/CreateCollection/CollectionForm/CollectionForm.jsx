import { Controller, useForm } from 'react-hook-form';
import PrimaryButton from '../../common/Buttons/PrimaryButton';
import Input from '../../common/Form/Input';
import TextArea from '../../common/Form/TextArea';
import { BiImageAdd } from 'react-icons/bi';
function CollectionForm() {
  const { register, handleSubmit, control } = useForm();

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
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="upload inline-grid p-1 gap-3">
        <label className="px-2 text-white" htmlFor={labels.upload}>
          Upload Image *
        </label>
        <span className="px-2 text-[#858584]">
          This image will be used for featuring your collection on the homepage, category pages, or
          other promotional areas of Metajuice. 600 x 400 recommended.
        </span>
        <div className="m-auto sm:m-0 flex flex-col justify-center items-center w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-2xl bg-[#3b3b3b] cursor-pointer">
          <label
            className="w-full h-full cursor-pointer flex flex-col justify-center items-center"
            htmlFor={labels.upload}
          >
            <BiImageAdd className="text-white w-2/4 h-2/4" />
            <Controller
              control={control}
              name={labels.upload}
              render={({ field }) => {
                return <input id={labels.upload} type="file" className="opacity-0" {...field} />;
              }}
            />
          </label>
        </div>
      </div>
      <div className="collection-name inline-grid p-1 gap-1">
        <label className="px-2 text-white" htmlFor={labels.name}>
          Name *
        </label>
        <Input
          name={labels.name}
          id={labels.name}
          type="text"
          register={register}
          placeholder="Example: Treasure of Sea"
        />
      </div>

      <div className="description p-1 inline-grid gap-1">
        <label htmlFor={labels.description} className="px-2 capitalize text-white">
          description
        </label>
        <span className="px-2 text-[#858584] font-space-mono">
          Make your items more discoverable on Metajuice by adding a description
        </span>
        <TextArea id={labels.description} name={labels.description} register={register} rows="4" />
      </div>

      <div className="creator-name inline-grid p-1 gap-3">
        <label className="px-2 text-white" htmlFor={labels.address}>
          Wallet Address *
        </label>
        <span className="px-2 text-[#858584] font-space-mono">
          {`Collection owners can collect creator earnings when a user re-sells an item they created.
            Contact the collection owner to change the collection earnings percentage or the payout address.`}
        </span>
        <Input
          id={labels.address}
          name={labels.address}
          type="text"
          register={register}
          placeholder="Please enter an address, e.g. 0x1ed3... or destination.eth, destination"
        />
      </div>

      <div className="creator-name inline-grid p-1 gap-1">
        <label className="px-2 text-white" htmlFor={labels.creator}>
          Creator Name *
        </label>
        <Input
          id={labels.creator}
          name={labels.creator}
          type="text"
          register={register}
          placeholder="Example: Jon Doe"
        />
      </div>

      <div className="creator-email inline-grid p-1 gap-1">
        <label className="px-2 text-white" htmlFor={labels.mail}>
          Creator Email *
        </label>
        <Input
          id={labels.mail}
          name={labels.mail}
          type="text"
          register={register}
          placeholder="Enter Your Mail"
        />
      </div>

      <div className="btn-container">
        <PrimaryButton btnName="Create" />
      </div>
    </form>
  );
}

export default CollectionForm;
