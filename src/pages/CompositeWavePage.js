import AllWave from "../compositeComponents/AllWave";

//CompositeWave -> SineWaveContainer -> SineWaveCanvas

function CompositeWavePage(){
    return <AllWave numWaves={2} samples={2000} />;
}

export default CompositeWavePage;