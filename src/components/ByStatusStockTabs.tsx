import React, { useState } from "react";
import { TabButton, TabContent } from "./ui/Tabs";
import ByStatusStockCard from "./ByStatusStockCard";

const options = [
  { title: "Order" },
  { title: "Delivered" },
  { title: "Finished" },
];

const orderCardsData = [
  {
    imgPath: "images/sambal.jpg",
    name: "Sambal Fried Fish with Fresh Vegetables",
    date: "7 Dec, 16:10",
  },
  {
    imgPath: "images/archipielago.jpg",
    name: "Archipelago Noodles with Chicken Katsu",
    date: "7 Dec, 16:10",
  },
  {
    imgPath: "images/salted.jpg",
    name: "Salted Egg Chicken With Mayonnaise",
    date: "7 Dec, 16:10",
  },
];

export default function ByStatusStockSection() {
  const [activeTab, setActiveTab] = useState("Order");

  return (
    <div className="w-full flex-col items-center justify-between px-2 sm:px-5 md:px-0">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 md:gap-4 xl:gap-12">
          {options?.map((option) => (
            <TabButton
              key={option?.title}
              isActive={activeTab === option.title}
              onClick={() => setActiveTab(option.title)}
            >
              {option?.title}
            </TabButton>
          ))}
        </div>
        <button className="text-primary font-medium text-base shrink-0">
          See all
        </button>
      </div>
      <TabContent name="Order" active={activeTab}>
        <div className="flex flex-col gap-2 w-full">
          {orderCardsData?.map((order) => (
            <ByStatusStockCard key={order?.name} {...order} />
          ))}
        </div>
      </TabContent>
    </div>
  );
}
