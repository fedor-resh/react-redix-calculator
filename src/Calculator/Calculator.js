import React, {useEffect, useState, useRef} from 'react';
import p_p from "./calcFunctions";
import s from './Calculator.module.css'
import NumberInput from './NumberInput/NumberInput'
import btn_change from './../btn-change.svg'

const Calculator = () => {
    const [number, setNumber] = useState('')
    const [fromRadix, setFromRadix] = useState(10)
    const [toRadix, setToRadix] = useState(2)
    const [result, setResult] = useState(0)
    const [error, setError] = useState('')
    const characters = '0123456789ABCDEF'
    const charactersFrom = characters.substring(0, fromRadix)
    const charactersTo = characters.substring(0, toRadix)


    const firstInput = useRef(null)
    const secondInput = useRef(null)
    useEffect(() => {
        auto_fit(firstInput.current)
        auto_fit(secondInput.current)
    })
    useEffect(() => {
        if (fromRadix > 1 && toRadix > 1 &&
            !(number.toString().includes('(') && !number.toString().includes(')'))&&
            number.toString().split('').every((el) =>
                (charactersFrom+'().').includes(el)
            )) {
            setError('')
            setResult(p_p(number, fromRadix, toRadix))
        } else {
            setError('Error')
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
        }
    }, [number, fromRadix, toRadix])


    function auto_fit(element) {
        element.style.width = "5px";
        element.style.width = (element.scrollWidth) + "px";
    }

    function replaceRadix() {
        const z = firstInput.current.style.width
        firstInput.current.style.width = secondInput.current.style.width
        secondInput.current.style.width = z
        const x = fromRadix
        setFromRadix(toRadix)
        setToRadix(x)
        const y = number
        setNumber(result)
        setResult(y)
    }

    function changeFromRadix(el) {
        if (el.target.value <= 16) {
            setFromRadix(el.target.value)
            auto_fit(el.target)
        }
    }

    function changeToRadix(el) {
        if (el.target.value <= 16) {
            setToRadix(el.target.value)
            auto_fit(el.target)
        }
    }

    function changeNumber(num) {
        if ((charactersFrom + '().').includes(num[num.length - 1]) || num < number) {
            setNumber(num)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h1>redix calculator</h1>
            </div>
            <div className={s.wrapper}>
                <div className={s.from_to__wrapper}>
                    <div className={s.from__wrapper}>
                        <input
                            ref={firstInput}
                            type="text"
                            value={fromRadix}
                            onChange={el =>
                                changeFromRadix(el)}/>
                        <p className={s.characters}>{charactersFrom}</p>
                    </div>
                    <img onClick={() => {
                        replaceRadix()
                    }} src={btn_change} alt=""/>
                    <div className={s.to__wrapper}>
                        <input
                            ref={secondInput}
                            type="text"
                            value={toRadix}
                            onChange={el =>
                                changeToRadix(el)}/>
                        <p className={s.characters}>{charactersTo}</p>
                    </div>
                </div>

                <div className={s.input__wrapper}>
                    <NumberInput
                        number={number}
                        setNumber={(num) => changeNumber(num)}
                    />
                </div>

                <div className={s.result__wrapper}>
                    <p className={error ? s.error : ''}>{error ? error : result}</p>
                </div>
            </div>
        </div>
    );
};

export default Calculator;