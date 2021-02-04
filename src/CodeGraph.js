import { useRef, useState } from "react";

function CodeGraph({ data }) {
    const [mousePos, setMousePos] = useState({});
    const svgRef = useRef()
    const nodes = [];
    const edges = [];


    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            ref={svgRef}
            width="1000px"
            height="2000px"
            viewBox="0.00 0.00 1000.00 2000.00"
            onMouseMove={e => {
                const svgPos = svgRef.current.getBoundingClientRect();
                setMousePos({ x: e.clientX + svgPos.left, y: e.clientY - svgPos.top });
            }}
        >
            {nodes}
            {edges}
            <ellipse className="svgpoint" rx="5" ry="5" style={{transform:`translate(${mousePos.x}px, ${mousePos.y}px)`}}/>
            <ellipse className="svgpoint" rx="5" ry="5" style={{transform:"translate(300px, 300px)"}}/>
            <ellipse className="svgpoint" rx="5" ry="5" style={{transform:"translate(100px, 50px)"}}/>
            <text textAnchor="middle" x="50" y="50" fontFamily="Helvetica,sans-Serif" fontSize="10.00">
                {mousePos.x},{mousePos.y}
            </text>
            <text textAnchor="middle" x="50" y="150" fontFamily="Helvetica,sans-Serif" fontSize="10.00">
                {svgRef.current?.getBoundingClientRect()?.left},{svgRef.current?.getBoundingClientRect()?.top}
            </text>
        </svg>
    );
}

export default CodeGraph;