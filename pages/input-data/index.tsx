/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Layout from "@/layouts/layout";
import { useRouter } from "next/navigation";
import { Pipe, Error } from "@/interface/interface";

export default function InputData() {
  const [data, setData] = useState<Pipe>();
  const [error, setError] = useState<Error>();
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = () => {
    const error = {} as Error;
    let isErrorStatus = false;
    if (!data || !data.pipe_initial_pressure) {
      error.pipe_initial_pressure = "isi kelengkapan data berikut!";
      isErrorStatus = true;
    }
    if (!data || !data.distance_to_consumer_l1) {
      error.distance_to_consumer_l1 = "isi kelengkapan data berikut!";
      isErrorStatus = true;
    }
    if (!data || !data.required_output_pressures_p1) {
      error.required_output_pressures_p1 = "isi kelengkapan data berikut!";
      isErrorStatus = true;
    }
    if (!data || !data.distance_to_consumer_l2) {
      error.distance_to_consumer_l2 = "isi kelengkapan data berikut!";
      isErrorStatus = true;
    }
    if (!data || !data.required_output_pressures_p2) {
      error.required_output_pressures_p2 = "isi kelengkapan data berikut!";
      isErrorStatus = true;
    }
    setError(error);
    setIsError(isErrorStatus);
    if (isErrorStatus) {return;}
    localStorage.setItem("data", JSON.stringify(data));
    router.push("/select-algorithm");
  };

  return (
    <Layout title="Input Data">
      <div className="bg-gradient-to-r from-[#D9D9D9] to-white flex justify-center overflow-x-hidden text-black py-10 min-h-[calc(100vh-8vh)]">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className=" font-bold text-4xl mb-6">Input data</h1>
          <p className=" text-center mb-1 w-[53rem]">Enter the starting pipe pressure and distance to the consumer to get started. You can find the pipe starting pressure at the very top of the pipe</p>
          <div className="flex flex-col items-stretch justify-stretch w-full gap-4 mb-[19px]">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-semibold">{"Pipe Initial Pressure (psi)"}</label>
                <input type="number" placeholder={"Contoh: 5"} className="bg-white border-none outline-none p-4 rounded-xl w-full h-full" onChange={(e) => setData({ ...data!, pipe_initial_pressure: Number(e.target.value) })} />
                {error && error.pipe_initial_pressure && <p className="text-red-500 font-bold text-sm">{error.pipe_initial_pressure}</p>}
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-semibold">{"required output pressures (P1) in psi"}</label>
                <input type="number" placeholder={"Contoh: 100"} className="bg-white border-none outline-none p-4 rounded-xl w-full h-full" onChange={(e) => setData({ ...data!, required_output_pressures_p1: Number(e.target.value) })} />
                {error && error.required_output_pressures_p1 && <p className="text-red-500 font-bold text-sm">{error.required_output_pressures_p1}</p>}
              </div>
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-semibold">{"Distance to Consumer (L1) in miles"}</label>
                <input type="number" placeholder={"Contoh: 100"} className="bg-white border-none outline-none p-4 rounded-xl w-full h-full" onChange={(e) => setData({ ...data!, distance_to_consumer_l1: Number(e.target.value) })} />
                {error && error.distance_to_consumer_l1 && <p className="text-red-500 font-bold text-sm">{error.distance_to_consumer_l1}</p>}
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-semibold">{"required output pressures (P2) in psi"}</label>
                <input type="number" placeholder={"Contoh: 100"} className="bg-white border-none outline-none p-4 rounded-xl w-full h-full" onChange={(e) => setData({ ...data!, required_output_pressures_p2: Number(e.target.value) })} />
                {error && error.required_output_pressures_p2 && <p className="text-red-500 font-bold text-sm">{error.required_output_pressures_p2}</p>}
              </div>
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-semibold">{"Distance to Consumer (L2) in miles"}</label>
                <input type="number" placeholder={"Contoh: 100"} className="bg-white border-none outline-none p-4 rounded-xl w-full h-full" onChange={(e) => setData({ ...data!, distance_to_consumer_l2: Number(e.target.value) })} />
                {error && error.distance_to_consumer_l2 && <p className="text-red-500 font-bold text-sm">{error.distance_to_consumer_l2}</p>}
              </div>
            </div>
          </div>
          <button className="bg-[#1A80E5] py-[9.5px] w-[27rem] font-bold text-white rounded-xl mb-3" onClick={handleSubmit}>
            Optimize
          </button>
          <button className="bg-white py-[9.5px] w-[12rem] font-bold text-[#4F7396] rounded-xl" onClick={() => router.back()}>
            Back
          </button>
        </div>
      </div>
    </Layout>
  );
}
