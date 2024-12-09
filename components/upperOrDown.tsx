/* eslint-disable @typescript-eslint/no-explicit-any */
import Simulation from "./simulation"

export default function UpperOrDown({result, compressor, hoverSelectedIndex, setHoverSelectedIndex, start, end, initCompressorBranch, initPipeBranch, isUp, hoverSelectedLengthIndex, setHoverSelectedLengthIndex}: any) {
    return <div className={`absolute -top-[33px] ${isUp ? "-top-[30px]" : "top-[30px]"}`}>
        {
            isUp && hoverSelectedLengthIndex[7] && <div className="absolute -top-[250px] -left-36 border-black border-2 p-4 rounded-xl w-[500px]">
              <p>Length: {result[7].l} miles</p>
              <p>Pd:  {result[7].pd} PSI </p>
              <p>Ps:  {result[7].ps} PSI</p>
              <p>d: {result[7].d} cm</p>
              <p>Flow Rate: {result[7].Q} MMCFD </p>
            </div>
          }
        <div 
            onMouseEnter={() => {
              const selectedIndex = [...hoverSelectedLengthIndex];
              if(isUp) selectedIndex[7] = true;
              else selectedIndex[3] = true;
              setHoverSelectedLengthIndex(selectedIndex);
            }}
            onMouseLeave={() => {
              const selectedIndex = [...hoverSelectedIndex];
              if(isUp) selectedIndex[7] = false;
              else selectedIndex[3] = false;
              setHoverSelectedLengthIndex(selectedIndex);
            }}
            className={`h-[1px] flex items-center justify-center border-black border-[1px] absolute ${isUp ? "-rotate-[30deg]" : "rotate-[30deg]"} -left-[13px]`} 
            style={{width: `${isUp ? result[7].l : result[3].l}px`,}}
        ></div>
        <Simulation 
            start={start} 
            end={end} 
            initCompressorBranch={initCompressorBranch} 
            initPipeBranch={initPipeBranch} 
            isUp={isUp} 
            result={result} 
            compressor={compressor} 
            hoverSelectedIndex={hoverSelectedIndex} 
            setHoverSelectedIndex={setHoverSelectedIndex} 
            hoverSelectedLengthIndex={hoverSelectedLengthIndex} 
            setHoverSelectedLengthIndex={setHoverSelectedLengthIndex} 
        />
    </div>
  }
