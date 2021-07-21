import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function ToDoList() {

    let history = useHistory();
    let token;

    if(!localStorage.getItem("access_token")){
        history.push("/")
    }

    return (
        <div className="mainContainer">
            <div className="toDoListContainer">
                <div className="searchContainer">

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ToDoList
