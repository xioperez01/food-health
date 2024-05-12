import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { clsx } from "clsx";

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
    <div
      className={clsx("h-10 w-10 p-2.5 rounded cursor-pointer")}
      onClick={() => void router.replace(props.href)}
    >
      <img src={`/icons/${props?.icon}.svg`} alt={props?.name} />
    </div>
  );
}

export default NavigationItem;
