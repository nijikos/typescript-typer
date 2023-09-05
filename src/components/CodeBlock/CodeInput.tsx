import React from "react";

type CodeInputProps = {
  value: string;
  setValue: (e: string) => void;
};

export default function CodeInput({ value, setValue }: CodeInputProps) {
  return (
    <div className='space-y-4 bg-[#2E3440] rounded-xl p-6'>
      <textarea
        className='bg-[#2E3440] text-[#85AEAE] resize-none focus:outline-none w-full'
        rows={10}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
