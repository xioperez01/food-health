import ByStatusStockSection from "@/components/ByStatusStockTabs";
import CategoryCard from "@/components/CategoryCard";
import KpiCard from "@/components/KpiCard";
import PageLayout from "@/components/PageLayout";
import React, { ReactElement } from "react";

const categoriesData = [
  {
    imgPath: "images/indonesia_food.jpg",
    name: "Indonesia Food",
  },
  {
    imgPath: "images/japanese_food.jpg",
    name: "Japanese Food",
  },
  {
    imgPath: "images/korean_food.jpg",
    name: "Korean food",
  },
];

const kpisData = [
  { label: "Total Visitors", value: "300k" },
  { label: "Viewed", value: "1k" },
  { label: "Order", value: "25k" },
  { label: "Cancelled", value: "20k" },
];

export default function Stock() {
  return (
    <div className="md:h-[calc(100vh-128px)] 2xl:h-[calc(100vh-152px)] w-full grid grid-cols-12 gap-10 overflow-hidden">
      <div className="col-span-8 flex flex-col gap-4 overflow-auto">
        <div className="w-full h-52 flex flex-row items-center shrink-0 justify-between rounded-[14px] bg-lightOrange text-white">
          <div className="flex flex-col py-6 pl-10 w-2/5 gap-2">
            <div className="font-semibold text-4xl">
              <h1>Discount</h1>
              <h1>New Menu!</h1>
            </div>
            <p className=" line-clamp-2">
              Get Free Shipping Every $30 With No Minimum Purchase
            </p>
          </div>
          <div
            className=" h-52 w-72 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/healthy-salad.jpg')" }}
          ></div>
        </div>

        <div className="w-full h-max flex flex-col gap-4">
          <h2 className="font-semibold text-xl">Categories</h2>
          <div className="w-full flex flex-row gap-2 h-max">
            {categoriesData?.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>

        <ByStatusStockSection />
      </div>
      <div className="col-span-4 flex flex-col gap-4 overflow-auto">
        <div className="h-52 grid grid-cols-2 gap-1">
          {kpisData?.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </div>
      </div>
    </div>
  );
}

Stock.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
