import React from "react";

function Dice (props) {

    const styles = {
        
        backgroundColor: props.isheld? "green" : "white"
    }
    return (
        <div className="">
            <div className="dice--face" style={styles} onClick={props.holdDice}>
                <h2 className="dice--num">{props.value}</h2>
                
            </div>

        </div>

    )
}

export default Dice