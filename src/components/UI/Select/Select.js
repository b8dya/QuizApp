import React from 'react'
import classes from './Select.module.css'


const Select = props => {
    const htmlFor = `${props.label}-${Math.random()}`
    return (
        <div className={classes.Select}>
            <label
                // style={{color:'#2b8cc4', margin: ' 0 0 3px 0', padding: 0, fontWeight: 'bold', display: 'block' }}
                htmlFor={htmlFor}>{props.label}</label>
            <select
                // style={{
                //     display: 'block',
                //     boxSizing: 'border-box',
                //     border: '1px solid azure',
                //     margin: '0 0 5px',
                //     height: '29px',
                //     width: '100%',
                //     outline: '100%',
                //     transition: 'all 300ms ease-in-out',
                //     color:'#2b8cc4'
                // }}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                {props.options.map((option, index) => {
                    return (
                        <option
                            value={option.value}
                            key={option.value + index}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
export default Select