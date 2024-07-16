import premiumImage from "../assets/images/premium-image.png";
import { Link } from "react-router-dom";
function PremiumCard() {
  return (
    <div className="py-[30px] px-5 flex flex-col justify-between rounded-xl h-full bg-white shadow-md">
      <div className="text-center">
        <img
          className="m-auto"
          width={80}
          height={80}
          src={premiumImage}
          alt="premiumImage"
        />
        <p className="max-w-[177px] m-auto text-center pt-[20px] pb-[10px] font-secondary text-[18px] leading-7 font-medium text-black">
          Make your ad premium
        </p>
        <p className="text-center font-primary text-[14px] font-normal text-secondary max-w-[177px] m-auto">
          1 day - AZN
        </p>
      </div>
      <Link className="text-center font-medium font-primary py-4 px-[10px] bg-link rounded-md text-[14px] text-white">
        Premium
      </Link>
    </div>
  );
}

export default PremiumCard;
