/* eslint-disable @typescript-eslint/no-explicit-any */
export default function InputComponents({data, setData, error, name, label}: any) {
    return (
      <div className="flex flex-col gap-2 items-start w-full">
        <label className="font-semibold">{label}</label>
        <input type="number" placeholder={"Contoh: 100"} className="bg-white border-none outline-none p-4 rounded-xl w-full h-full" onChange={(e) => setData({ ...data!, [name]: Number(e.target.value) })} />
        {error && <p className="text-red-500 font-bold text-sm">{error}</p>}
      </div>
    )
}