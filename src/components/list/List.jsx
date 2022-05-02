import React from 'react'
import {faEdit, faDelete} from 'react-icons';

const List = ({items, removedItems,editItems})  => {
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
                        <button type="button" className="edit-btn" onClick={() => editItems}>
                            <faEdit />
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