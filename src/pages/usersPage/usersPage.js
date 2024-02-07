import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser, changeInput, clearUserInput, deleteUser} from "../../store/usersSlice";
import {del} from "reux/src/observer";

function UsersPage() {
    const dispatch = useDispatch()
    const {inputValue, users} = useSelector(state => state.usersReducer)
    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }
    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    return (
        <>
            <input type="text" onChange={changeInputFunc} value={inputValue}/>
            <button onClick={addUserFunc}>add user</button>
            <button onClick={() => dispatch(clearUserInput())}>clear</button>
            <button onClick={()=>dispatch(deleteUser())}>delete</button>
            {users.map(user => <h2>{user}</h2>)}
        </>
    )
}

export default UsersPage