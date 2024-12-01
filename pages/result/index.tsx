/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import Layout from "@/layouts/layout";
import { useRouter } from "next/navigation";

interface Result {
  ps: number;
  pd: number;
  l: number;
  d: number;
}

function Simulation ({start, end, initCompressorBranch, initPipeBranch, isUp, result, compressor, setHoverSelectedIndex, hoverSelectedIndex}: any) {
  return result.slice(start, end).map((value: any, i: number) => {
    return (
      <div key={i} className="relative">
        {
          hoverSelectedIndex[i + start] && 
          <div className="absolute -top-[250px] -left-36 border-black border-2 p-4 rounded-xl w-[500px]">
            <p>Compressor:  {compressor[i + start]}</p>
            <p>Pd:  {value[0]} MMCFD</p>
            <p>Ps:  {value[1]} PSI</p>
            <p>l: {value[2]} miles</p>
            <p>d: {value[3]} cm</p>
          </div>
        }
          <div 
            onMouseEnter={() => {
              const selectedIndex = [...hoverSelectedIndex];
              selectedIndex[i + start] = true;
              setHoverSelectedIndex(selectedIndex);
            }}
            onMouseLeave={() => {
              const selectedIndex = [...hoverSelectedIndex];
              selectedIndex[i + start] = false;
              setHoverSelectedIndex(selectedIndex);
            }}
            className={`flex items-center justify-center border-black border-2 rounded-full absolute ${isUp && "-top-[45px]"}`} 
            style={{width: "50px", height: "50px", left: `${i === 0 ? initCompressorBranch : initCompressorBranch + result.slice(start, i + start).map((val: any) => val[2]).reduce((acc: any, val: any) => { acc += val; return acc }, 0) + i * 50}px` }}
          >{i+start + 1}</div>
          {i !== (end - start - 1) && <div className={`h-[1px] flex items-center justify-center border-black border-[1px] absolute ${isUp ? "-top-[20px]" : "top-[25px]"}`} style={{width: `${value[2]}px`, left: `${i === 0 ? initPipeBranch : initPipeBranch + result.slice(start, i + start).map((val: any) => val[2]).reduce((acc: any, val: any) => { acc += val; return acc }, 0) + i * 50}px`}}></div>}
      </div>
    )
  })
}


export default function Result() {
  const router = useRouter();
  const [hoverSelectedIndex, setHoverSelectedIndex] = useState([false, false, false, false, false, false, false, false, false, false, false]);
  // format pd, ps, l, d, q
  const [result, setResult] = useState([
     [701.25133261, 471.00881617,  21.52499159, 4, 10.628911996211237],
    [971.80988514, 476.26989277,  43.71686891, 13.17587302, 0.5546380079710617],
    [635.69332774, 568.92785319, 60.13303615, 4.07253664, 3.967091440127541],
    [723.8564513,  626.48684081, 20.69870245, 4.08411964, 89.27051391037564],
    [769.47972613, 609.95056145, 6.20970002, 18, 19.14966435032629],
    [760.93590527, 614.84791113, 12.45646561, 7.11428831, 12.214749786450017],
    [640.44483082, 600.18795116, 10.17975685, 13.6550791, 71.16733467642806],
    [844.06634243, 580.5532022, 37.18612387, 5.42823829, 15.44353968745509],
    [739.4223457, 342.03999175, 7.81809052, 1024.34848526, 0.46080262577082753],
    [997.73933601, 376.8800504, 13.78066334, 8.86298738, 8.010768910469618],
    [979.5699358, 299.88804521, 15.55203021, 10.84434546, 120.21700321752029],
  ]);
  const [compressor, setCompressor] = useState([
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
  ]);
// ---------------------------------
// Ps = 600 terpenuhi pada pipe ke: 7
// Ps = 300 terpenuhi pada pipe ke: 11
// ---------------------------------
// F(x) = 13884696.103044141

  return (
    <Layout title="Input Data">
      <div className="bg-gradient-to-b min-h-screen from-white via-[#D3D3D3] to-[#A9A9A9] flex justify-center py-[30px] text-black">
        <div className="w-3/4 flex flex-col items-center gap-10">
            <h1 className="font-bold text-4xl self-start">Optimization Results</h1>
            <div className="bg-white w-full h-2/3 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.13)] items-center justify-center flex px-5 py-64">
            <div className="text-xl w-32 me-4">
              <p>500 psi</p>
              <p>600 MMCFD</p>
            </div>
            <div className="relative w-full h-full left-[20%]">
            <Simulation start={0} end={3} initCompressorBranch={0} initPipeBranch={50} isUp={false} result={result} compressor={compressor} hoverSelectedIndex={hoverSelectedIndex} setHoverSelectedIndex={setHoverSelectedIndex} />
              <div className="relative top-[25px]" style={{left: `${50 + result.slice(0, 2).map(val => val[2]).reduce((acc, val) => { acc += val; return acc }, 0) + 2 * 50}px`}}>
                <div className="absolute top-[33px]">
                  <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute rotate-[30deg] -left-[13px]" style={{width: `${result[2][2]}px`,}}></div>
                  <Simulation start={3} end={7} initCompressorBranch={result[2][2] - 20} initPipeBranch={result[2][2] + 30} isUp={false} result={result} compressor={compressor} hoverSelectedIndex={hoverSelectedIndex} setHoverSelectedIndex={setHoverSelectedIndex} />
                </div>
                <div className="absolute -top-[33px]">
                    <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute -rotate-[30deg] -left-[13px]" style={{width: `${result[2][2]}px`,}}></div>
                    <Simulation start={7} end={11} initCompressorBranch={result[2][2] - 20} initPipeBranch={result[2][2] + 30} isUp={true} result={result} compressor={compressor} hoverSelectedIndex={hoverSelectedIndex} setHoverSelectedIndex={setHoverSelectedIndex} />
                </div>
              </div>
            </div>
            </div>
            <table className="bg-white w-full rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.13)] overflow-hidden text-center">
                <thead className="bg-gradient-to-r from-[#A9A9A9] to-[#FFFFFF]">
                    <tr>
                        <th className="p-6">Algorithm Name</th>
                        <th className="p-6">Cost</th>
                        <th className="p-6">Efisiensi</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <td className="p-6">Algoritma G</td>
                        <td className="p-6">$13,988,681</td>
                        <td className="p-6">5</td>
                    </tr>
                </tbody>
            </table>
            <div className="bg-white text-[#0D141C] font-bold text-sm px-[16px] py-[9.5px] rounded-lg cursor-pointer" onClick={() => router.push('/detail')}>View Detail Info</div>
            <div className="self-end bg-[#1A80E5] text-[#F7FAFC] font-bold text-sm px-[16px] py-[9.5px] rounded-lg">Export Data</div>
        </div>
      </div>
    </Layout>
  );
}
