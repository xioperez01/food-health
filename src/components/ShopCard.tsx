import Image from "next/image";
import React, { useState } from "react";
import Button from "./ui/Button";

interface ShopCardProps {
  title: string;
  rate: string;
  views: string;
  price: string;
  img: string;
}

export default function ShopCard({
  title,
  rate,
  views,
  price,
  img,
}: ShopCardProps) {
  const [quantityToBuy, setQuantityToBuy] = useState(1);

  return (
    <div className="w-full h-max bg-white rounded-2xl p-3 flex flex-row gap-4 items-center">
      <div className="rounded-[14px] w-[120px] h-full shrink-0 overflow-hidden">
        <Image height={1000} width={1000} src={img} alt={title} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-y-1">
          <p className="font-semibold text-base">{title}</p>
          <div className="flex flex-row gap-2 items-center">
            <Image
              width={1000}
              height={1000}
              src="images/star.svg"
              alt="Rate"
              className=" h-3 w-auto"
            />
            <p className=" text-xs font-semibold">
              {rate}
              {"  "}
              <span className=" text-secondary font-normal">
                ({views} + Views)
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <p className="font-bold text-base">{price}</p>
          <div className="flex flex-row gap-x-[20px] items-center">
            <Button
              disabled={quantityToBuy === 0}
              variant="secondary"
              size="sm"
              className="rounded-full w-8 h-8 flex items-center justify-center p-0"
              onClick={() => setQuantityToBuy(quantityToBuy - 1)}
            >
              -
            </Button>
            <p className="font-semibold text-2xl">{quantityToBuy}</p>
            <Button
              size="sm"
              className="rounded-full w-8 h-8 flex items-center justify-center p-0"
              onClick={() => setQuantityToBuy(quantityToBuy + 1)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
