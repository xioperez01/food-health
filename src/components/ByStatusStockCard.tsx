/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

interface Props {
  imgPath: string;
  name: string;
  date: string;
}

export default function ByStatusStockCard({ imgPath, name, date }: Props) {
  return (
    <div className="w-full p-[10px] rounded-2xl bg-white flex flex-row gap-6 items-center">
      <div className="rounded-[14px] w-[100px] sm:w-[91px] aspect-square shrink-0 overflow-hidden">
        <Image
          height={1000}
          width={1000}
          src={imgPath}
          alt={name}
          className="h-full"
        />
      </div>

      <div className="flex flex-col items-start justify-between w-full h-full">
        <p className="font-semibold text-sm sm:text-xl">{name}</p>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 w-full">
          <p className="font-medium text-xs sm:text-xl text-secondary">
            {date}
          </p>
          <Button className="w-5/6 sm:w-auto">Order Again</Button>
        </div>
      </div>
    </div>
  );
}
