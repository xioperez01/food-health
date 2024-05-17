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
        "font-medium text-xl px-1 hover:border-black border-black border-b-2 text-black hover:border-b-2 hover:text-black duration-200",
        { "text-secondary border-none": !isActive }
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
