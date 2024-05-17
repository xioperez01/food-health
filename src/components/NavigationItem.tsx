import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { clsx } from "clsx";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export interface NavigationItem {
  name: string;
  href: string;
  icon: string;
}

function NavigationItem(props: NavigationItem) {
  const router = useRouter();
  const path = usePathname();

  return (
    <button
      className={clsx(
        "w-full h-20 md:h-10 md:w-10 p-2.5 rounded hover:bg-white/30 duration-200 flex flex-row gap-4 items-center justify-center",
        { "bg-white/30": path === props?.href }
      )}
      onClick={() => void router.replace(props.href)}
    >
      <Image
        width={1000}
        height={1000}
        src={`/icons/${props?.icon}.svg`}
        alt={props?.name}
        className=" h-6 w-6 md:h-[18px] md:w-[18px]"
      />
      <p className="text-white md:hidden font-semibold">{props.name}</p>
    </button>
  );
}

export default NavigationItem;
