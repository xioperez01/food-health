import ByStatusStockSection from "@/components/ByStatusStockSection";
import CategoryCard from "@/components/CategoryCard";
import PageLayout from "@/components/PageLayout";
import React, { ReactElement } from "react";

export default function Stock() {
	return (
		<div className="h-[calc(100vh-128px)] w-full grid grid-cols-12 gap-10 bg-blue-200 overflow-hidden">
			<div className="col-span-8 bg-pink-500 flex flex-col gap-4 overflow-auto">
				<div className="w-full h-52 flex flex-row items-center shrink-0 justify-between rounded-[14px] bg-orange-500">
					<div className="flex flex-col">
						<h1>Discount</h1>
						<h1>New Menu</h1>
						<p>Get Free Shipping Every $30 With No Minimum Purchase</p>
					</div>
					<div>Image</div>
				</div>

				<div className="w-full h-max flex flex-col gap-4">
					<h2>Categories</h2>
					<div className="w-full flex flex-row gap-2 h-max">
						<CategoryCard />
						<CategoryCard />
						<CategoryCard />
					</div>
				</div>

				<ByStatusStockSection />
			</div>
			<div className="col-span-4 bg-green-500 h-full">right</div>
		</div>
	);
}

Stock.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>;
};
