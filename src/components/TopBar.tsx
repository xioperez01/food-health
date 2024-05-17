export default function TopBar() {
  return (
    <div className="sticky bg-lightGrey top-0 z-50 h-max-content w-full shrink-0 items-center justify-between bg-background flex p-7 md:pb-7 md:pr-6 md:p-0 2xl:p-0 flex-row gap-4">
      <div className="flex flex-col gap-1 min-w-1/3 shrink-0">
        <h1 className="font-bold text-xl md:text-[32px] text-softOrange">
          Food<span className="text-primary">Health</span>
        </h1>
        <p className="text-xs md:text-xl font-normal">
          What do you want to eat today?
        </p>
      </div>
      <div className="hidden md:flex w-2/3 h-[60px] shrink relative">
        <input
          type="text"
          placeholder="Search"
          className="rounded-full w-full px-8 text-lg"
        />
        <svg
          className="absolute inset-y-1/2 right-8 -translate-y-1/2"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7446 23.75L16.8391 19.1C16.0335 19.7444 15.1071 20.2546 14.0599 20.6306C13.0127 21.0065 11.8983 21.1944 10.7169 21.1944C7.79 21.1944 5.31292 20.1808 3.2856 18.1535C1.25829 16.1262 0.244629 13.6491 0.244629 10.7222C0.244629 7.79537 1.25829 5.31829 3.2856 3.29097C5.31292 1.26366 7.79 0.25 10.7169 0.25C13.6437 0.25 16.1208 1.26366 18.1481 3.29097C20.1754 5.31829 21.1891 7.79537 21.1891 10.7222C21.1891 11.9037 21.0011 13.0181 20.6252 14.0653C20.2493 15.1125 19.7391 16.0389 19.0946 16.8444L24.0002 21.4944L21.7446 23.75ZM10.7169 17.9722C12.7307 17.9722 14.4425 17.2674 15.8523 15.8576C17.262 14.4479 17.9669 12.7361 17.9669 10.7222C17.9669 8.70833 17.262 6.99653 15.8523 5.58681C14.4425 4.17708 12.7307 3.47222 10.7169 3.47222C8.70296 3.47222 6.99116 4.17708 5.58143 5.58681C4.17171 6.99653 3.46685 8.70833 3.46685 10.7222C3.46685 12.7361 4.17171 14.4479 5.58143 15.8576C6.99116 17.2674 8.70296 17.9722 10.7169 17.9722Z"
            fill="#CACACA"
          />
        </svg>
      </div>
    </div>
  );
}
