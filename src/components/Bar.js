//import { setState } from "react";
import './Bar.css';

const Bar = (props) => {
    const [barHeight, key, index, quantity, activeBar, movement, speed] = [
        props.barHeight,
        props.key,
        props.index,
        props.quantity,
        props.activeBar,
        props.movement,
        props.speed
    ]
    const height = barHeight * 3 + "px";
    const bg =
        activeBar === index ?
            "green"
            :
            movement === index ?
                "pink"
                :
                index % 2 === 0 ?
                    "grey"
                    :
                    "orange";
    const width = (document.body.clientWidth - 20) / quantity + "px"; /* width of <body> */
    const marginTop = 300 - barHeight * 3;
    //const transition = speed < 100 ? 'none' : "100ms";

    return (
        <div
            className="bar"
            key={key}
            style={{
                marginTop: marginTop,
                width: `calc((100vw - 20px) / ${quantity})`,
                height: height,
                backgroundColor: bg,
                // transition: transition
            }}
        />
    );
};

export default Bar;
