import React from 'react';

import Input from '../../common/Form/Input';
import { BiImageAdd } from 'react-icons/bi';

export default function UploadImage({ register }) {
  const upload = 'upload';
  return (
    <div className="upload inline-grid p-1 gap-3">
      <label className="px-2 text-white" htmlFor={upload}>
        Upload Image *
      </label>
      <span className="px-2 text-[#858584]">
        This image will be used for featuring your collection on the homepage, category pages, or
        other promotional areas of Metajuice. 600 x 400 recommended.
      </span>
      <div className="m-auto sm:m-0 flex flex-col justify-center items-center w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-2xl bg-[#3b3b3b] cursor-pointer">
        <label
          className="w-full h-full cursor-pointer flex flex-col justify-center items-center"
          htmlFor={upload}>
          <BiImageAdd className="text-white w-2/4 h-2/4" />
          <Input name={upload} type="file" register={register} show={false} />
        </label>
      </div>
    </div>
  );
}
