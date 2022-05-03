import React, {useState, useEffect} from 'react'
import list from '../list'
import Alert from '../alert'

const Todo = () => {
  
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show:false, message:"", type:""});


  return (
    <>
      <div>
        <from onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <h3>Todo List</h3>
          <div>
            <input type="text" className="form-control" placeholder="write your list" />
          </div>
        </from>
      </div>
    </>
  )
}

export default Todo