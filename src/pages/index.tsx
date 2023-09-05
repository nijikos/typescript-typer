import { Inter } from "next/font/google";
import Head from "next/head";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import CodeInput from "@/components/CodeBlock/CodeInput";
import { useEffect, useState } from "react";
import { objectToType, parseStringToObject } from "@/utils/helper";
import TitleInput from "@/components/CodeBlock/TitleInput";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputText, setInputText] = useState<string>("");
  const [inputTitle, setInputTitle] = useState<string>("TData");
  const [outputType, setOutputType] = useState<string>("");

  useEffect(() => {
    console.log(`Changes`, { inputText, inputTitle });
    let obj = parseStringToObject(inputText);
    setOutputType(objectToType(obj as Record<string, any>, inputTitle));
    return () => {};
  }, [inputText, inputTitle]);

  const handleRenew = () => {
    setInputText("");
    setInputTitle("TData");
    setOutputType("");
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Typescript Typer</title>
      </Head>
      <div className='w-[600px] flex flex-col gap-6'>
        <TitleInput
          value={inputTitle}
          setValue={setInputTitle}
          handleRenew={handleRenew}
        />
        <CodeInput value={inputText} setValue={setInputText} />
        <CodeBlock
          items={[
            {
              id: "0",
              title: "Typescript",
              language: "typescript",
              value: outputType,
            },
          ]}
        />
      </div>
    </main>
  );
}
