/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import Layout from '@/layouts/layout';
import SubMenu from "./components/submenu";

export default function ExportFile() {
  const router = useRouter();

  return <Layout title="About">
    <div className="flex flex-col px-44 py-9 gap-9 items-center justify-center h-full w-full">
        <div className="flex flex-col gap-3">
            <h1 className="text-black font-extrabold text-4xl">Design and optimize gas distribution networks with GasNet</h1>
            <p className="text-[#4F7A94] text-base">GasNet is a cloud-based application that enables users to design and optimize gas distribution networks, taking into account factors such as gas source points, compressor position, pipeline segment length and diameter, and more. Optimize for cost, pressure, or other criteria, and export your design for use in the real world.</p>
        </div>
        <div className="flex flex-col gap-7">
            <h1 className="font-bold text-2xl text-black">Key Features</h1>
            <div className="grid grid-cols-5 gap-3">
                <SubMenu src='/icons/settings.png' title='Design and Optimize' />
                <SubMenu src='/icons/pressure.png' title='Pressure constraints' />
                <SubMenu src='/icons/cost.png' title='Cost constraints' />
                <SubMenu src='/icons/map.png' title='Real-time map view' />
                <SubMenu src='/icons/clock.png' title='Real-time simulation' />
                <SubMenu src='/icons/compressor.png' title='Compressor sizing' />
                <SubMenu src='/icons/money.png' title='Pipeline sizing' />
                <SubMenu src='/icons/export.png' title='Export designs' />
                <SubMenu src='/icons/graph.png' title='Cost breakdown' />
            </div>
        </div>
        <h1 className="text-center font-extrabold text-4xl text-black">Ready to design and optimize your gas distribution network?</h1>
        <button className="bg-[#2194f2] flex justify-evenly items-center w-[171px] h-[52px] rounded-xl font-bold" onClick={() => router.push("/input-data")}>{"Get Started"}</button>
    </div>
  </Layout>
}