import React, {useEffect, useRef} from 'react';
import './NumberInput.css'

const NumberInput = ({number, setNumber}) => {
    const area = useRef(null)
    useEffect(() => {
        auto_grow(area.current)
    })

    function auto_grow(element) {
        if (window.innerWidth>900&&element.scrollHeight<200) {
            element.style.height = "200px"
        } else {
            element.style.height = "5px";
            element.style.height = (element.scrollHeight + 5) + "px";
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