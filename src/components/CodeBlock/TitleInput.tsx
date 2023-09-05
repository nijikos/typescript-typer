import React from "react";

type TitleInputProps = {
  value: string;
  setValue: (e: string) => void;
  handleRenew: () => void;
};

export default function TitleInput({
  value,
  setValue,
  handleRenew,
}: TitleInputProps) {
  return (
    <div className='space-y-4'>
      <div className='flex flex-row justify-between items-end'>
        <p className='text-n-7'>Custom Type Name:</p>
        <button
          className='bg-[#2E3440] text-[#F5CD90] px-4 py-2 rounded-full hover:translate-y-0.5 transition-all'
          onClick={() => {
            handleRenew();
          }}
        >
          New Object
        </button>
      </div>
      <input
        className='bg-[#2E3440] text-[#F5CD90] resize-none focus:outline-none rounded-xl p-6 w-full'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
