import React from "react";

function Result({ secretNumber, term }) {
    let result
    if (term) {
        if (term > secretNumber) {
            result = 'higher'
        }
        else if (term < secretNumber) {
            result = "Lower"
        }
        else if (term == secretNumber) {
            result = 'Correct'
        }
        else {
            result = "Enter the value"
        }
    }
    return (
        <>
            <h5>You Guessed : {result}</h5>
        </>
    )
}
export default Result