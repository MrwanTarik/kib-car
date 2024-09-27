import React, { Suspense, useEffect, useState } from "react";
const HomePage = React.lazy(() => import("./pages/Homepage"));
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Nav from "./components/layout/Nav";
// import Homepage from "./pages/Homepage";
import { FilterProvider } from "./context/filterContext/FilterContext";
import Footer from "./components/layout/Footer";
import DealershipOwners from "./pages/DealershipOwners";
import DealershipDetails from "./components/dealership/DealershipDetails";
import Faq from "./pages/Faq";
import Favorite from "./pages/Favourite";
import NewAdvertisement from "./pages/NewAdvertisement";
import CarDetails from "./pages/CarDetails";
import EditAdvertisement from "./pages/EditAdvertisement";
import AppLayout from "./components/layout/AppLayout";
import MobileFooter from "./components/layout/MobileFooter";
import MobileFixedFooter from "./components/layout/MobileFixedFooter";

import MobileNav from "./components/layout/MobileNav";
import ScrollToTop from "./components/ScrollToTop";
import Lease from "./pages/Lease";
import Spinner from "./components/Spinner";
import Rules from "./pages/Rules";
import Terms from "./pages/Terms";
import PaidServices from "./pages/PaidServices";

import { CarProvider } from './context/CarContext';

function App() {
  const [width] = useState(window.innerWidth);
  const showMobileCom = width < 971;

  return (
    <CarProvider>
      <BrowserRouter>
        <ScrollToTop>
          <FilterProvider>
            <AppLayout>
              {showMobileCom ? <MobileNav title="KIBCAR" /> : <Nav />}

              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/dealership-owners"
                    element={<DealershipOwners />}
                  />
                  <Route
                    path="/dealership/:dealershipId"
                    element={<DealershipDetails />}
                  />
                  <Route path="/help" element={<Faq />} />
                  <Route path="/rules" element={<Rules />} />
                  <Route path="/terms-and-conditions" element={<Terms />} />
                  <Route path="/paid-services" element={<PaidServices />} />
                  <Route path="/lease" element={<Lease />} />
                  <Route path="/favorite" element={<Favorite />} />
                  <Route
                    path="/new-advertisement"
                    element={<NewAdvertisement />}
                  />
                  <Route
                    path="/edit-advertisement/:id"
                    element={<EditAdvertisement />}
                  />
                  <Route path="/car-details/:id" element={<CarDetails />} />
                </Routes>
              </Suspense>

              {showMobileCom ? <MobileFooter /> : <Footer />}
              {showMobileCom && <MobileFixedFooter />}
            </AppLayout>
          </FilterProvider>
        </ScrollToTop>
      </BrowserRouter>
    </CarProvider>
  );
}

export default App;
