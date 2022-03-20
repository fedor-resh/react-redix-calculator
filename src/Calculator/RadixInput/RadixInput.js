import React, { useRef, useState} from 'react';
import s from './RadixInput.module.css';
import {ReactComponent as Arrow} from './../../arrow.svg';

const RadixInput = ({Ref,value,onChange,characters}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const list = useRef(null)
    const defaultRadix = [2,10,16]

    return (
        <>
            <div className={`${s.arrow} ${isModalOpen&&s.hover}`}
                 ref={list}
                 onMouseOver={()=>setIsModalOpen(true)}
                 onMouseLeave={()=>setIsModalOpen(false)}>
                <Arrow className={s.arrowSvg}/>
                <div className={s.list} >
                    {defaultRadix.map((text)=>
                        <div
                            key={text}
                            className={s.item}
                            onClick={()=>{
                                onChange(text)
                                setIsModalOpen(false)
                            }}>
                            <p>{text}</p>
                        </div>
                    )}
                </div>
            </div>
            <input
                className={s.input}
                ref={Ref}
                type="text"
                value={value}
                onChange={el =>
                    onChange(el.target.value)}/>
            <p className={s.characters}>{characters}</p>

        </>
    );
};

export default RadixInput;