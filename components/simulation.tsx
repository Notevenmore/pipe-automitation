/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Simulation ({start, end, initCompressorBranch, initPipeBranch, isUp, result, compressor, setHoverSelectedIndex, hoverSelectedIndex, hoverSelectedLengthIndex, setHoverSelectedLengthIndex}: any) {
    return result.slice(start, end).map((value: any, i: number) => {
      return (
        <div 
            key={i} 
            className="relative"
        >
          {
            hoverSelectedIndex[i + start] && 
            <div className="absolute -top-[250px] -left-36 border-black border-2 p-4 rounded-xl w-[500px]">
              <p>Compressor:  {compressor[i + start]}</p>
              <p>Pd:  {value.pd} MMCFD</p>
              <p>Ps:  {value.ps} PSI</p>
              <p>d: {value.d} cm</p>
              <p>Flow Rate: {value.Q}</p>
            </div>
          }
          {
            hoverSelectedLengthIndex[i + start] && <div className="absolute -top-[250px] -left-36 border-black border-2 p-4 rounded-xl w-[500px]">
            <p>Length: {value.l} miles</p>
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
              style={{width: "50px", height: "50px", left: `${i === 0 ? initCompressorBranch : initCompressorBranch + result.slice(start, i + start).map((val: any) => val.l).reduce((acc: any, val: any) => { acc += val; return acc }, 0) + i * 50}px` }}
            >{i+start + 1}</div>
            {i !== (end - start - 1) && <div 
                onMouseEnter={() => {
                    const selectedIndex = [...hoverSelectedLengthIndex];
                    selectedIndex[i + start] = true;
                    setHoverSelectedLengthIndex(selectedIndex);
                }}
                onMouseLeave={() => {
                    const selectedIndex = [...hoverSelectedLengthIndex];
                    selectedIndex[i + start] = false;
                    setHoverSelectedLengthIndex(selectedIndex);
                }}
                className={`h-[1px] flex items-center justify-center border-black border-[1px] absolute ${isUp ? "-top-[20px]" : "top-[25px]"}`} 
                style={{width: `${value.l}px`, left: `${i === 0 ? initPipeBranch : initPipeBranch + result.slice(start, i + start).map((val: any) => val.l).reduce((acc: any, val: any) => { acc += val; return acc }, 0) + i * 50}px`}}
            ></div>}
        </div>
      )
    })
  }