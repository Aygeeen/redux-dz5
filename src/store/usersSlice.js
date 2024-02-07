import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        inputValue: "",
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        clearUserInput: (state, action) => {
            state.inputValue = ''
        },
        deleteUser: (state, actions)=>{
            state.inputValue = ''
            state.users = []
        }
    }
})
export const {changeInput, addUser, clearUserInput, deleteUser} = usersSlice.actions
export default usersSlice.reducer