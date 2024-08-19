import SlideBox from "./SlideBox";
import Slider from "./Slider";

function CompositeWaveControls({ ...props }) {
    const [scale, setScale] = [props.scale, props.setScale];

    return (

        <div className="h-[240px] flex items-center bg-gray-800 text-white font-bold rounded-l-[16px] p-2 mr-2">
            <div>
                <SlideBox name={"Scale"} value={scale} setValue={setScale} min={0} max={2} />
            </div>
        </div>
    )
}

export default CompositeWaveControls;