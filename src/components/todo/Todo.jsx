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
    <div>Todo</div>
  )
}

export default Todo