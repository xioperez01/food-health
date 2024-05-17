import Image from "next/image";

interface Props {
  imgPath: string;
  name: string;
}

export default function CategoryCard({ imgPath, name }: Props) {
  return (
    <div className="w-full rounded-[14px] h-32 overflow-hidden relative">
      <Image
        height={1000}
        width={1000}
        src={imgPath}
        alt={name}
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="h-full flex flex-col justify-end items-start rounded-[14px] p-3.5 bg-transparent relative z-10">
        <p className="font-semibold text-sm text-white">{name}</p>
      </div>
    </div>
  );
}
