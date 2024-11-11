// import { useState, useEffect } from "react";
import Layout from "@/layouts/layout";
import { useRouter } from "next/navigation";

export default function Result() {
  const router = useRouter();
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
