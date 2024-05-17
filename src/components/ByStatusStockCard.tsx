/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./ui/Button";

interface Props {
  imgPath: string;
  name: string;
  date: string;
}

export default function ByStatusStockCard({ imgPath, name, date }: Props) {
  return (
    <div className="w-full p-[10px] rounded-2xl bg-white flex flex-row gap-6">
      <div
        style={{ backgroundImage: `url(${imgPath})` }}
        className="w-[91px] shrink-0 rounded-2xl aspect-square bg-cover bg-center"
      ></div>
      <div className="flex flex-col gap-0.5 items-start w-full">
        <p className="font-medium text-xl">{name}</p>
        <div className="flex flex-wrap items-center justify-between w-full">
          <p className="font-medium text-xl text-secondary">{date}</p>
          <Button className="w-5/6 sm:w-auto">Order Again</Button>
        </div>
      </div>
    </div>
  );
}
