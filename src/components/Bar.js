//import { setState } from "react";

const Bar = (props) => {
    const [barHeight, key, index, quantity, activeBar] = [
        props.barHeight,
        props.key,
        props.index,
        props.quantity,
        props.activeBar
    ];
    const height = barHeight * 3 + "px";
    const bg =
        activeBar === index ? "green" : index % 2 === 0 ? "grey" : "orange";
    const width =
        (document.body.clientWidth - 20) / quantity + "px"; /* width of <body> */
    const marginTop = 300 - barHeight * 3;

    return (
        <div
            key={key}
            style={{
                marginRight: "1px",
                marginTop: marginTop,
                width: width,
                minWidth: "5px",
                height: height,
                backgroundColor: bg
            }}
        ></div>
    );
};

export default Bar;
