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


export default function Result() {
  const router = useRouter();
  const [hoverSelectedIndex, setHoverSelectedIndex] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false, false]);
  const [hoverSelectedLengthIndex, setHoverSelectedLengthIndex] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false, false]);
  const [indexNavigation, setIndexNavigation] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<ResultData>({});
  const [compressor, setCompressor] = useState<CompressorData>({});
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if(data.length === 0) {
      const response = algorithm.map((value) => {
        const localData = localStorage.getItem(value);
        if(localData) {
          const localDataParsed = JSON.parse(localData);
          return [value, localDataParsed];
        } else {
          return null;
        }
      }).filter(value => value !== null)
        .sort((a, b) => a[1].cost - b[1].cost);
      


      const resultData = response.map(value => {
        const object = { [value[0]] : value[1].best_all }
        return object
      }).reduce((acc, item) => ({...acc, ...item}), {});
      setResult(resultData);

      const compressorData = response.map(value => {
        const object = { [value[0]] : value[1].k }
        return object
      }).reduce((acc, item) => ({...acc, ...item}), {});
      setCompressor(compressorData);

      const dataNow = response.map((value, index) => {
        const object = {
          algorithm_name: value[0],
          cost: value[1].cost,
          efisiensi: index + 1
        }
        return object
      });
      setData(dataNow);
      setIndexNavigation(dataNow.find(value => value.efisiensi === 1)?.algorithm_name);

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

  const redirectToExport = () => {
    const dataSended = {
      result: result[data.find((value: any) => value.efisiensi === 1).algorithm_name],
      compressor: compressor[data.find((value: any) => value.efisiensi === 1).algorithm_name],
      best_data: data.find((value: any) => value.efisiensi === 1).algorithm_name
    };
    localStorage.setItem('detail', JSON.stringify(dataSended));
    router.push('/export');
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
                  end={4} 
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
                <div className="relative top-[25px]" style={{left: `${100 + result[indexNavigation].slice(0, 3).map(val => val.l).reduce((acc, val) => { acc += val; return acc }, 0) + 2 * 50}px`}}>
                  <UpperOrDown 
                    start={4} 
                    end={7} 
                    initCompressorBranch={result[indexNavigation][4].l - 20} 
                    initPipeBranch={result[indexNavigation][4].l + 30} 
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
                    end={10} 
                    initCompressorBranch={result[indexNavigation][7].l - 20} 
                    initPipeBranch={result[indexNavigation][7].l + 30} 
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
            <div className="self-end bg-[#1A80E5] text-[#F7FAFC] font-bold text-sm px-[16px] py-[9.5px] rounded-lg" onClick={redirectToExport}>Export Data</div>
        </div>
      </div>
    </Layout>
  );
}
