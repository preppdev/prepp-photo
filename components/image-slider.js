import { useRef, useState } from "react";

const ImageSlider = ({file}) => {
    const [imageRevealFraq,setImageRevealFraq] = useState(0.5);
    const imageContainer = useRef(undefined);

    const slide = (xPosition) =>{
        const containerBoundingRect =
        imageContainer.current.getBoundingClientRect();

        setImageRevealFraq(() => {
        if (xPosition < containerBoundingRect.left) {
            return 0;
        } else if (xPosition > containerBoundingRect.right) {
            return 1;
        } else {
            return (
            (xPosition - containerBoundingRect.left) / containerBoundingRect.width
            );
        }
        });
    }
    const handleTouchMove = (event = TouchEvent) => {
        slide(event.touches.item(0).clientX);
      };
    const handleMouseDown = ()=>{
        window.onmousemove = handleMouseMove;
        window.onmouseup = handleMouseUp;
    }
    const handleMouseMove = (event)=>{
        slide(event.clientX);
    }
    const handleMouseUp = ()=>{
        window.onmousemove = undefined;
        window.onmouseup = undefined;
    }

    return ( 
        <div className="relative" ref={imageContainer} >
                <img src={file.imgOne} alt="" className="object-cover pointer-events-none group-hover:opacity-75 rounded-lg" />
                <img src={file.imgTwo} alt="" className="object-cover pointer-events-none group-hover:opacity-75 absolute inset-0 rounded-lg"  
                style={{clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`}} 
                />

                <div style={{left: `${imageRevealFraq * 100}%`}} className="absolute inset-y-0">
                    <div className="relative h-full">
                        <div className="absolute inset-y-0 bg-white w-0.5 -ml-px opacity-50"></div>
                        <div
                            style={{ touchAction: "none" }}
                            onMouseDown={handleMouseDown}
                            onTouchMove={handleTouchMove}
                            className="h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center"
                            >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 tex-gray-400 rotate-90 transform cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                            />
                        </svg>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default ImageSlider;