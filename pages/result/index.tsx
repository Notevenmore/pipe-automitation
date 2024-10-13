import { useState, useEffect } from "react";
import Layout from "@/layouts/layout";
import { useRouter } from "next/navigation";

export default function Result() {
  const router = useRouter();
  return (
    <Layout title="Input Data">
      <div className="bg-gradient-to-b min-h-screen from-white via-[#D3D3D3] to-[#A9A9A9] flex justify-center py-[30px] text-black">
        <div className="w-3/4 flex flex-col items-center gap-10">
            <h1 className="font-bold text-4xl self-start">Optimization Results</h1>
            <div className="bg-white w-full h-2/3 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.13)]"></div>
            <table className="bg-white w-full rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.13)] overflow-hidden text-start">
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
            <div className="bg-white text-[#0D141C] font-bold text-sm px-[16px] py-[9.5px] rounded-lg">View Detail Info</div>
            <div className="self-end bg-[#1A80E5] text-[#F7FAFC] font-bold text-sm px-[16px] py-[9.5px] rounded-lg">Export Data</div>
        </div>
      </div>
    </Layout>
  );
}
