import SineWaveContainer from "./SineWaveContainer.js";
import CompositeWaveContainer from "./CompositeWaveContainer.js";
import { useState } from "react";

//CompositeWave -> SineWaveContainer -> SineWaveCanvas

function AllWave({ numWaves = 2, samples=2000 }) {
    const colors = ['#49ABFF', '#53F252', '#FF5353'];

    const [sineElementsData, setSineElementsData] = useState(new Array(numWaves).fill(new Array(samples).fill(0)));

    const compositeElement = <CompositeWaveContainer key={0} id={0} color={'white'} sineElementsData={sineElementsData} samples={samples} />
    const sineElements = Array.from({ length: numWaves }, (_, i) => (
        <SineWaveContainer key={i + 1} id={i + 1} color={colors[i%colors.length]} setSineElementsData={setSineElementsData} samples={samples}/>
    ));

    return (
        <div>
            {compositeElement}
            {sineElements}
        </div>
    );
}


export default AllWave;