interface Props {
  imgPath: string;
  name: string;
}

export default function CategoryCard({ imgPath, name }: Props) {
  return (
    <div
      className="w-full rounded-[14px] bg-cover bg-center h-32"
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      <div className="h-full flex flex-col justify-end items-start rounded-[14px] p-3.5 bg-gradient-to-t from-black to-transparent">
        <p className="font-semibold text-sm text-white">{name}</p>
      </div>
    </div>
  );
}
