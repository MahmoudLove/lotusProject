import { useState } from 'react';
import classNames from 'classnames';
function StorePage() {
  const checkList = [
    'best seller',
    'perfumes',
    'Body splash',
    'sun screen',
    'lip gloss',
    'candle',
  ];
  const [firstCheck, setFirstCheck] = useState(true);
  const [secondCheck, setSecondCheck] = useState(true);
  const [thirdCheck, setthirdCheck] = useState(true);
  const [forthCheck, setForthCheck] = useState(true);
  const [fifthCheck, setfifthCheck] = useState(true);
  const [sixthCheck, setSixthCheck] = useState(true);
  /* const checkStateList = [
    firstCheck,
    secondCheck,
    thirdCheck,
    forthCheck,
    fifthCheck,
    sixthCheck,
  ];
  checkList.map((item, i) => {
    return (
      <div className="flex items-center my-2 mx-12 gap-3 justify-center">
        <input
          checked={checkStateList[i]}
          onChange={`set${i}Check(!${checkStateList[i]})`}
          type="checkbox"
          class="w-[1.5rem] h-[1.5rem] text-black/95 bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2 text-2xl"
        />
        <label className="uppercase text-black text-2xl">{item}</label>
      </div>
    );
  });*/
  return (
    <div>
      <h1 className="uppercase text-3xl text-red-500 text-center">
        chose your category
      </h1>
      <div className="grid grid-cols-2 gap-y-6 ">
        <div className="flex items-center my-2 mx-12 gap-3 justify-center">
          <input
            checked={firstCheck}
            onChange={() => setFirstCheck(!firstCheck)}
            type="checkbox"
            className="w-[1.5rem] h-[1.5rem] text-black/95 bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2 text-2xl"
          />
          <label className="uppercase text-black text-2xl">best seller</label>
        </div>

        <div className="flex items-center my-2 mx-12 gap-3">
          <input
            checked={secondCheck}
            onChange={() => setSecondCheck(!secondCheck)}
            type="checkbox"
            className="w-[1.5rem] h-[1.5rem] text-black/95 bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2 text-2xl"
          />
          <label className="uppercase text-black text-2xl">perfumes</label>
        </div>

        <div className="flex items-center my-2 mx-12 gap-3 justify-center">
          <input
            checked={thirdCheck}
            onChange={() => setthirdCheck(!thirdCheck)}
            type="checkbox"
            className="w-[1.5rem] h-[1.5rem] text-black/95 bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2 text-2xl"
          />
          <label className="uppercase text-black text-2xl">Body splash</label>
        </div>

        <div className="flex items-center my-2 mx-12 gap-3">
          <input
            checked={forthCheck}
            onChange={() => setForthCheck(!forthCheck)}
            type="checkbox"
            className="w-[1.5rem] h-[1.5rem] text-black/95 bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2 text-2xl"
          />
          <label className="uppercase text-black text-2xl">sun screen</label>
        </div>

        <div className="flex items-center my-2 mx-12 gap-3 justify-center">
          <input
            checked={fifthCheck}
            onChange={() => setfifthCheck(!fifthCheck)}
            type="checkbox"
            className="w-[1.5rem] h-[1.5rem] text-black/95 bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2 text-2xl"
          />
          <label className="uppercase text-black text-2xl">lip gloss</label>
        </div>

        <div className="flex items-center my-2 mx-12 gap-3">
          <input
            checked={sixthCheck}
            onChange={() => setSixthCheck(!sixthCheck)}
            type="checkbox"
            className="w-[1.5rem] h-[1.5rem] text-black/95 bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2 text-2xl"
          />
          <label className="uppercase text-black text-2xl">candle</label>
        </div>
      </div>
    </div>
  );
}
export default StorePage;
