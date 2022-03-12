import React, {useState} from 'react';
import p10_p from "./calcFunctions";
import styles from './Calculator.module.css'
const Calculator = () => {
    const [ch, setCh] = useState(0)
    const [zn, setZn] = useState(0)
    const [executiveSystem, setExecutiveSystem] = useState(2)
    // function handleChange(el){
    //
    // }
    const result = zn>0&&ch&&executiveSystem>1?p10_p(ch,zn,executiveSystem):'...'
    return (
        <div className={styles.container}>
            <div>
                <p>Числитель</p>
            <input type="number" value={ch} onChange={el=>setCh(el.target.value)}/>
            </div>

            <div>
                <p>Знаменатель</p>
                <input type="number" value={zn} onChange={el=>setZn(el.target.value)}/>
            </div>

            <div>
                <p>Система исчисления</p>
                <input type="number" value={executiveSystem} onChange={el=>setExecutiveSystem(el.target.value)}/>
            </div>

            <p>{result}</p>
        </div>
    );
};

export default Calculator;