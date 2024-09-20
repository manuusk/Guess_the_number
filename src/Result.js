import React from 'react'

const Result = ({num, secretNo}) => {
    let Result
    if (num)
    {
        if (num > secretNo) {
            Result = `The number is lower than ${num}`
        }
        else if (num < secretNo) {
            Result = `The number is greater than ${num}`
        }
        else if (num == secretNo) {
            Result = "Yayyyy!! You Guessed it RIGHT :))"
        }
        else {
            Result = "Please enter a valid number"
        }
    }
    
    return (
        <div>
            <h2>{Result}</h2>
        </div>
    )
}

export default Result