import clsx from "clsx";
import React, { ReactNode } from "react";

interface TabButtonProps {
  isActive: boolean;
  children: ReactNode;
  onClick: () => void;
}

export function TabButton({ children, isActive, onClick }: TabButtonProps) {
  return (
    <button
      className={clsx(
        "text-secondary font-medium text-xl px-1 hover:border-black hover:border-b-2 hover:text-black duration-200",
        { "border-black border-b-2 text-[#000]": isActive }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface TabContentProps {
  active: string;
  children: ReactNode;
  name: string;
}

export function TabContent({ children, name, active }: TabContentProps) {
  return (
    <div
      className={clsx("w-full h-auto flex mt-4", { hidden: active !== name })}
    >
      {children}
    </div>
  );
}
