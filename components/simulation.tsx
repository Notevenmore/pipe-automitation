/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Simulation ({start, end, initCompressorBranch, initPipeBranch, isUp, result, compressor, setHoverSelectedIndex, hoverSelectedIndex, hoverSelectedLengthIndex, setHoverSelectedLengthIndex}: any) {
  return <div>
    {
      compressor.slice(start, end).map((value: any, i: number) => {
          return (
            <div 
                key={i} 
                className="relative"
            >
              {
                hoverSelectedIndex[i + start] && 
                <div className="absolute -top-[250px] -left-36 border-black border-2 p-4 rounded-xl w-[500px]">
                  <p>Compressor:  {value}</p>
                </div>
              }
              {
                hoverSelectedLengthIndex[isUp ? i + start + 1 : i + start] && <div className="absolute -top-[250px] -left-36 border-black border-2 p-4 rounded-xl w-[500px]">
                <p>Length: {result[isUp ? i + start + 1 : i + start].l} miles</p>
                <p>Pd:  {result[isUp ? i + start + 1 : i + start].pd} PSI</p>
                <p>Ps:  {result[isUp ? i + start + 1 : i + start].ps} PSI</p>
                <p>d: {result[isUp ? i + start + 1 : i + start].d} cm</p>
                <p>Flow Rate: {result[isUp ? i + start + 1 : i + start].Q} MMCFD</p>
              </div>
              }
                <div 
                  onMouseEnter={() => {
                    const selectedIndex = [...hoverSelectedIndex];
                    selectedIndex[i + start] = true;
                    setHoverSelectedIndex(selectedIndex);
                  }}
                  onMouseLeave={() => {
                    const selectedIndex = [...hoverSelectedIndex];
                    selectedIndex[i + start] = false;
                    setHoverSelectedIndex(selectedIndex);
                  }}
                  className={`flex items-center justify-center border-black border-2 rounded-full absolute ${isUp && "-top-[45px]"}`} 
                  style={{width: "50px", height: "50px", left: `${i === 0 ? initCompressorBranch : initCompressorBranch + result.slice(isUp ? start + 1 : start, isUp ? i + start + 1 : i + start).map((val: any) => val.l).reduce((acc: any, val: any) => { acc += val; return acc }, 0) + i * 50}px` }}
                >{i + start + 1}</div>
                {(i !== (end - start - 1) || end !== 4) && <div 
                    onMouseEnter={() => { 
                        const selectedIndex = [...hoverSelectedLengthIndex];
                        selectedIndex[isUp ? i + start + 1 : i + start] = true;
                        setHoverSelectedLengthIndex(selectedIndex);
                    }}
                    onMouseLeave={() => {
                        const selectedIndex = [...hoverSelectedLengthIndex];
                        selectedIndex[isUp ? i + start + 1 : i + start] = false;
                        setHoverSelectedLengthIndex(selectedIndex);
                    }}
                    className={`h-[1px] flex items-center justify-center border-black border-[1px] absolute ${isUp ? "-top-[20px]" : "top-[25px]"}`} 
                    style={{width: `${result[isUp ? i + start + 1 : i + start].l}px`, left: `${i === 0 ? initPipeBranch : initPipeBranch + result.slice(isUp ? start + 1 : start, isUp ? i + start + 1 : i + start).map((val: any) => val.l).reduce((acc: any, val: any) => { acc += val; return acc }, 0) + i * 50}px`}}
                ></div>}
            </div>
          )
    })}
  </div>
  }
