import React, {useEffect, useState, useRef} from 'react';
import p_p from "./calcFunctions";
import s from './Calculator.module.css'
import NumberInput from './NumberInput/NumberInput'
import {ReactComponent as BtnChange} from './../btn-change.svg'
import RadixInput from './RadixInput/RadixInput';
import Instruction from './Instruction/Instruction';
import countCharacter from './extra functions';

const Calculator = () => {
    const [number, setNumber] = useState('')
    const [fromRadix, setFromRadix] = useState(16)
    const [toRadix, setToRadix] = useState(2)
    const [result, setResult] = useState('0')
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
        if (fromRadix < 1 && toRadix < 1) {
            setError('not allowed radix')
        }else if(number.includes(')')&&number.indexOf(')')!==number.length-1) {
            setError('characters after brackets')
        }else if(!number.includes('.')
            &&(number.includes('(')||number.includes(')'))){
            setError('brackets must be after point')
        } else if ((number.toString().includes('(') &&
            !number.toString().includes(')'))
            ||(!number.toString().includes('(') &&
            number.toString().includes(')'))) {
            setError('brackets is not closed')
        } else if (!number.toString().split('').every((el) =>
            (charactersFrom + '().').includes(el))) {
            setError('not allowed characters')
        } else if (countCharacter('(', number) > 1
            || countCharacter(')', number) > 1) {
            setError('several identical brackets')
        } else if ((countCharacter('.',number)) > 1) {
            setError('several points')
        }else if (number.includes('(')
            &&number.includes(')')
            &&number.indexOf('(') >= number.indexOf(')') - 1) {
            setError('nothing in brackets')
        } else {
            setError('')
            setResult(p_p(number, fromRadix, toRadix))
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
        setNumber(result.toString())
        setResult(y)
    }

    function changeFromRadix(num) {
        if (num <= 16) {
            setFromRadix(num)
            auto_fit(firstInput.current)
        }
    }

    function changeToRadix(num) {
        if (num <= 16) {
            setToRadix(num)
            auto_fit(secondInput.current)
        }
    }

    function changeNumber(num) {
        if ((charactersFrom + '().').includes(num.charAt(num.length-1)) || num < number) {
            setNumber(num)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h1>radix calculator</h1>

            </div>
            <div className={s.wrapper}>
                <div className={s.from_to__wrapper}>
                    <div className={s.from__wrapper}>
                        <RadixInput
                            characters={charactersFrom}
                            Ref={firstInput}
                            value={fromRadix}
                            onChange={str => changeFromRadix(str)}
                        />

                    </div>
                    <BtnChange className={s.img}
                                onClick={() => {
                                    replaceRadix()
                                }}/>
                    <div className={s.to__wrapper}>
                        <RadixInput
                            characters={charactersTo}
                            Ref={secondInput}
                            value={toRadix}
                            onChange={str => changeToRadix(str)}
                        />
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
                <Instruction/>
            </div>
        </div>
    );
};

export default Calculator;