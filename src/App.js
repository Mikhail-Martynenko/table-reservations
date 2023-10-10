import {Stage, Layer, Rect} from 'react-konva';
import './App.css';

import {office, cabinet1} from './dataJSON/data'

function App() {
    return (
        <div className="App">
            <Stage width={office.scheme.width} height={office.scheme.height}>
                <Layer>
                    {/* Отображение схемы офиса */}
                    <Rect
                        width={office.scheme.width}
                        height={office.scheme.height}
                        fill="white"
                        stroke="black"
                        strokeWidth={1}
                    />

                    {/* Отображение кабинета */}
                    {office.cabinets.map(cabinet => (
                        <Rect
                            key={cabinet.id}
                            width={cabinet.scheme.width}
                            height={cabinet.scheme.height}
                            fill="white"
                            stroke="black"
                            strokeWidth={1}
                        />
                    ))}

                    {/*/!* Отображение столов *!/*/}
                    {cabinet1.places.map((table) => (
                        <Rect
                            key={table.id}
                            x={table.scheme.x}
                            y={table.scheme.y}
                            width={table.scheme.width}
                            height={table.scheme.height}
                            fill={table.status === "free" ? "green" : "red"}
                            draggable
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
}

export default App;
