"use client";
import React, { useState, useEffect } from "react";
import NoDefinition from "@/components/NoDefinition";
import Image from "next/image";
import Link from "next/link";
import { useFont } from "./ThemeContent";

interface WordProps {
  word: string;
}

const Word: React.FC<WordProps> = ({ word }) => {
  interface Phonetic {
    text: string;
    audio: string;
  }

  interface Meaning {
    partOfSpeech: string;
    definitions: { definition: string; example?: string }[];
    synonyms: string[];
    antonyms: string[];
  }

  interface WordData {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    sourceUrls: string[];
  }

  const [data, setData] = useState<WordData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { fontFamily } = useFont();

  useEffect(() => {
    document.body.className = `${fontFamily}`;
  }, [fontFamily]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/dictionary?word=${word}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setData([]);
        setError((error as Error).message);
      }
    };
    fetchData();
  }, [word]);

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  const firstPhonetic =
    data.length > 0
      ? data[0].phonetics.find(
          (phonetic: { text: string; audio: string }) =>
            phonetic.text && phonetic.audio
        )
      : null;

  return (
    <div className="container mx-auto p-4 w-full max-w-[736px] dark:text-white min-h-screen">
      {error && <NoDefinition />}
      {data.length > 0 ? (
        <div>
          <div>
            {firstPhonetic ? (
              <div className="mt-8 mb-4 flex flex-row w-full justify-between ">
                <div>
                  <div className="text-6xl font-bold mb-2">{data[0].word}</div>
                  <p className="text-2xl text-primary">{firstPhonetic.text}</p>
                </div>

                <Image
                  onClick={() => playAudio(firstPhonetic.audio)}
                  src="/icon-play.svg"
                  width={75}
                  height={75}
                  alt="play audio"
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <div className="mt-8 text-6xl font-bold mb-2">{data[0].word}</div>
            )}
            {data[0].meanings.map((meaning: Meaning, index: number) => (
              <div key={index} className="mb-4">
                <div className="flex flex-row gap-5 items-center">
                  <h3 className="text-2xl  font-bold my-5">
                    {meaning.partOfSpeech}
                  </h3>
                  <hr className="border-gray-300 my-4 w-full" />
                </div>

                <ul className="list-disc list-inside">
                  <div className=" text-xl text-custom-medium mb-4">
                    Meaning
                  </div>
                  {meaning.definitions.map(
                    (
                      definition: { definition: string; example?: string },
                      defIndex: number
                    ) => (
                      <div
                        key={defIndex}
                        className="ml-5 text-lg my-3 leading-snug"
                      >
                        <li className="custom-list-item  text-lg">
                          {definition.definition}
                        </li>
                        <div className="text-custom-medium mt-2">
                          {definition.example}
                        </div>
                      </div>
                    )
                  )}{" "}
                </ul>
                {meaning.synonyms[0] && (
                  <div className="flex flex-row h-fit mt-6">
                    <div className=" text-xl text-custom-medium mb-4 mr-5">
                      Synonyms
                    </div>
                    <div className="w-full h-fit flex flex-wrap">
                      {meaning.synonyms.map(
                        (synonym: string, synIndex: number) => (
                          <div
                            key={synIndex}
                            className=" mx-2 text-xl text-primary font-bold"
                          >
                            {synonym}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
                {meaning.antonyms[0] && (
                  <div className="flex flex-row h-fit mt-0">
                    <div className=" text-xl text-custom-medium mb-4 mr-5">
                      Antonyms
                    </div>
                    <div className="w-full h-fit flex flex-wrap">
                      {meaning.antonyms.map(
                        (antonym: string, antIndex: number) => (
                          <div
                            key={antIndex}
                            className=" mx-2 text-xl text-primary font-bold"
                          >
                            {antonym}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <hr className="border-gray-300 my-4 w-full mt-10" />

            {data[0].sourceUrls && (
              <div className="flex flex-row gap-5 mb-16">
                <div className="text-custom-medium  text-sm underline">
                  Source
                </div>
                <Link
                  className="text-sm underline"
                  href={data[0].sourceUrls[0]}
                >
                  {data[0].sourceUrls}
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Word;
