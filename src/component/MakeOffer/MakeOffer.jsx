import PrimaryButton from "../common/PrimaryButton";

function MakeOffer({ nft }) {
  return (
    <div className="p-2 flex flex-col gap-3 w-full">
      <div className="bg-[#3B3B3B] p-3 flex gap-2 justify-evenly rounded-2xl max-w-[135px]">
        <img src={nft.artistAvatar} alt="" />
        <span className="text-white font-space-mono font-medium text-base">
          {nft.artistName}
        </span>
      </div>
      <h2 className="text-white text-2xl font-work-sans font-semibold">
        {nft.name}
      </h2>
      <div className="text-[#858584] font-space-mono text-sm flex flex-wrap gap-2 items-center justify-between w-full">
        <h1 className="text-white text-3xl basis-3/4">{nft.price} ETH</h1>
        <h2>${nft.fiatPrice} USD</h2>
        <span className="font-work-sans">Include fees</span>
      </div>
      <PrimaryButton btnName="Buy Now" />
    </div>
  );
}

export default MakeOffer;
