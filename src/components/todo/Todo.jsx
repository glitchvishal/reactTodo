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
      showAlert(true,"Success", "Value Change");
    }else{
      showAlert(true,"Success", "List Update");
      const newItem ={id:new Date().getTime().toString(), title:name}
      setList([...list, newItem])
      setName("");
    }
  };
  const showAlert = (show = false,type="",message="") => {
    setAlert({show:show, type:type, message:message})
  };
  const removeItems = () => {};
  const editItems = () => {};
  const clearList = () => {};



  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <h3>Todo List</h3>
          <div>
            <input type="text" className="form-control" placeholder="Add Your List" onChange={(e) => setName(e.target.value)} value={name}/>
            <button type="button" className="btn btn-success">
              {edit ? "Edit" : "submit"}
            </button>
          </div>
        </form>
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