import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsPlusCircleFill, BsHeart, BsHeartFill, BsShare, BsArrowLeft } from "react-icons/bs";
import PropTypes from 'prop-types';
import { useCarContext } from '../../context/CarContext';

function MobileNav({ title }) {
  const { currentCar } = useCarContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isCarDetails = location.pathname.includes('/car-details');

  useEffect(() => {
    if (isCarDetails && currentCar) {
      checkCarDataAndAct(currentCar.id, () => setIsFavorite(true));
    }
  }, [isCarDetails, currentCar]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleFavoriteClick = () => {
    if (currentCar) {
      if (isFavorite) {
        removeCarData(currentCar.id);
      } else {
        saveCarData(currentCar);
      }
      setIsFavorite(!isFavorite);
    }
  };

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
        console.log('Content shared successfully');
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      console.log('Web Share API not supported');
    }
  };

  function saveCarData(carData) {
    const existingData = localStorage.getItem("carDataList");
    let carDataList = existingData ? JSON.parse(existingData) : [];
    carDataList.push(carData);
    localStorage.setItem("carDataList", JSON.stringify(carDataList));
  }

  function removeCarData(carId) {
    const existingData = localStorage.getItem("carDataList");
    let carDataList = existingData ? JSON.parse(existingData) : [];
    carDataList = carDataList.filter((car) => car.id !== carId);
    localStorage.setItem("carDataList", JSON.stringify(carDataList));
  }

  function checkCarDataAndAct(carId, actionCallback) {
    const data = localStorage.getItem("carDataList");
    const carDataList = data ? JSON.parse(data) : [];
    const foundCar = carDataList.find((car) => car.id === carId);
    if (foundCar) {
      actionCallback(foundCar);
    }
  }

  return (
    <header className="py-[15px] bg-[#F6F7FA] border-b border-[#eaebf2]">
      <nav className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {!isHomePage && (
              <button onClick={handleBackClick} className="text-gray-600 mr-2">
                <BsArrowLeft size="20px" />
              </button>
            )}
            <Link
              to={"/"}
              className="text-black font-bold text-lg tracking-wider font-primary"
            >
              {title}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {isCarDetails && (
              <>
                <button 
                  onClick={handleFavoriteClick} 
                  className={isFavorite ? "text-red" : "text-gray-600"}
                >
                  {isFavorite ? <BsHeartFill size="20px" /> : <BsHeart size="20px" />}
                </button>
                <button onClick={handleShareClick} className="text-gray-600">
                  <BsShare size="20px" />
                </button>
              </>
            )}
            <Link to={"/new-advertisement"} className="text-red">
              <BsPlusCircleFill size="26px" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

MobileNav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MobileNav;
