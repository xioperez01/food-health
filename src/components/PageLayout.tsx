import React, { PropsWithChildren } from "react";
import NavigationBar from "./NavigationBar";
import TopBar from "./TopBar";
import { TailwindIndicator } from "./TailwindIndicator";

export default function PageLayout(props: PropsWithChildren) {
  return (
    <div className="h-screen overflow-hidden md:p-5 md:pr-0 2xl:p-8 flex flex-row md:gap-5 pb-5">
      <NavigationBar />
      <div className="h-full w-full overflow-hidden flex flex-col 2xl:gap-5">
        <TopBar />
        <main className="h-full overflow-auto md:pr-5 2xl:pr-0 xl:overflow-hidden">
          {props.children}
        </main>
      </div>
      <TailwindIndicator />
    </div>
  );
}
