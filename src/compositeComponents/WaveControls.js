import SlideBox from "./SlideBox";
import Slider from "./Slider";

function WaveControls({ ...props }) {
    const [amplitude, setAmplitude, phase, setPhase, frequency, setFrequency] = [props.amplitude, props.setAmplitude, props.phase, props.setPhase, props.frequency, props.setFrequency];

    return (
        <div className="h-[120px] flex items-center bg-gray-800 text-white font-bold rounded-l-[16px] p-2 mr-2">
            <div>
                <SlideBox name={"Amplitude"} value={amplitude} setValue={setAmplitude} min={0} max={2} />
                <SlideBox name={"Phase"} value={phase} setValue={setPhase} min={0} max={2 * Math.PI} />
                <SlideBox name={"Frequency"} value={frequency} setValue={setFrequency} min={0} max={30} />
            </div>
        </div>
    )
}

export default WaveControls;