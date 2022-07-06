import { useState, useEffect } from "react";
import './Chart.css'
// components
import Bar from "./Bar";
import Control from "./Control";
import Footer from "./Footer";
// algo
import BubbleSort from "../algorithms/BubbleSort";
import InsertionSort from "../algorithms/InsertionSort";
import SelectionSort from "../algorithms/SelectionSort";
import QuickSort from '../algorithms/QuickSort';
import HeapSort from '../algorithms/HeapSort';
import RadixSort from '../algorithms/RadixSort';
import MergeSort from "../algorithms/MergeSort";

export default function Chart(props) {
    const [arr, setArr] = useState([]);
    const [min, setMin] = useState(10);
    const [max, setMax] = useState(100);
    const [quantity, setQuantity] = useState(20);
    const [speed, setSpeed] = useState(200);
    const [sortCollection, setSortCollection] = useState(props.algoCollection);
    const [sortAlgo, setSortAlgo] = useState(0);
    const [activeBar, setActiveBar] = useState(0);
    const [movement, setMovement] = useState(null);

    const delaySetArr = (arrCopy, i, active) => {
        setTimeout(() => {
            setActiveBar(active);
            setArr(arrCopy);
        }, i * speed);
    };

    const delaySetMovement = (count, i, minpoint) => {
        setTimeout(() => {
            setMovement(i);
            setActiveBar(minpoint);
        }, count * speed)
    }

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
                SelectionSort(arr, delaySetArr, delaySetMovement);
                break;
            case 3:
                QuickSort();
                break;
            case 4:
                HeapSort();
                break;
            case 5:
                RadixSort();
                break;
            case 6:
                MergeSort();
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
        setMovement(null);
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

    const handleSortAlgo = (e, i) => {
        //console.log(i)
        e.preventDefault();
        setSortAlgo(i);
    };

    useEffect(() => {
        generateArray();
    }, [quantity]);

    return (
        <div className="chartFrame">
            <h1 className="chartTitle">{sortCollection[sortAlgo]}</h1>
            <div className="chart">
                {arr.length > 0
                    ? arr.map((bar, i) => {
                        return (
                            <Bar
                                barHeight={bar}
                                key={i}
                                index={i}
                                quantity={quantity}
                                activeBar={activeBar}
                                movement={movement}
                                speed={speed}
                            />
                        );
                    })
                    : "Loading"}
            </div>
            <Control
                sortArr={sortArr}
                generateArray={generateArray}
                handleSortAlgo={handleSortAlgo}
                min={min}
                max={max}
                quantity={quantity}
                handleQuantityChange={handleQuantityChange}
                speed={speed}
                handleSpeedChange={handleSpeedChange}
                sortCollection={sortCollection}
                currentAlgo={sortAlgo}
            />
            {/* <button onClick={sortArr}> Start Sorting </button>
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
                min={20}
                max={200}
                value={speed}
                onChange={handleSpeedChange}
                style={{ transformOrigin: "50% 50%", transform: "rotate(-180deg)" }}
            /> */}
            <Footer />
        </div>
    );
}
