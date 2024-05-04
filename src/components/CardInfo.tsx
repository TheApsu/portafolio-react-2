import { PropsWithChildren } from 'react';

type CardInfoProps = {
  cardName: string;
};

export default function CardInfo({
  cardName,
  children,
}: PropsWithChildren<CardInfoProps>) {
  return (
    <div className='flex flex-col text-center '>
      <div className='bg-slate-100 rounded-lg p-6 flex justify-evenly items-center text-center leading-3 shadow-lg shadow-[#0f172a91]'>
        {children}
      </div>
      <p className='text-white font-light'>{cardName}</p>
    </div>
  );
}
