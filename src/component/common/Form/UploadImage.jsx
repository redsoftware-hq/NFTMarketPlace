import React, { useState } from 'react';

import Input from '../../common/Form/Input';
import { BiImageAdd } from 'react-icons/bi';

export default function UploadImage({ register, options = {}, upload = 'upload' }) {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  function handleFileChange(event) {
    const file = event.target.files[0];
    setFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  }
  return (
    <div className="upload inline-grid p-1 gap-3">
      <label className="px-2 text-white" htmlFor={upload}>
        Upload Image *
      </label>
      <span className="px-2 text-[#858584]">
        This image will be used for featuring your collection on the homepage, category pages, or
        other promotional areas of Metajuice. 600 x 400 recommended.
      </span>
      <div className="m-auto sm:m-0 flex flex-col justify-center items-center w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-2xl bg-[#3b3b3b] cursor-pointer">
        <label
          className="w-full h-full cursor-pointer flex flex-col justify-center items-center"
          htmlFor={upload}>
          {file ? (
            <div className="imagePreview w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={imagePreview}
                alt="Preview"
              />
              <Input
                name={upload}
                type="file"
                register={register}
                show={false}
                options={options}
                handleFileChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="imagePreview w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
              <BiImageAdd className="text-white w-full h-full" />
              <Input
                name={upload}
                type="file"
                register={register}
                show={false}
                options={options}
                handleFileChange={handleFileChange}
              />
            </div>
          )}
        </label>
      </div>
    </div>
  );
}
