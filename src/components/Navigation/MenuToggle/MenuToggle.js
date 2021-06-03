import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle
    ]
    
    if (props.isOpen) {
        cls.push("fa fa-times")
        cls.push(classes.open)
    } else {
        cls.push("fa fa-align-justify")
    }
 
    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
            
        />
    )
   
}
export default MenuToggle