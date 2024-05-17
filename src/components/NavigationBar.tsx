/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavigationItem from "@/components/NavigationItem";

export const navigation = [
  { name: "Stock", href: "/stock", icon: "stockpot" },
  { name: "List", href: "/list", icon: "list_alt" },
  { name: "Bar Chart", href: "/barChart", icon: "bar_chart_4_bars" },
  { name: "Grid", href: "/Grid", icon: "Grid_view" },
  { name: "Notifications", href: "/notifications", icon: "notifications" },
  { name: "Settings", href: "/settings", icon: "settings" },
];

function NavigationBar() {
  return (
    <nav className="hidden h-full p-8 w-max border rounded-[22px] md:flex flex-col items-center justify-between bg-gradient_sideBar">
      <div className="flex flex-col gap-20">
        <button>
          <img src="/icons/local_dining.svg" alt="Food Health" />
        </button>
        <div className="flex flex-col items-start gap-10">
          {navigation.map((item) => (
            <NavigationItem key={item.href} {...item} />
          ))}
        </div>
      </div>
      <button>
        <img src="/icons/logout.svg" alt="Log Out" />
      </button>
    </nav>
  );
}

export default NavigationBar;
