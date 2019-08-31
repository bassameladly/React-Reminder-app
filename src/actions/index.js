import {ADD_REMINDER, DELETE_REMINDER, DELETE_ALL} from './types'
// 2
export const add_Reminder = (text , date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date
    }
    return action
}

export const delete_Reminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id: id
    }
    return action;
}

export const delete_all = () =>{
    const action = {
        type: DELETE_ALL
    }
    return action;
}

