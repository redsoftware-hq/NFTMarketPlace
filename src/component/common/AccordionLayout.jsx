import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
export default function AccordionLayout({
  title,
  handleToggle,
  isOpen,
  children,
}) {
  return (
    <>
      <div
        className="flex flex-row w-full item-center gap-4 justify-between"
        onClick={handleToggle}
      >
        <div className="text-white text-lg">{title}</div>
        {!isOpen ? (
          <div className="text-white">
            <BsFillArrowDownCircleFill className="w-8 h-8" />
          </div>
        ) : (
          <div className="text-white">
            <BsFillArrowUpCircleFill className="w-8 h-8" />
          </div>
        )}
      </div>
      {isOpen && <div>{children}</div>}
    </>
  );
}
