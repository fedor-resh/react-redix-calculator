import React from 'react';
import s from './NumberInput.css'

const NumberInput = ({number,setNumber }) => {
    function auto_grow(element) {
        if(element.target.scrollHeight>100){
            element.target.style.height = "5px";
            element.target.style.height = (element.target.scrollHeight)+"px";
        }
        else{
            element.target.style.height = '100px'
        }

    }
    return (
                    <textarea
                        onInput={(el)=>auto_grow(el)}
                        placeholder='write number'
                        value={number}
                        onChange={el =>
                            setNumber(el.target.value)}/>
    );
};

export default NumberInput;