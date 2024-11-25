// import { useState, useEffect } from "react";
import Layout from "@/layouts/layout";
import { useRouter } from "next/navigation";

export default function Result() {
  const router = useRouter();
//   Best vector setiap branch:
// 	|     Pd     |     Ps     |     L       |      D      |        Q         |
// Pipe 1: [866.17072247 359.64182903  23.28914832   5.04167671]  10.628911996211237
// Pipe 2: [649.42257004 648.3284785   59.30127763   6.20726611]  0.5546380079710617
// Pipe 3: [710.15705292 347.4565629   42.78500573   4.27376708]  3.967091440127541
// ---------------------------------
// Pipe 4: [612.57274099 490.46279894   9.10522381  12.50617057]  89.27051391037564
// Pipe 5: [832.56880253 711.03777174   3.92868126   5.63631739]  19.14966435032629
// Pipe 6: [978.04111518 465.10651326  29.47335399   5.37137605]  12.214749786450017
// Pipe 7: [667.53935387 599.68066541   7.28028725  11.98230921]  71.16733467642806
// ---------------------------------
// Pipe 8: [892.18724877 381.9871365   31.76468867   6.09475296]  15.44353968745509
// Pipe 9: [642.59037861 642.43355544  23.42015038   7.01534597]  0.46080262577082753
// Pipe 10: [701.63125557 662.08092853  10.09980859   6.12990272]  8.010768910469618
// Pipe 11: [710.85347754 300.25498028   8.9974909   11.29699244]  120.21700321752029
// ---------------------------------
// Ps = 600 terpenuhi pada pipe ke: 7
// Ps = 300 terpenuhi pada pipe ke: 11
// ---------------------------------
// F(x) = 13884696.103044141
// Compressor Ratio
// Compressor 1 : 1.7323414449356593
// Compressor 2 : 1.8057481572487366
// Compressor 3 : 1.0953661245330497
// Compressor 4 : 1.7630196300651513
// Compressor 5 : 1.6975167216224112
// Compressor 6 : 1.3755121795986622
// Compressor 7 : 1.4352397458162511
// Compressor 8 : 1.4877705756238886
// Compressor 9 : 1.682230413567795
// Compressor 10 : 1.0921460275918262
  return (
    <Layout title="Input Data">
      <div className="bg-gradient-to-b min-h-screen from-white via-[#D3D3D3] to-[#A9A9A9] flex justify-center py-[30px] text-black">
        <div className="w-3/4 flex flex-col items-center gap-10">
            <h1 className="font-bold text-4xl self-start">Optimization Results</h1>
            <div className="bg-white w-full h-2/3 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.13)] items-center justify-center flex px-5 py-64 overflow-x-scroll">
            <div className="text-xl w-32 me-4">
              <p>500 psi</p>
              <p>600 MMCFD</p>
            </div>
            <div className="relative w-full h-full">
              <div className="flex items-center justify-center border-black border-2 rounded-full absolute left-0" style={{width: "50px", height: "50px"}}>1</div>
              <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute left-[50px] top-[25px]" style={{width: "50px"}}></div>
              <div className="flex items-center justify-center border-black border-2 rounded-full p-3 absolute left-[100px]" style={{width: "50px", height: "50px"}}>2</div>
              <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute left-[150px] top-[25px]" style={{width: "355px"}}></div>
              <div className="flex items-center justify-center border-black border-2 rounded-full p-3 absolute left-[505px]" style={{width: "50px", height: "50px"}}>3</div>
              <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute left-[555px] top-[25px]" style={{width: "155px"}}></div>
              <div className="flex items-center justify-center border-black border-2 rounded-full p-3 absolute left-[710px]" style={{width: "50px", height: "50px"}}>4</div>
              <div className="absolute left-[760px] top-[25px]">
                <div className="absolute top-[40px]">
                  <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute rotate-[30deg] -left-[13px]" style={{width: "100px"}}></div>
                  <div className="flex items-center justify-center border-black border-2 rounded-full p-3 absolute left-[80px]" style={{width: "50px", height: "50px"}}>8</div>
                  <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute left-[130px] top-[25px]" style={{width: "100px"}}></div>
                  <div className="flex items-center justify-center border-black border-2 rounded-full p-3 absolute left-[230px]" style={{width: "50px", height: "50px"}}>9</div>
                  <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute left-[280px] top-[25px]" style={{width: "100px"}}></div>
                  <div className="flex items-center justify-center border-black border-2 rounded-full p-3 absolute left-[380px]" style={{width: "50px", height: "50px"}}>10</div>
                </div>
                <div className="absolute -top-[40px]">
                  <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute -rotate-[30deg] -left-[13px]" style={{width: "100px"}}></div>
                  <div className="flex items-center justify-center border-black border-2 rounded-full p-3 absolute left-[80px] -top-[55px]" style={{width: "50px", height: "50px"}}>5</div>
                  <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute left-[130px] -top-[30px]" style={{width: "100px"}}></div>
                  <div className="flex items-center justify-center border-black border-2 rounded-full p-3 absolute left-[230px] -top-[55px]" style={{width: "50px", height: "50px"}}>6</div>
                  <div className="h-[1px] flex items-center justify-center border-black border-[1px] absolute left-[280px] -top-[30px]" style={{width: "100px"}}></div>
                  <div className="flex items-center justify-center border-black border-2 rounded-full p-3 absolute left-[380px] -top-[55px]" style={{width: "50px", height: "50px"}}>7</div>
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
