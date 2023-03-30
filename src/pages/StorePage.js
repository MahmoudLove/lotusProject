import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function StorePage() {
  // const {
  //   data: { data },
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ['fetchCheckBoxes'],
  //   queryFn: () => axios.get('http://localhost:3005/checkBox'),
  // });
  const [checkState, setCheckState] = useState({});
  // if (isLoading) return <h1>Loading</h1>;
  // else if (error) return <h1>Error</h1>;
  // console.log(data);
  const data = [
    'Best Seller',
    'Perfumes',
    'Body Splash',
    'Sun Screen',
    'Lip Gloss',
    'Candle',
  ];
  return (
    <div>
      <h1 className="uppercase text-3xl text-red-500 text-center">
        chose your category
      </h1>
      <div className="grid grid-cols-2 gap-y-6 ">
        {data.map((check) => {
          const checkOrNot =
            check.toLocaleLowerCase() === 'best seller' ||
            check.toLocaleLowerCase() === 'sun screen'
              ? true
              : false;
          return (
            <div className="flex items-center my-2 mx-12 gap-3 justify-center">
              <input
                checked={checkOrNot ? true : checkState[check]}
                name={check}
                onChange={() =>
                  setCheckState((previous) => {
                    return { ...previous, [check]: !previous[check] };
                  })
                }
                type="checkbox"
                className="w-[1.5rem] h-[1.5rem] text-black/95 bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2 text-2xl"
              />
              <label className="uppercase text-black text-2xl">{check}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default StorePage;

// const data ={data:['afa','faaf'],value : false}
// const {data} =data
