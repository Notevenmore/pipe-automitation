/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import XLSX from 'xlsx-js-style';
import { useState, useEffect } from "react";
// import { CompressorData, ResultData } from "@/interface/interface";
// import algorithm from "@/algorithm-list";
import { useRouter } from 'next/router';
import Layout from '@/layouts/layout';

export default function ExportFile() {
  const [result, setResult] = useState([]);
  const [compressor, setCompressor] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedFileExport, setSelectedFileExport] = useState<string>();
  const [bestData, setBestData] = useState("");
  const router = useRouter();

  useEffect(() => {
    if(compressor) {
      const localData = localStorage.getItem("detail");
      if(localData) {
        const localDataParsed = JSON.parse(localData);
        
        setResult(localDataParsed.result);
        setCompressor(localDataParsed.compressor);
        setBestData(localDataParsed.best_data);
        setIsLoading(false);
      } else {
        router.back();
      }
    } 
  }, []);

  const exportXLSX = () => {
      const wb = XLSX.utils.book_new();
      const header = Object.keys(result[0]).map((key) => ({
        v: key,
        t: "s",
        s: {
          font: {
            name: "Times New Roman", sz: 14,
            bold: true,
            color: "white"
          },
          fill: { bgColor: "black" },
          alignment: { 
            vertical: "center",
            horizontal: "center",
          }
         }
      }));
      const value = result.map((val: any) => {
        return Object.values(val).map((v) => ({
          v: v,
          t: "n",
          s: { 
            font: { name: "Times New Roman", sz: 12 },
            alignment: { 
              vertical: "center",
              horizontal: "center",
            }
          }
        }));
      });
      const ws = XLSX.utils.aoa_to_sheet([header, ...value]);
      XLSX.utils.book_append_sheet(wb, ws, "sheet1");
      
      XLSX.writeFile(wb, `${bestData.split("_").map((letter: string) => letter.charAt(0).toUpperCase() + letter.slice(1)).join(" ")}.xlsx`);
  }

  const exportCSV = () => {
    const header = Object.keys(result[0]).join(",");
    const value = result.map((val: any) => {
      return Object.values(val).join(",");
    });
    const csvContent = [
      header,
      ...value
    ].join("\n");

    const blob = new Blob([csvContent], {type: "text/csv;charset=utf-8;"});
    const filename = `${bestData.split("_").map((letter: string) => letter.charAt(0).toUpperCase() + letter.slice(1)).join(" ")}.csv`

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if(!isLoading)
  return <Layout title="Export Data">
    <div className="bg-gradient-to-b min-h-screen from-white via-[#D3D3D3] to-[#A9A9A9] flex justify-center py-[30px] text-black">
      <div className="w-3/4 flex flex-col gap-[16px]">
        <h1 className="font-bold text-4xl self-start">Export Results</h1>
        <p className="text-base">You can export your results in either CSV or XLSX format.</p>
        <h3 className="text-lg font-bold">Choose a file format</h3>
        <div className="flex flex-row gap-[12px]">
          <button className="px-[16px] py-[10.5px] border-2 border-[#D1DEE5] rounded-xl cursor-pointer" onClick={() => {setSelectedFileExport("CSV")}}>CSV</button>
          <button className="px-[16px] py-[10.5px] border-2 border-[#D1DEE5] rounded-xl cursor-pointer" onClick={() => {setSelectedFileExport("XLSX")}}>XLSX</button>
        </div>
        <div 
          className="self-end bg-[#1A80E5] text-[#F7FAFC] font-bold text-sm px-[16px] py-[9.5px] rounded-lg"
          onClick={() => {
            if(selectedFileExport === "CSV") exportCSV();
            else if(selectedFileExport === "XLSX") exportXLSX();
          }}
        >Export Data</div>
        <button 
            className="self-end bg-[#E8EDF2] text-black rounded-xl font-bold text-sm py-[9.5px] px-[16px]"
            onClick={() => {
              router.back();
            }}
          >Back to Results</button>
      </div>
    </div>
  </Layout>
}