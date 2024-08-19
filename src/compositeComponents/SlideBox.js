// TODO:
// CustomEventComponent?

import { useEffect, useRef } from "react";

function SlideBox({ name, value, setValue, min, max }) {
    let isDragging = false;
    let xstart = 0.0, xend = 0.0;

    const step = parseFloat(((max - min) / 1000).toFixed(3));
    const boxRef = useRef(null);
    let temp = 0;
    useEffect(() => {
        const handleMouseDown = (e) => {
            xstart = e.clientX;
            temp = value
            isDragging = true;
            console.log("DOWN")
            document.body.addEventListener('mousemove', handleMouseMove); 
            document.body.addEventListener('mouseup', handleMouseUp);        
            e.preventDefault();
        }
        const handleMouseMove = (e) => {
            if(isDragging){
                xend = e.clientX;
                setValue((prev) => {
                    let val = prev + (xend - xstart) * step;
                    if(val < min){
                        return min;
                    }else if(val > max){
                        return max;
                    }
                    return val;
                });
                xstart = e.clientX;
            }
            e.preventDefault();
        }
        const handleMouseUp = (e) => {
            temp = value
            isDragging = false;
            console.log("UP")
            console.log(value)
            document.body.style.cursor = 'auto';
            document.body.removeEventListener('mouseup', handleMouseUp);
            document.body.removeEventListener('mousemove', handleMouseMove); 
        }
        const box = boxRef.current;
        if (box) {
            box.addEventListener('mousedown', handleMouseDown);
        }

        return () => {
            if (box) {
                box.removeEventListener('mousedown', handleMouseDown);
            }

        }

    }, []);

    return (
        <div className="flex inline-block px-4 border-2 rounded-md" ref={boxRef}>
            <div className="w-24">
                {name}
            </div>
            <div className="flex text-right pb-2">
                |
                <div className="inline-block">
                    {value.toFixed(3)}
                </div>
            </div>
        </div>
    )
}

export default SlideBox;