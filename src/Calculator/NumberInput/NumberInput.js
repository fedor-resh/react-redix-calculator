import React, {useEffect, useRef} from 'react';
import s from './NumberInput.css'

const NumberInput = ({number, setNumber}) => {
    const area = useRef(null)
    useEffect(() => {
        auto_grow(area.current)
    })

    function auto_grow(element) {
        if (element.scrollHeight > 100) {
            element.style.height = "5px";
            element.style.height = (element.scrollHeight + 20) + "px";
        } else {
            element.style.height = '100px'
        }

    }

    return (
        <textarea
            ref={area}
            onInput={(el) => auto_grow(el.target)}
            placeholder='write number'
            value={number}
            onChange={el =>
                setNumber(el.target.value)}/>
    );
};

export default NumberInput;