import React, {useState} from 'react';
import p_p from "./calcFunctions";
import styles from './Calculator.module.css'
const Calculator = () => {
    const [number, setNumber] = useState(0)
    const [fromRadix, setFromRadix] = useState(0)
    const [toRadix, setToRadix] = useState(2)

    const result = fromRadix?p_p(number,fromRadix,toRadix):'...'
    return (
        <div className={styles.container}>
            <div>
                <p>number</p>
            <input type="text"
                   value={number}
                   onChange={el=>
                       setNumber(el.target.value)}/>
            </div>

            <div>
                <p>from</p>
                <input
                    type="number"
                    value={fromRadix}
                    onChange={el=>
                        setFromRadix(el.target.value)}/>
            </div>

            <div>
                <p>to</p>
                <input
                    type="number"
                    value={toRadix}
                    onChange={el=>
                        setToRadix(el.target.value)}/>
            </div>

            <p>{result}</p>
        </div>
    );
};

export default Calculator;