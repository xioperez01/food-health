import ByStatusStockSection from "@/components/ByStatusStockTabs";
import CategoryCard from "@/components/CategoryCard";
import KpiCard from "@/components/KpiCard";
import PageLayout from "@/components/PageLayout";
import { categoriesData, kpisData } from "@/data/fakedata";
import React, { ReactElement } from "react";

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
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h2 className="font-semibold text-xl">My Cart</h2>
              <p>Shopping is happy</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <svg
              width="28"
              height="33"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 17V15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H16V17H0ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20Z"
                fill="#B9B9B9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

Stock.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
