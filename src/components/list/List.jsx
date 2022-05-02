import React from 'react'
import {faEdit, faDelete} from 'react-icons';

const List = ({items, removeItems,editItems})  => {
  return (
    <>
    <div className="container">
        {items.map((items)=> {
            const {id, title} = items;
            return(
                <ul className= "list-group list-group-flush" key={id}>
                    <li className="list-group-item d-flex justify-content0-center-between sling-item-center">
                        {title}
                    </li>
                    <div>
                    <button type="button" className="edit-btn" onClick={() => editItems (id)}>
                            <faEdit />
                        </button>
                        <button type="button" className="edit-btn" onClick={() => removeItems (id)}>
                            <faDelete />
                        </button>
                    </div>
                </ul>
            )
        })}
    </div>
    </>
  )
}

export default List