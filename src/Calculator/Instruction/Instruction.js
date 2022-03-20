import React from 'react';
import {ReactComponent as Quest} from './../../question-circle-svgrepo-com.svg';
import s from './Instruction.module.css'

const Instruction = () => {
    return (
        <div className={s.wrapper}>
            <Quest className={s.questSvg}/>
            <div className={s.modal}>
                <p>Welcome to the most accurate radix calculator.</p>
                <p>Here you can translate decimal fractional numbers with a period like:</p>
                <p><strong>F.3E(23C), 96.(43), 15.5 or FF</strong>,</p>
                <p>from and to every executive system with radix equals from <strong>2</strong> to <strong>16</strong> </p>
                <p><strong>When the input data is longer than 53 characters, may appear inaccuracy</strong></p>
            </div>
        </div>
    );
};

export default Instruction;