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
    <div className="hidden h-full p-8 w-max border rounded-[22px] md:flex flex-col items-center justify-between bg-gradient_sideBar">
      <img src="/icons/local_dining.svg" alt="Food Health" />
      <div className="flex flex-col items-start gap-10">
        {navigation.map((item) => (
          <NavigationItem key={item.href} {...item} />
        ))}
      </div>
      <img src="/icons/logout.svg" alt="Log Out" />
    </div>
  );
}

export default NavigationBar;
