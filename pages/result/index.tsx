/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import Layout from "@/layouts/layout";
import { useRouter } from "next/navigation";
import UpperOrDown from "@/components/upperOrDown";
import Simulation from "@/components/simulation";
import TableComponents from "@/components/table";
import { CompressorData, ResultData } from "@/interface/interface";
import algorithm from "@/algorithm-list";
import XLSX from 'xlsx-js-style';


export default function Result() {
  const router = useRouter();
  const [hoverSelectedIndex, setHoverSelectedIndex] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false, false]);
  const [hoverSelectedLengthIndex, setHoverSelectedLengthIndex] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false, false]);
  const [indexNavigation, setIndexNavigation] = useState<string>("de_current_best_1");
  const [result, setResult] = useState<ResultData>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [compressor, setCompressor] = useState<CompressorData>({});
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if(data.length === 0) {
      const response = algorithm.map((value) => {
        const localData = localStorage.getItem(value);
        if(localData) {
          const localDataParsed = JSON.parse(localData);
          
          const resultData = result;
          setResult({...resultData, [value]: localDataParsed.best_all});
  
          const compressorData = compressor;
          setCompressor({...compressorData, [value]: localDataParsed.k});
  
          const dataNow = data;
          setData([...dataNow, {
            algorithm_name: value,
            cost: localDataParsed.cost,
            efisiensi: 1
          }]);
          return data;
        } else {
          return null;
        }
      }).filter(value => value !== null);
      if(response.length === 0) router.back();
      else setIsLoading(false);
    } 
  }, []);

  const redirectToDetail = () => {
    const dataSended = {
      result: result[data.find((value: any) => value.efisiensi === 1).algorithm_name],
      compressor: compressor[data.find((value: any) => value.efisiensi === 1).algorithm_name],
      best_data: data.find((value: any) => value.efisiensi === 1).algorithm_name
    };
    localStorage.setItem('detail', JSON.stringify(dataSended));
    router.push('/detail');
  }

  const exportData = () => {
    const wb = XLSX.utils.book_new();
    const header = Object.keys(result[data.find((value: any) => value.efisiensi === 1).algorithm_name][0]).map((key) => ({
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
    const value = result[data.find((val: any) => val.efisiensi === 1).algorithm_name].map((val: any) => {
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
    
    XLSX.writeFile(wb, `${data.find((val: any) => val.efisiensi === 1).algorithm_name.split("_").map((letter: string) => letter.charAt(0).toUpperCase() + letter.slice(1)).join(" ")}.xlsx`);
  }

  if(!isLoading)
  return (
    <Layout title="Input Data">
      <div className="bg-gradient-to-b min-h-screen from-white via-[#D3D3D3] to-[#A9A9A9] flex justify-center py-[30px] text-black">
        <div className="w-3/4 flex flex-col items-center gap-10">
            <h1 className="font-bold text-4xl self-start">Optimization Results</h1>
            <div className="bg-white w-full h-2/3 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.13)] items-center justify-center flex px-5 py-64 overflow-x-scroll">
              <div className="relative w-full h-full left-[30%]">
                <Simulation 
                  start={0} 
                  end={3} 
                  initCompressorBranch={0} 
                  initPipeBranch={50} 
                  isUp={false} 
                  result={result[indexNavigation]} 
                  compressor={compressor[indexNavigation]} 
                  hoverSelectedIndex={hoverSelectedIndex} 
                  setHoverSelectedIndex={setHoverSelectedIndex} 
                  hoverSelectedLengthIndex={hoverSelectedLengthIndex} 
                  setHoverSelectedLengthIndex={setHoverSelectedLengthIndex} 
                />
                <div className="relative top-[25px]" style={{left: `${50 + result[indexNavigation].slice(0, 2).map(val => val.l).reduce((acc, val) => { acc += val; return acc }, 0) + 2 * 50}px`}}>
                  <UpperOrDown 
                    start={3} 
                    end={7} 
                    initCompressorBranch={result[indexNavigation][2].l - 20} 
                    initPipeBranch={result[indexNavigation][2].l + 30} 
                    isUp={false} 
                    result={result[indexNavigation]} 
                    compressor={compressor[indexNavigation]} 
                    hoverSelectedIndex={hoverSelectedIndex} 
                    setHoverSelectedIndex={setHoverSelectedIndex} 
                    hoverSelectedLengthIndex={hoverSelectedLengthIndex} 
                    setHoverSelectedLengthIndex={setHoverSelectedLengthIndex} 
                  />
                  <UpperOrDown 
                    start={7} 
                    end={11} 
                    initCompressorBranch={result[indexNavigation][2].l - 20} 
                    initPipeBranch={result[indexNavigation][2].l + 30} 
                    isUp={true} 
                    result={result[indexNavigation]} 
                    compressor={compressor[indexNavigation]} 
                    hoverSelectedIndex={hoverSelectedIndex} 
                    setHoverSelectedIndex={setHoverSelectedIndex} 
                    hoverSelectedLengthIndex={hoverSelectedLengthIndex} 
                    setHoverSelectedLengthIndex={setHoverSelectedLengthIndex} 
                  />
                </div>
              </div>
            </div>
            <TableComponents data={data} />
            <div className="bg-white text-[#0D141C] font-bold text-sm px-[16px] py-[9.5px] rounded-lg cursor-pointer" onClick={redirectToDetail}>View Detail Info</div>
            <div className="self-end bg-[#1A80E5] text-[#F7FAFC] font-bold text-sm px-[16px] py-[9.5px] rounded-lg" onClick={exportData}>Export Data</div>
        </div>
      </div>
    </Layout>
  );
}
