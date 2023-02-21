import { HEADER } from "../../../utils/collectionPageData";
function Header() {
  return (
    <div className="h-80 md:h-fit">
      <img className="w-full h-full object-cover" src={HEADER} />
    </div>
  );
}

export default Header;
