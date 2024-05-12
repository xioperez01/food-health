export default function TopBar() {
	return (
		<div className="sticky top-0 z-50 hidden h-max-content bg-red-500 w-full shrink-0 items-center justify-between bg-background md:flex md:px-0 flex-row gap-2">
            
			<div className="flex flex-col gap-1 min-w-1/3 shrink-0">
				<h1 className="font-bold text-3xl">Food Health</h1>
				<p className="text-xl">What do you want to eat today?</p>
			</div>
			<input type="text" placeholder="Search" className="w-2/3 rounded-full h-[60px] px-8 shrink" />
		</div>
	);
} 
