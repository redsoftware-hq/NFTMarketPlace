import Header from './Header/Header';
import CollectionForm from './CollectionForm/CollectionForm';
function CreateCollection() {
  return (
    <section className="px-1 grid justify-center gap-2 md:m-auto md:max-w-[768px]">
      <Header />
      <CollectionForm />
    </section>
  );
}

export default CreateCollection;
