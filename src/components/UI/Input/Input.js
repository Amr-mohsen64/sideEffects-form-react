import React, { useRef, useImperativeHandle } from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef()

    const activate = () => {
        inputRef.current.focus()
    }

    //to make function callable from oustide 
    useImperativeHandle(ref, () => {
        return {
            //outside Call : internal function
            focus: activate
        }
    })

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                autoComplete="off"
            />
        </div >

    )
})

export default Input