import React from 'react';
import FormHeader from '../common/Form/FormHeader';
import MintNftForm from './MintNftForm/MintNftForm';
import { useState } from 'react';
import Toast from '../common/Toast';
export default function MintNft() {
  const [toast, setToast] = useState([]);
  const [message, setMessage] = useState('');
  return (
    <section className="px-1 grid justify-center gap-2 md:m-auto md:max-w-[768px]">
      <FormHeader title="Create a NFT" />
      <MintNftForm setToast={setToast} setMessage={setMessage} />
      {toast.length !== 0 && <Toast type="success" message={message} />}
    </section>
  );
}
