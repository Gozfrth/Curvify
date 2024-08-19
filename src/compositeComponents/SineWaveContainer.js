import { useState } from "react";
import SineWaveCanvas from "./SineWaveCanvas.js";
import WaveControls from "./WaveControls.js";

//CompositeWave -> SineWaveContainer -> SineWaveCanvas

function SineWaveContainer({ id, color, setSineElementsData, samples }) {
    const [amplitude, setAmplitude] = useState(1);
    const [phase, setPhase] = useState(0);
    const [frequency, setFrequency] = useState(10);
    return (
        <div className={`h-120px p-4 bg-gray-600 rounded-[12px] mb-2 mt-2`}>
            <span className="text-xl font-bold text-white">Sine Wave {id}</span>
            <div className="flex items-center">
                <WaveControls amplitude={amplitude} setAmplitude={setAmplitude} phase={phase} setPhase={setPhase} frequency={frequency} setFrequency={setFrequency} />
                <SineWaveCanvas color={color} amplitude={amplitude} phase={phase} frequency={frequency} id={id} setSineElementsData={setSineElementsData} samples={samples} />
            </div>
        </div>
    )
}

export default SineWaveContainer;