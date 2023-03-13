import React from 'react';
import FormHeader from '../common/Form/FormHeader';
import CollectionForm from './CollectionForm/CollectionForm';

function CreateCollection() {
  return (
    <section className="px-1 grid justify-center gap-2 md:m-auto md:max-w-[768px]">
      <FormHeader title="Create a collection" />
      <CollectionForm />
    </section>
  );
}

export default CreateCollection;
