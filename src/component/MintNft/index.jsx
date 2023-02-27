import React from 'react';
import FormHeader from '../common/Form/FormHeader';
import MintNftForm from './MintNftForm/MintNftForm';
export default function MintNft() {
  return (
    <section className="px-1 grid justify-center gap-2 md:m-auto md:max-w-[768px]">
      <FormHeader title="Create a NFT" />
      <MintNftForm />
    </section>
  );
}
