import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../styles/todolist.css"
import 'antd/dist/antd.css';
import { Input } from 'antd';
import Modal from "@material-ui/core/Modal";
import axios from 'axios';

let listIndex;


function ToDoList() {

    // axios.defaults.headers.common = {
    //     Authorization: "Bearer " + localStorage.getItem('access_token')
    // }
    
    const { Search } = Input;
    const [searchText, setSearchText] = useState("");
    const onSearch = value => {
        setSearchText(value);
    }

    let history = useHistory();;

    const [open, setOpen] = useState(false);
    const [nameList, setNameList] = useState("");
    const [newList, setNewList] = useState([]);
    const [newTask, setNewTask] = useState({name: "", isDone: false});

    const [openUpdate, setOpenUpdate] = useState(false);
    const [updateList, setUpdateList] = useState([]);

    const [requestBody, setRequestBody] = useState({name: "", task: []})

    const [myLists, setMyLists] = useState([]);

    if(!localStorage.getItem("access_token")){
        history.push("/")
    }

    const handleOpen = () => {
      setOpen(true);
    };

    const handleOpenUpdate = (e) => {
        setOpenUpdate(true);
        listIndex = e;
        console.log(listIndex);
        setUpdateList(myLists[listIndex].task);
      };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseUpdate = () => {
        setOpenUpdate(false);
    };

    const handleTaskCancel = () => {
        let element = document.getElementById("taskNameInput");
        element.value = "";
    }

    const handleAdd = () => {
        setNewList([...newList, newTask]);
    }

    const handleAddUpdate = () => {
        setUpdateList([...updateList, newTask]);
    }

    const handleCancelUpdateAll = () => {
        setUpdateList([]);
        setNameList("");
        setNewTask({name: "", isDone: false});
        handleCloseUpdate();
    }

    const handleStatus = () => {
        
    }

    const handleSaveUpdate = () => {

        //const token = localStorage.getItem('access_token')

        setRequestBody({name: myLists[listIndex].name, task: updateList});
        if(nameList != ""){
            myLists[listIndex].name = nameList;
        }
        myLists[listIndex].task = updateList;
        setNameList("");
        setNewTask({name: "", isDone: false});
        setUpdateList([]);
        console.log(requestBody);
        handleCloseUpdate();

        // axios.put("https://recruitment.ultimate.systems//to-do-lists/{id}", requestBody, {headers: {
        //     "Content-type": "Application/json",
        //     "Authorization": `Bearer ${token}`
        //     }   
        // })
        // .then(response => {
        //     if(response.data != null){
        //         console.log(response.data)
        //     }
        // });
    }

    const handleCancelAll = () => {
        setNameList("");
        setNewTask({name: "", isDone: false});
        setNewList([]);
        handleClose();

    };


    const handleSave = () => {

        //const token = localStorage.getItem('access_token')
        setRequestBody({name: nameList, task: newList});
        setMyLists([...myLists, {name: nameList, task: newList}])
        setNameList("");
        setNewTask({name: "", isDone: false});
        setNewList([]);
        handleClose();

        
        // axios.post("https://recruitment.ultimate.systems/to-do-lists", requestBody, {headers: {
        //     "Content-type": "Application/json",
        //     "Authorization": `Bearer ${token}`
        //     }   
        // })
        // .then(response => {
        //     if(response.data != null){
        //         console.log(response.data)
        //     }
        // });
    }

    function search(myLists) {

        const listKey = ["name"];

        if(searchText.length === 0)
            return myLists;
        else{
            let filtr;
            let filtr2;
            let result = searchText.split(" ");
            if(result.length === 1){
                filtr = myLists.filter((list) =>
                    listKey.some((key) => list[key].toString().toLowerCase().indexOf(result[0].toString().toLowerCase()) > -1));
                return filtr
            }
            else if(result.length === 2 && result[2] !== ""){
                filtr = myLists.filter((list) =>
                    listKey.some((key) => list[key].toString().toLowerCase().indexOf(result[0].toString().toLowerCase()) > -1));
                filtr2 = filtr.filter((list) =>
                    listKey.some((key) => list[key].toString().toLowerCase().indexOf(result[1].toString().toLowerCase()) > -1));
                return filtr2;
            }

        }

    }

    return (
        <div className="mainContainer">

            <div className="toDoListContainer">
                <div className="searchContainer">
                    <Search placeholder="Search" allowClear onSearch={onSearch} style={{ width:200, margin:"2% 5%"} } />
                    <button type="button" className="btn btn-secondary">Sort</button>
                </div>
                <div className="contentContainer">
                {search(myLists).map(ml => (
                            <div key={myLists.indexOf(ml)} className="myListsContainer" onClick={() => handleOpenUpdate(myLists.indexOf(ml))}>
                                    <p className="myListName">{ml.name}</p>
                                    <p className="myListInfo">Created at: 18-03-2021</p>  
                                    <p className="myListInfo">completed: 15 Uncompleted: 10 All: 25</p>                          
                            </div>
                ))}
                </div>
                <div className="openModalContainer">
                    <p>
                        <i className="fas fa-plus-circle" onClick={handleOpen}></i>
                    </p>
                </div>
                
                
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={
                            {position: "absolute", 
                            top:"20%", left:"30%", 
                            width:"40%", 
                            height:"60%", 
                            backgroundColor:"#2D2D2D", 
                            display:'flex', 
                            flexDirection: "column",
                            alignItems:"center"}}>
                        <input
                            style={{width:"80%", marginTop: "10px"}}
                            type="text" 
                            name="listNameInput"
                            className="form-control" 
                            id="listNameInput" 
                            onChange={e => setNameList(e.target.value)}
                            value={nameList}
                            placeholder="List name"
                            required
                            />
                        <div className="newTasksContainer">
                            {newList.map(t => (
                            <div key={t.name} className="addedTaskContainer">
                                <div className="input-group-text" style={{width:"10%"}}>
                                    <input className="form-check-input mt-0" type="checkbox"/>
                                </div>
                                <div className="newTaskNameWrapper"> 
                                    <p className="newTaskName">{t.name}</p>
                                </div>
                                
                            </div>
                            ))}
                            <div className="input-group mb-3">
                                <div className="input-group-text">
                                    <input className="form-check-input mt-0" type="checkbox" />
                                </div>
                                <input
                                    type="text" 
                                    name="taskNameInput"
                                    required
                                    className="form-control" 
                                    id="taskNameInput" 
                                    onChange={e => setNewTask({...newTask, name: e.target.value})}
                                    value={newTask.name}
                                    placeholder="Task name"/>
                            </div>

                            <div className="buttonsContainer">
                                <button type="button" className="btn btn-danger" onClick={handleTaskCancel}>CANCEL</button>
                                <button type="button" className="btn btn-warning" onClick={handleAdd}>ADD</button>
                            </div>
                            
                        </div>
                        <div className="newTaskContainerButtons">
                            <button type="button" className="btn btn-danger" onClick={handleCancelAll}>CANCEL</button>
                            <button type="button" className="btn btn-warning" onClick={handleSave}>SAVE</button>
                        </div>
                    </div>
                </Modal>

                <Modal
                    open={openUpdate}
                    onClose={handleCloseUpdate}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={
                            {position: "absolute", 
                            top:"20%", left:"30%", 
                            width:"40%", 
                            height:"60%", 
                            backgroundColor:"#2D2D2D", 
                            display:'flex', 
                            flexDirection: "column",
                            alignItems:"center"}}>
                        <input
                            style={{width:"80%", marginTop: "10px"}}
                            type="text" 
                            name="listNameInput"
                            className="form-control" 
                            id="listNameInput" 
                            onChange={e => setNameList(e.target.value)}
                            value={nameList}
                            placeholder={listIndex != null && myLists.length != 0 ? myLists[listIndex].name : "List Name"}
                            required
                            />
                        <div className="newTasksContainer">
                            {updateList.length != 0 ? (updateList.map(t => (
                            <div key={t.name} className="addedTaskContainer">
                                <div className="input-group-text" style={{width:"10%"}}>
                                    <input className="form-check-input mt-0" type="checkbox" id={updateList.indexOf(t)} onClick={() => handleStatus(updateList.indexOf(t))}/>
                                </div>
                                <div className="newTaskNameWrapper"> 
                                    <p className="newTaskName">{t.name}</p>
                                </div>
                                
                            </div>
                            ))) : null}
                            <div className="input-group mb-3">
                                <div className="input-group-text">
                                    {/* <input className="form-check-input mt-0" type="checkbox" /> */}
                                </div>
                                <input
                                    type="text" 
                                    name="taskNameInput"
                                    required
                                    className="form-control" 
                                    id="taskNameInput" 
                                    onChange={e => setNewTask({...newTask, name: e.target.value})}
                                    value={newTask.name}
                                    placeholder="Task name"/>
                            </div>

                            <div className="buttonsContainer">
                                <button type="button" className="btn btn-danger" onClick={handleTaskCancel}>CANCEL</button>
                                <button type="button" className="btn btn-warning" onClick={handleAddUpdate}>ADD</button>
                            </div>
                            
                        </div>
                        <div className="newTaskContainerButtons">
                            <button type="button" className="btn btn-danger" onClick={handleCancelUpdateAll}>CANCEL</button>
                            <button type="button" className="btn btn-warning" onClick={handleSaveUpdate}>SAVE</button>
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
    )
}

export default ToDoList;
