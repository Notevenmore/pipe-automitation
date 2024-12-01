/* eslint-disable @typescript-eslint/no-explicit-any */
export default function TableComponents({data}: any) {
  return (
    <table className="bg-white w-full rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.13)] overflow-hidden text-center">
        <thead className="bg-gradient-to-r from-[#A9A9A9] to-[#FFFFFF]">
            <tr>
              {Object.keys(data[0]).map((key: string, index: number) => (
                <th key={index} className="p-6">
                  {key.split("_").map((letter: string) => letter.charAt(0).toUpperCase() + letter.slice(1)).join(" ")}
                </th>
              ))}
            </tr>
        </thead>
        <tbody className="bg-white">
        {
          data.map((value: any, index: number) => (
            <tr key={index}>
              {Object.values(value).map((v: any, idx: number) => (
                <td key={idx} className="p-6 text-[#4F7396]">
                  {typeof v === "number"
                    ? new Intl.NumberFormat("id-ID").format(v)
                    : typeof v === "string"
                    ? v
                        .split("_")
                        .map((letter: string) => letter.charAt(0).toUpperCase() + letter.slice(1))
                        .join(" ")
                    : v}
                </td>
              ))}
            </tr>
          ))
        }

        </tbody>
    </table>
  )
}