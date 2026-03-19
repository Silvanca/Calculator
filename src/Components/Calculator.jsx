/*
Calculator
16.08.2025
Author Silvan
 */


import { useState } from "react";
import "./Calculator.css";


export default function Calculator() {
    const [input, setInput] = useState("");

    function handelClick(value) {
        setInput(input + value);
    }

    function calculate() {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    }

    function clearInput() {
        setInput("");
    }

    return (
        <div className="calculator">
            <div className="display">{input || "0"}</div>
            <div className="buttons">
                <button className="number" onClick={() => handelClick("7")}>7</button>
                <button className="number" onClick={() => handelClick("8")}>8</button>
                <button className="number" onClick={() => handelClick("9")}>9</button>
                <button className="operator" onClick={() => handelClick("/")}>÷</button>

                <button className="number" onClick={() => handelClick("4")}>4</button>
                <button className="number" onClick={() => handelClick("5")}>5</button>
                <button className="number" onClick={() => handelClick("6")}>6</button>
                <button className="operator" onClick={() => handelClick("*")}>×</button>

                <button className="number" onClick={() => handelClick("1")}>1</button>
                <button className="number" onClick={() => handelClick("2")}>2</button>
                <button className="number" onClick={() => handelClick("3")}>3</button>
                <button className="operator" onClick={() => handelClick("-")}>-</button>

                <button className="number" onClick={() => handelClick("0")}>0</button>
                <button className="clear" onClick={clearInput}>C</button>
                <button className="equals" onClick={calculate}>=</button>
                <button className="operator" onClick={() => handelClick("+")}>+</button>
            </div>
        </div>
    );
}