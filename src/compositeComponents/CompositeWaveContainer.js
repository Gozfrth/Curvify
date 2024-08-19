import { useState } from "react";
import CompositeWaveCanvas from "./CompositeWaveCanvas.js";
import CompositeWaveControls from "./CompositeWaveControls.js";

//CompositeWave -> SineWaveContainer -> SineWaveCanvas

function CompositeWaveContainer({ id, color, sineElementsData, samples }) {
    const [scale, setScale] = useState(1.0);
    return (
        <div className={`h-240px p-4 bg-gray-600 rounded-[12px] mb-8 mt-2 `}>
            <span className="text-xl font-bold text-white">Composite Wave</span>
            <div className="flex items-center">
                <CompositeWaveControls scale={ scale } setScale={ setScale } />
                <CompositeWaveCanvas color={color} sineElementsData={sineElementsData} samples={samples}/>
                {/* <WaveControls amplitude={amplitude} setAmplitude={setAmplitude} phase={phase} setPhase={setPhase} frequency={frequency} setFrequency={setFrequency} />
                <SineWaveCanvas color={color} amplitude={amplitude} phase={phase} frequency={frequency} /> */}
            </div>
        </div>
    )
}

export default CompositeWaveContainer;