/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'

const listGroup = (props) => {
    const { items,textProperty,valueProperty,onItemSelect,selectedItem } = props;
    return (
        <ul className="list-group">
            {items.map(item =>(
                <li  
                key={item[valueProperty]} 
                onClick={()=> onItemSelect(item)}
                className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                >
                    {item[textProperty]}
                </li>
             ))}
      </ul>
    )
}

listGroup.defaultProps  = {
    textProperty:"name",
    valueProperty:"_id"
}

export default listGroup
