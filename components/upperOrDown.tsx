/* eslint-disable @typescript-eslint/no-explicit-any */
import Simulation from "./simulation"

export default function UpperOrDown({result, compressor, hoverSelectedIndex, setHoverSelectedIndex, start, end, initCompressorBranch, initPipeBranch, isUp, hoverSelectedLengthIndex, setHoverSelectedLengthIndex}: any) {
    return <div className={`absolute -top-[33px] ${isUp ? "-top-[30px]" : "top-[30px]"}`}>
        <div 
            onMouseEnter={() => {
              const selectedIndex = [...hoverSelectedLengthIndex];
              selectedIndex[2] = true;
              setHoverSelectedLengthIndex(selectedIndex);
            }}
            onMouseLeave={() => {
              const selectedIndex = [...hoverSelectedIndex];
              selectedIndex[2] = false;
              setHoverSelectedLengthIndex(selectedIndex);
            }}
            className={`h-[1px] flex items-center justify-center border-black border-[1px] absolute ${isUp ? "-rotate-[30deg]" : "rotate-[30deg]"} -left-[13px]`} 
            style={{width: `${result[2].l}px`,}}
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