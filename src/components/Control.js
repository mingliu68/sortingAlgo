import "./Control.css";

const Control = ({ sortArr, generateArray, handleSortAlgo, min, max, quantity, handleQuantityChange, speed, handleSpeedChange, sortCollection, currentAlgo, sorting, tutorial, handleTutorialToggle }) => {
    const sortingStyle =
        sorting === true ?
            { pointerEvents: "none", position: "relative" }
            :
            null

    const tutorialStyle =
        tutorial === true ?
            { backgroundColor: "black", color: "white" }
            :
            null

    return (
        <div className="control" style={sortingStyle}>
            {
                sorting === true ?
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "black",
                            opacity: "60%",
                            zIndex: 10,
                            top: 0,
                            left: 0,
                            position: "absolute",
                            transition: "2s",
                        }}
                    >
                    </div>
                    :
                    null
            }
            <div className="buttonWrapper">
                <div className="button nonAlgoButton" onClick={generateArray}><h4>Generate Array</h4></div>
                <div className="button slider nonAlgoButton">
                    <label htmlFor="quantitySlider">Bars</label>
                    <input
                        id="quantitySlider"
                        name="quantitySlider"
                        type="range"
                        min={min}
                        max={max}
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </div>
                <div className="button slider nonAlgoButton">
                    <label htmlFor="speedSlider">Sorting Speed</label>
                    <input
                        id="speedSlider"
                        name="speedSlider"
                        type="range"
                        min={20}
                        max={200}
                        value={speed}
                        onChange={handleSpeedChange}
                        style={{ transformOrigin: "50% 50%", transform: "rotate(-180deg)" }}
                    />
                </div>
                <div className="button nonAlgoButton" style={tutorialStyle} onClick={handleTutorialToggle}><h4>Tutorial Mode</h4></div>
                <div className="button sortingButton" onClick={sortArr}><h4>Start Sorting</h4></div>

            </div>
            <div className="buttonWrapper">
                {
                    sortCollection.map((algo, i) => {
                        return currentAlgo === i ?
                            <div className="button activeAlgo" key={i} onClick={(e) => handleSortAlgo(e, i)}><h4>{algo}</h4></div>
                            :
                            <div className="button inactiveAlgo" key={i} onClick={(e) => handleSortAlgo(e, i)}><h4>{algo}</h4></div>
                    })
                }
            </div>
        </div>
    )
}

export default Control;
