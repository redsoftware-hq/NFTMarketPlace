import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormHeader from '../common/Form/FormHeader';
import Toast from '../common/Toast';
import MintNftForm from './MintNftForm/MintNftForm';
export default function MintNft() {
  const [toastMessage, setToastMessage] = React.useState('');
  const navigate = useNavigate();
  const redirectCallback = () => {
    navigate('/');
  };
  return (
    <section className="px-1 grid justify-center gap-2 md:m-auto md:max-w-[768px]">
      <FormHeader title="Create a NFT" />
      <MintNftForm setToastMessage={setToastMessage} />
      {toastMessage !== '' && (
        <Toast type="success" message={toastMessage} callback={redirectCallback} />
      )}
    </section>
  );
}
