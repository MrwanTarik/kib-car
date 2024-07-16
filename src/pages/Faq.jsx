import { useState } from "react";
import Tabs from "../components/layout/Tabs";
import Accordion from "../components/Accordion";
function Faq() {
  const [activeTab, setActiveTab] = useState("popular");
  const [openAccordion, setOpenAccordion] = useState("popular-1");

  // Function to handle accordion toggle
  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };
  return (
    <div>
      <div className="p-20 bg-[#F6F7FA] ">
        <h2 className="capitalize font-secondary text-[26px] font-bold leading-8 text-[#505050] text-center">
          Hello! How can we help you?
        </h2>
      </div>
      <div className="container">
        <div className="flex mt-[80px] space-y-10 lg:space-y-0  lg:space-x-[60px] lg:flex-nowrap flex-wrap flex-col lg:flex-row">
          <div className="flex w-full lg:w-[32%] flex-col">
            <div className="bg-[#f6f7fa] py-[60px] px-5 space-y-5  rounded-xl gap-y-[12px]">
              <Tabs
                active={activeTab === "popular"}
                onClick={() => setActiveTab("popular")}
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

          <div className="w-full lg:w-[63%]">
            <h2 className="font-secondary text-[26px] font-bold leading-8 capitalize mb-[20px] text-red">
              {activeTab}
            </h2>
            {activeTab === "popular" && (
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
