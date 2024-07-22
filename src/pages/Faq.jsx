import { useState } from "react";
import Tabs from "../components/layout/Tabs";
import Accordion from "../components/Accordion";
import faq1 from "../assets/images/faq1.svg";
import faq2 from "../assets/images/faq2.svg";
import faq3 from "../assets/images/faq3.svg";
import { Link } from "react-router-dom";
function Faq() {
  const [activeTab, setActiveTab] = useState("Popular Questions");
  const [openAccordion, setOpenAccordion] = useState("popular-1");

  // Function to handle accordion toggle
  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };
  return (
    <div className="bg-[rgb(246,247,250)] lg:bg-transparent">
      <div
        className="h-32 text-lg bg-[rgb(246,247,250)] text-[rgb(33,44,58)]  lg:flex items-center justify-center hidden"
        style={{
          backgroundImage: `url(${faq1}), url(${faq2}), url(${faq3})`,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundPosition:
            "left 57px top, left 331px top 40px, right -30px top 55px",
        }}
      >
        <h2 className="capitalize text-[20px] font-medium leading-8 text-[#505050] text-center">
          Hello! How can we help you?
        </h2>
      </div>
      <div className="lg:container">
        <div className="flex  space-y-10 lg:space-y-0  lg:space-x-[60px] lg:flex-nowrap flex-wrap flex-col lg:flex-row lg:mt-[40px] mb-[100px]">
          <div className="flex w-full lg:w-[32%] flex-col">
            <div className="flex items-center lg:block border-b border-[#eaebf2] lg:border-none bg-white lg:bg-[#f6f7fa] lg:py-[40px] lg:px-[25px] p-[15px] lg:space-y-4 rounded-lg gap-[12px]">
              <Tabs
                active={activeTab === "Popular Questions"}
                onClick={() => setActiveTab("Popular Questions")}
              >
                Popular Questions
              </Tabs>
              <Tabs
                active={activeTab === "announcement"}
                onClick={() => setActiveTab("announcement")}
              >
                Announcements
              </Tabs>
            </div>
          </div>

          <div className="w-full lg:w-[63%] bg-white lg:bg-transparent container">
            <h2 className="text-[15px] font-medium capitalize mb-[20px] text-[#212C3A] hidden lg:block">
              <Link to="/" className="hover:text-red text-[#8D94AD]">
                Main page
              </Link>
              <span className="text-[#8D94AD]"> • </span>
              {activeTab}
            </h2>
            <h2 className="text-[22px] font-bold capitalize mb-[20px] text-[#212C3A] pt-5 lg:pt-0">
              {activeTab}
            </h2>
            {activeTab === "Popular Questions" && (
              <div className="flex flex-col gap-y-5">
                <Accordion
                  id="popular-1"
                  isOpen={openAccordion === "popular-1"}
                  onToggle={() => toggleAccordion("popular-1")}
                  title="Why was my ad not published?"
                  content="Content for question 1"
                />
                <Accordion
                  id="popular-2"
                  isOpen={openAccordion === "popular-2"}
                  onToggle={() => toggleAccordion("popular-2")}
                  title="How can I contact support?"
                  content="Content for question 2"
                />
                <Accordion
                  id="popular-3"
                  isOpen={openAccordion === "popular-3"}
                  onToggle={() => toggleAccordion("popular-3")}
                  title="How can I contact support?"
                  content="Content for question 3"
                />
                <Accordion
                  id="popular-4"
                  isOpen={openAccordion === "popular-4"}
                  onToggle={() => toggleAccordion("popular-4")}
                  title="How can I contact support?"
                  content="Content for question 3"
                />
              </div>
            )}
            {activeTab === "announcement" && (
              <div className="flex flex-col gap-y-5">
                <Accordion
                  id="popular-1"
                  isOpen={openAccordion === "popular-1"}
                  onToggle={() => toggleAccordion("popular-1")}
                  title="Why was my add published"
                  content="Content for question 1"
                />
                <Accordion
                  id="popular-2"
                  isOpen={openAccordion === "popular-2"}
                  onToggle={() => toggleAccordion("popular-2")}
                  title="How can I contact you"
                  content="Content for question 2"
                />
                <Accordion
                  id="popular-3"
                  isOpen={openAccordion === "popular-3"}
                  onToggle={() => toggleAccordion("popular-3")}
                  title="How can I contact you"
                  content="Content for question 2"
                />
                <Accordion
                  id="popular-4"
                  isOpen={openAccordion === "popular-4"}
                  onToggle={() => toggleAccordion("popular-4")}
                  title="How can I contact you"
                  content="Content for question 2"
                />
                {/* ... More accordions ... */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
