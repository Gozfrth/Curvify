import { useEffect, useRef } from "react";

//  CompositeWave -> SineWaveContainer -> SineWaveCanvas

// 1 SECOND WIDTH
// val = A * sin(2 * PI * f * t + p) ---- + or - p ??
function SineWaveCanvas({ ...props }) {
    const PI = Math.PI;

    const [color, amplitude, phase, frequency] = [props.color, props.amplitude, props.phase, props.frequency];
    const [id, setSineElementsData] = [props.id, props.setSineElementsData];
    const numSamples=props.samples;
    const sampleRate = 1 / numSamples;

    const width = 800, height = 120;
    // console.log(props.amplitude, props.phase, props.frequency);
    const canvasref = useRef(null);

    let pointsArr = [];

    useEffect(() => {
        pointsArr = [];

        for (let t = 0; t < numSamples; t++) {
            pointsArr.push(amplitude * Math.sin(2 * PI * frequency * t * sampleRate - phase));
        }
        setSineElementsData(prevData => {
            const updatedData = [...prevData];
            updatedData[id-1] = [...pointsArr];
            return updatedData;
        }); //id-1 is index

        const canvas = canvasref.current;
        const context = canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);


        // context.arc((250*width*sampleRate), (height*0.5 + 0.7*height*0.5), 100, 0, 2 * PI);

        // context.fillStyle = 'red';
        // context.fill();

        for (let i = 0; i < pointsArr.length; i++) {
            context.beginPath();
            context.arc((i * width * sampleRate), (height * 0.5 + pointsArr[i] * height * 0.33), 1, 0, 2 * PI);

            context.fillStyle = color;
            context.fill();
        }
    }, [amplitude, phase, frequency, color]);
    return (
        <div>
            <canvas className="rounded-r-[16px]" ref={canvasref} width={width} height={height} />
        </div>
    )
}

export default SineWaveCanvas;