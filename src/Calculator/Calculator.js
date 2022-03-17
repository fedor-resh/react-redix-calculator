import React, {useEffect, useState} from 'react';
import p_p from "./calcFunctions";
import s from './Calculator.module.css'


const Calculator = () => {
    const [number, setNumber] = useState(1)
    const [fromRadix, setFromRadix] = useState(10)
    const [toRadix, setToRadix] = useState(2)
    const [result, setResult] = useState(0)
    const characters = '0123'
    useEffect(() => {
        if (!(number.toString().includes('(') && !number.toString().includes(')'))) {
            setResult(p_p(number, fromRadix, toRadix))
        }
    },[number,fromRadix,toRadix])
    function changeRadix(num){

    }

    function changeNumber(){

    }
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.from_to__wrapper}>
                    <div className={s.from__wrapper}>
                        <input
                            type="text"
                            value={fromRadix}
                            onChange={el =>
                                setFromRadix(el.target.value)}/>
                        <p className={s.characters}>{characters}</p>
                    </div>
                    <div className={s.to__wrapper}>
                        <input
                            type="text"
                            value={toRadix}
                            onChange={el =>
                                setToRadix(el.target.value)}/>
                        <p className={s.characters}>{characters}</p>
                    </div>
                </div>
                <div className={s.input__wrapper}>
                    <textarea
                           value={number}
                           onChange={el =>
                               setNumber(el.target.value)}/>
                </div>
                <div className={s.result__wrapper}>
                    <p>{result}</p>
                </div>
            </div>
        </div>
    );
};

export default Calculator;