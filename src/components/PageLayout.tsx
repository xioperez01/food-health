import React, { PropsWithChildren } from "react";
import NavigationBar from "./NavigationBar";
import TopBar from "./TopBar";

export default function PageLayout(props: PropsWithChildren) {
	return (
        
		<div className="h-screen overflow-hidden md:p-5 2xl:p-8 flex flex-row md:gap-5">
			<NavigationBar />
			<div className="h-full w-full overflow-hidden flex flex-col gap-5">
				<TopBar />
				<main className="h-full">{props.children}</main>
			</div>
		</div>
	);
}
