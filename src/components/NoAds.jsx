import NoAdsImage from "../assets/images/no-ads.png";
function NoAds() {
  return (
    <div className="bg-[#F1F3F7]">
      <h1 className="container py-[20px] font-secondary text-[20px] md:text-[26px] font-bold leading-8 text-primary border-y border-[#eaebf2]">
        Advertisements
      </h1>
      <div className="bg-[#F6F7FA] py-[20px]">
        <div className=" container flex items-center justify-center py-[20px]">
          <img className="h-[200px]" src={NoAdsImage} alt="not-ads" />
        </div>
        <div className="container pb-4">
          <p className="text-[18px] text-[#212c3a]">
            Sorry, nothing was found based on your search.
          </p>
        </div>
        <div className="container">
          <p className="text-[18px] text-[#8d94ad]">
            Please choose more suitable search filters.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoAds;
