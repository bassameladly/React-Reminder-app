import {ADD_REMINDER, DELETE_REMINDER, DELETE_ALL} from '../actions/types'
import {bake_cookie, read_cookie} from 'sfcookies';
// 3
const reminders = (state= [] , action) => {
    let reminders = null;
    state = read_cookie('reminders')
    if(action.type === ADD_REMINDER) {
        reminders = [...state , { text: action.text , date: action.date , id: Math.random() } ]
        bake_cookie('reminders', reminders)
        return reminders
    }

    if(action.type === DELETE_REMINDER){
        reminders = state.filter(reminder => reminder.id !== action.id)
        bake_cookie('reminders', reminders)

        return reminders;
    }

    if(action.type === DELETE_ALL){
        reminders = []
        bake_cookie('reminders', reminders)

        return reminders;
    }

    return state;
}
   

export default reminders