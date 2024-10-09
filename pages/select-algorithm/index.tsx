import { useState, useEffect } from "react";
import Layout from "@/layouts/layout";
import { useRouter } from "next/navigation";
import algorithm from "@/algorithm-list";

interface Pipe {
  pipe_initial_pressure: number;
  required_output_pressures_p1: number;
  distance_to_consumer_l1: number;
  required_output_pressures_p2: number;
  distance_to_consumer_l2: number;
}
interface Error {
  pipe_initial_pressure?: string;
  required_output_pressures_p1?: string;
  distance_to_consumer_l1?: string;
  required_output_pressures_p2?: string;
  distance_to_consumer_l2?: string;
}

export default function SelectAlgorithm() {
  const router = useRouter();
  const [index, setIndex] = useState<number>(-1);

  const handleSubmit = () => {};
  return (
    <Layout title="Input Data">
      <div className="bg-[#F7FAFC] flex items-center justify-center py-[40px] text-black">
        <div className="flex flex-col gap-4 items-start justify-start w-[72rem]">
          <h1 className="font-bold text-3xl text-start">Select an algorithm</h1>
          <div className="flex flex-col gap-3 p-4 w-full">
            {algorithm.map((value, i) => (
              <div key={i} className="w-full bg-gradient-to-r from-[#AFAFAF] to-white p-4 flex justify-between rounded-xl drop-shadow-xl" onClick={() => setIndex(i)}>
                <p className="text-sm font-medium">{value}</p>
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
            <button className="text-white bg-[#2194F2] px-6 py-2 rounded-3xl font-bold text-sm">Continue</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
