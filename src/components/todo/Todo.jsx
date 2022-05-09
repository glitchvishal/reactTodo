import React, {useState, useEffect} from 'react'
import Alert from '../alert/Alert'
import List from '../list/List';

const Todo = () => {
  
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show:false, message:"", type:""});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      showAlert(true,"danger","Please Add Something");
    } else if(name && edit){
      setEdit(
        list.map((item) => {
          if(item.id === editId){
            return{...item, title:name}
          }
          return item
        })
      )
      setName("");
      setEditId(null);
      setEdit(false)
      showAlert(true,"success", "value change");
    }else{
      showAlert(true,"success", "list update");
      const newItem ={id:new Date().getTime().toString(), title:name}
      setList([...item, newItem])
      setName("");
    }
  };
  const showAlert = () => {};
  const removeItems = () => {};
  const editItems = () => {};
  const clearList = () => {};



  return (
    <>
      <div>
        <from onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <h3>Todo List</h3>
          <div>
            <input type="text" className="form-control" placeholder="write your list" onChange={(e) => setName(e.target.value)} value={name}/>
            <button type="button" className="btn btn-success">
              {edit ? "Edit" : "submit"}
            </button>
          </div>
        </from>
        {list.length > 0 && (
          <div>
            <List item={list} removeItems={removeItems} editItems={editItems} />
            <div>
               <button className="btn btn-warning" onClick={clearList}>Clear</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Todo