import { faker } from '@faker-js/faker';
function SummaryItem({ item }) {
  return (
    <div className="grid grid-summary">
      <div className="w-[80%] flex items-center justify-center justify-self-center">
        <img
          src={faker.image.business()}
          alt="just"
          className="inline-block w-[100%] h-[100%]"
        />
      </div>
      <div className="flex flex-col justify-around">
        <h1 className="font-bold text-black text-xl">
          {item.title || item.name}
        </h1>
        <h2 className="font-bold text-red-400">
          {item.type || item.bottleSize}
        </h2>
        <span className="text-2xl">
          {item.itemCount} X {item.price},00 EGP
        </span>
      </div>
    </div>
  );
}
export default SummaryItem;
