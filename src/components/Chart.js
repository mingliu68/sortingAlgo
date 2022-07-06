import { useState, useEffect } from "react";
// components
import Bar from "./Bar";
// algo
import BubbleSort from "../algorithms/BubbleSort";
import InsertionSort from "../algorithms/InsertionSort";
import SelectionSort from "../algorithms/SelectionSort";

export default function Chart(props) {
    const [arr, setArr] = useState([]);
    const [min, setMin] = useState(10);
    const [max, setMax] = useState(100);
    const [quantity, setQuantity] = useState(20);
    const [speed, setSpeed] = useState(200);
    const [sortCollection, setSortCollection] = useState(props.algoCollection);
    const [sortAlgo, setSortAlgo] = useState(0);
    const [activeBar, setActiveBar] = useState(0);

    const delaySetArr = (arrCopy, i, active) => {
        setTimeout(() => {
            setActiveBar(active);
            setArr(arrCopy);
        }, i * speed);
    };

    const sortArr = () => {
        clearTimeout();
        switch (sortAlgo) {
            case 0:
                BubbleSort(arr, delaySetArr);
                break;
            case 1:
                InsertionSort(arr, delaySetArr);
                break;
            case 2:
                SelectionSort(arr, delaySetArr);
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            default:
                BubbleSort(arr, delaySetArr);
        }
    };

    const generateRandom = () => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const generateArray = () => {
        setActiveBar(0);
        let array = [];
        while (array.length <= quantity) {
            array.push(generateRandom(min, max));
        }
        setArr(array);
    };

    const handleSpeedChange = (e) => {
        e.preventDefault();
        setSpeed(e.target.value);
    };
    const handleQuantityChange = (e) => {
        e.preventDefault();
        setQuantity(e.target.value);
    };

    const handleSortAlgo = (e) => {
        e.preventDefault();
        setSortAlgo(parseInt(e.target.value));
    };

    useEffect(() => {
        generateArray();
    }, [quantity, sortAlgo]);

    return (
        <div style={{ width: "100%" }}>
            <div
                style={{
                    width: "100%",
                    height: "300px",
                    display: "flex",
                    alingItems: "flex-end"
                }}
            >
                {arr.length > 0
                    ? arr.map((bar, i) => {
                        return (
                            <Bar
                                barHeight={bar}
                                key={i}
                                index={i}
                                quantity={quantity}
                                activeBar={activeBar}
                            />
                        );
                    })
                    : "Loading"}
            </div>
            <h4>{sortCollection[sortAlgo]}</h4>
            <button onClick={sortArr}> Start Sorting </button>
            <button onClick={generateArray}>Generate New Array</button>
            <select onChange={handleSortAlgo}>
                <option key="0" value="0">Bubble Sort</option>
                <option key="1" value="1">Insertion Sort</option>
                <option key="2" value="2">Selection Sort</option>
            </select>

            <label htmlFor="quantitySlider">Change Quantity</label>
            <input
                id="quantitySlider"
                name="quantitySlider"
                type="range"
                min={min}
                max={max}
                value={quantity}
                onChange={handleQuantityChange}
            />
            <label htmlFor="speedSlider">Change Speed</label>
            <input
                id="speedSlider"
                name="speedSlider"
                type="range"
                min={10}
                max={200}
                value={speed}
                onChange={handleSpeedChange}
                style={{ transformOrigin: "50% 50%", transform: "rotate(-180deg)" }}
            />
        </div>
    );
}
