import { useEffect, useRef } from "react";

function CompositeWaveCanvas({ color, sineElementsData, samples }){

    const numSamples = samples;
    const sampleRate = 1 / numSamples;
    const PI = Math.PI;

    const canvasref = useRef(null);
    const height = 240;
    const scaleHeight = 120;
    const width = 800;
    
    let pointsArr = [];
    let count=0;
    useEffect(() => {
        count++;
        pointsArr = [];
        let temp = 0;

        for (let t = 0; t < numSamples; t++) {
            temp = 0;
            for (let i = 0; i < sineElementsData.length; i++) {
                if(sineElementsData[i][t])temp += sineElementsData[i][t];
            }
            pointsArr.push(temp);
        }

        const canvas = canvasref.current;
        const context = canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);


        // context.arc((250*width*sampleRate), (height*0.5 + 0.7*height*0.5), 100, 0, 2 * PI);

        // context.fillStyle = 'red';
        // context.fill();

        for (let i = 0; i < numSamples; i++) {
            context.beginPath();
            context.arc((i * width * sampleRate), (height * 0.5 + pointsArr[i] * scaleHeight * 0.33), 1, 0, 2 * PI);

            context.fillStyle = color;
            context.fill();
        }
    }, [sineElementsData]);
    
    return <div>
        <canvas className="rounded-r-[16px]" ref={canvasref} width={width} height={height} />
    </div>
}

export default CompositeWaveCanvas;