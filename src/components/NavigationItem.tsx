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
        "h-10 w-10 p-2.5 rounded hover:backdrop-blur hover:bg-white/30 duration-200",
        { "backdrop-blur bg-white/30": path === props?.href }
      )}
      onClick={() => void router.replace(props.href)}
    >
      <Image
        width={1000}
        height={1000}
        src={`/icons/${props?.icon}.svg`}
        alt={props?.name}
        className=" h-[18px] w-[18px]"
      />
    </button>
  );
}

export default NavigationItem;
