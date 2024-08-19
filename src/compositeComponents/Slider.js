// DEFUNCT. USE SliderBox.js instead

function Slider({ name, value, setValue, min, max }) {
    const step = ((max - min) / 1000).toFixed(2);
    return (
        <div className="flex inline-block">
            <div className="w-24">
                {name}
            </div>
            <div className="flex items-center inline-block pb-2">
                |
                <div className="w-8 text-right">
                    {value}
                </div>
                <input type="range" min={min} max={max} value={value} step={step} onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
    )
}

export default Slider;