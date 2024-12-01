/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import Layout from "@/layouts/layout";
import TableComponents from "@/components/table";
import { CompressorData, ResultData } from "@/interface/interface";
import { useRouter } from "next/navigation";
import algorithm from "@/algorithm-list";

export default function Result() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<ResultData>({});
  const [compressor, setCompressor] = useState<CompressorData>({});

  useEffect(() => {
    if(compressor) {
      const localData = localStorage.getItem("detail");
      if(localData) {
        const localDataParsed = JSON.parse(localData);
        
        setResult({[localDataParsed.best_data]: localDataParsed.result});
        setCompressor({[localDataParsed.best_data]: localDataParsed.compressor});
        setIsLoading(false);
      } else {
        router.back();
      }
    } 
  }, []);

  if(!isLoading)
  return (
    <Layout title="Input Data">
      <div className="bg-gradient-to-b min-h-screen from-white via-[#D3D3D3] to-[#A9A9A9] flex justify-center py-[30px] text-black">
        <div className="w-3/4 flex flex-col gap-4">
          <h1 className="font-bold text-4xl text-black">Info Detail</h1>
          {
            Object.entries(result).map(([key, value], index) => {
              return (
                <div key={index} className="flex flex-col gap-4">
                  <h2 className="font-bold text-2xl text-black">Algoritma {key.split("_").map((letter: string) => letter.charAt(0).toUpperCase() + letter.slice(1)).join(" ")}</h2>
                  <h3 className="font-bold text-xl text-black">The best vector of each branch: </h3>
                  <TableComponents data={value} />
                  <h3 className="font-bold text-xl text-black">Ratio Compressor: </h3>
                  <TableComponents data={compressor[key].map((comp, index) => ({
                    compressor_station: `#${index+1}`,
                    compressor_ratio: comp
                  }))} />
                </div>
              )
            })
          }
          <button 
            className="self-end bg-[#E8EDF2] text-black rounded-xl font-bold text-sm py-[9.5px] px-[16px]"
            onClick={() => {
              router.back();
            }}
          >Back to Results</button>
        </div>
      </div>
    </Layout>
  );
}
