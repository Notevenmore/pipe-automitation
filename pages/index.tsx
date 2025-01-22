/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Layout from "@/layouts/layout";
import { useRouter } from "next/navigation";

export default function Home({}) {
  const router = useRouter();
  return (
    <Layout title="Start Page">
      <div className="w-screen bg-gradient-to-r from-[#D9D9D9] to-white flex items-center justify-center h-[calc(100vh-10.5vh)]">
        <div className="bg-[url('/gasnet/images/mainbackground.png')] bg-no-repeat bg-cover w-[955px] h-[512px] rounded-xl px-[120px] py-[78px] flex flex-col gap-5">
          <h1 className="text-[#BBE0FF] font-black text-5xl">Start Optimizing Your Pipeline System Now.</h1>
          <h6 className="font-bold text-2xl">Optimal Calculation For a Better System</h6>
          <div className="flex gap-6">
            <button className="bg-[#2194f2] flex justify-evenly items-center w-[171px] h-[52px] rounded-xl font-bold" onClick={() => router.push("/input-data")}>
              {"Start Now"}
              <img src="/gasnet/icons/arrow.svg" />
            </button>
              {/* <button className="bg-[#EBFDF5] text-[#4f7396] flex justify-evenly items-center w-[171px] h-[52px] rounded-xl font-bold">
                <p>{"Latest Result"}</p>
                <p>{">"}</p>
              </button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
