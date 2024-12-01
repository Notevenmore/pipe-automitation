/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Layout from "@/layouts/layout";
import { useRouter } from "next/navigation";
import algorithm from "@/algorithm-list";
import api from "@/components/axiosGet";

export default function SelectAlgorithm() {
  const router = useRouter();
  const [index, setIndex] = useState<number>(-1);
  const [error, setError] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const handleSubmit = async () => {
    if(index === -1) {
      setIsError(true);
      setError("Algorithm hasn't be choosen. Choose the algorithm, or try all algorithm to find more efficient algorithm")
    } else{ 
      setError(""); 
      setIsError(false);
      let selectedAlgorithm;
      if(index === algorithm.length) selectedAlgorithm = "All";
      else selectedAlgorithm = algorithm[index];
  
      const sendData = localStorage.getItem("data");
      if(sendData) {
        const datas = JSON.parse(sendData);
        const data = {
          ps: datas.pipe_initial_pressure,
          ps1: datas.required_output_pressures_p1,
          ps2: datas.required_output_pressures_p2,
          length_b1_b2: datas.distance_to_consumer_l1,
          length_b1_b3: datas.distance_to_consumer_l2,
          requested: selectedAlgorithm
        }

        const response = await api.post('/automated', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        localStorage.setItem(selectedAlgorithm, JSON.stringify(response.data));
        router.push('result');
      }
    }
  };
  return (
    <Layout title="Input Data">
      <div className="bg-[#F7FAFC] flex items-center justify-center py-[40px] text-black">
        <div className="flex flex-col gap-4 items-start justify-start w-[72rem]">
          <h1 className="font-bold text-3xl text-start">Select an algorithm</h1>
          {isError && <div className="bg-red-300 w-full px-10 h-16 rounded-xl text-red-700 flex items-center justify-start">{error}</div>}
          <div className="flex flex-col gap-3 p-4 w-full">
            {algorithm.map((value, i) => (
              <div key={i} className="w-full bg-gradient-to-r from-[#AFAFAF] to-white p-4 flex justify-between rounded-xl drop-shadow-xl" onClick={() => setIndex(i)}>
                <p className="text-sm font-medium">{value.split("_").map((value) => value.charAt(0).toUpperCase()+value.slice(1)).join(" ")}</p>
                {index === i ? <input type="radio" checked /> : <input type="radio" />}
              </div>
            ))}
            <div className="w-full bg-gradient-to-r from-[#AFAFAF] to-white p-4 flex justify-between rounded-xl drop-shadow-xl" onClick={() => setIndex(algorithm.length)}>
              <p className="text-sm font-medium">Most Efficient Algorithm</p>
              {index === algorithm.length ? <input type="radio" checked /> : <input type="radio" />}
            </div>
          </div>
          <div className="flex self-end items-end justify-end gap-3">
            <button className="text-[#4F7396] bg-[#E8EDF5] px-6 py-2 rounded-3xl font-bold text-sm" onClick={router.back}>
              Back
            </button>
            <button className="text-white bg-[#2194F2] px-6 py-2 rounded-3xl font-bold text-sm" onClick={handleSubmit}>Continue</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
