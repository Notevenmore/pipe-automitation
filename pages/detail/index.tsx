/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import Layout from "@/layouts/layout";
import TableComponents from "@/components/table";
import { CompressorData, ResultData } from "@/interface/interface";
import { useRouter } from "next/navigation";

export default function Result() {
  const router = useRouter();
  const [result, setResult] = useState<ResultData>({
    de_current_best_1: [
      {
          ps: 753.0173055929196,
          pd: 489.5877703348741,
          l: 29.342677336501257,
          d: 13.527651909442284,
          q: 34.9133695712835
      },
      {
          ps: 873.3880570209795,
          pd: 440.09734767065044,
          l: 57.40950835961632,
          d: 10.160998156377676,
          q: 6.225620712396974,
      },
      {
          ps: 754.4426909744438,
          pd: 498.1399848407277,
          l: 42.320189619248595,
          d: 6.668847349925794,
          q: 64.94482097364352,
      },
      {
          ps: 948.5487429339496,
          pd: 714.0258127703765,
          l: 4.706110002309798,
          d: 5.066196946991697,
          q: 159.6876149951658
      },
      {
          ps: 752.3716388185098,
          pd: 561.1946257583251,
          l: 14.545488502057218,
          d: 11.788419981132636,
          q: 33.58401696353055,
      },
      {
          ps: 760.7023989019511,
          pd: 491.98552757244727,
          l: 16.17077513890394,
          d: 7.4758646480068816,
          q: 63.6010564657591,
      },
      {
          ps: 759.3146001122716,
          pd: 599.9376320314302,
          l: 10.965305821405712,
          d: 9.069470195078035,
          q: 65.68937392892316,
      },
      {
          ps: 787.8774715989995,
          pd: 614.9982055443949,
          l: 14.22281528037215,
          d: 14.15210684939215,
          q: 5.294727940060907,
      },
      {
          ps: 653.424684103534,
          pd: 651.9968293635685,
          l: 2.0,
          d: 16.54963164256231,
          q: 12.922146536431336,
      },
      {
          ps: 663.0720151848936,
          pd: 511.24969935307814,
          l: 11.721701830288973,
          d: 11.485169179940547,
          q: 25.90940206112481,
      },
      {
          ps: 628.5224683084781,
          pd: 299.6655971374357,
          l: 42.66714025888756,
          d: 4.776063900592031,
          q: 37.25709281648947
      }
    ]
  });
  const [compressor, setCompressor] = useState<CompressorData>({
    de_current_best_1: [
      1.7323414449356593,
      1.8057481572487366,
      1.0953661245330497,
      1.7630196300651513,
      1.6975167216224112,
      1.3755121795986622,
      1.4352397458162511,
      1.4877705756238886,
      1.682230413567795,
      1.0921460275918262,
    ]
  });
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
