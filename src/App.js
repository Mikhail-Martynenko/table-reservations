import {Stage, Layer, Rect, Text} from 'react-konva';
import './App.css';

const place1 = {
    name: "",
    status: "free",//или reserved
    scheme: [[100, 100], [200, 100], [200, 200], [100, 200]]
}

const cabinet1 = {
    name: "",
    type: "cabinet",//переговорка
    status: "free",//или reserved
    scheme: [[0, 0], [1000, 0], [1000, 1000], [0, 1000]],
    places: [place1]
}


const office = {
    name: "",
    scheme: [[0, 0], [2000, 0], [2000, 1000], [0, 1000]],
    cabinets: [cabinet1]
}


const schemeData = {
    width: 800,
    height: 600,
    tables: [
        {id: 1, x: 100, y: 100, width: 80, height: 80, status: "free"},
        {id: 2, x: 250, y: 150, width: 80, height: 80, status: "reserved"},
        // Другие столы
    ],
};

function App() {
    return (
        <div className="App">

        </div>
    );
}

export default App;
