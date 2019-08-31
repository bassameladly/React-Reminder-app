import React from 'react';
import {add_Reminder, delete_Reminder, delete_all} from '../actions'
import {connect} from 'react-redux'
import moment from 'moment';
import './style.css';


class App extends React.Component {
    state = {
        text: '',
        date: ''
    }

    renderReminders = () => {
        return (
            <div>
                {
                    this.props.reminders.map(reminder => {
                        return (
                            <div key={reminder.id} className="ahmed" >
                                <p className=''>{reminder.text}</p>
                                <p>{reminder.date ? moment(new Date(reminder.date)) .fromNow() : "Invalid Date"}</p>
                                <button onClick={() => this.props.delete_Reminder(reminder.id) }>Remove Reminder </button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render () {
        console.log(this.props)
        return (
            <div className="input">
                <div className="title">Enter your reminder here</div>
                <input 
                    className='form-control'
                    type="text" 
                    placeholder="Enter Text ..."
                    value={this.state.text}
                    onChange={ (e) => this.setState({text: e.target.value}) }
                />

                <input 
                    className='form-control'
                    value={this.state.date}
                    type="datetime-local"
                    onChange= { (e) => this.setState({date: e.target.value}) }
                />

                <button
                    className="btn btn-primary btn-block"
                    onClick={ () =>  {
                        this.props.add_Reminder(this.state.text , this.state.date)
                        this.setState({text: '' , date : ''}) 
                    }}
                >
                    Add
                </button>
                <div align="center" >{
                    this.renderReminders()
                }</div>
                <button
                    className="btn btn-danger btn-block"
                    onClick={() => this.props.delete_all()}
                >
                    Clear All
                </button>
            </div>
        )
    }
}

// function mapStateToProps (state) {
//     return {
//         reminders: state
//     }
// }

// function mapDispatchToProps(disptach) {
//     return {
//         add_Reminder: () => disptach(add_Reminder())
//     }
// }
// 4
export default connect( (state) => {
    return {
        reminders: state
    }
}, {
    add_Reminder,
    delete_Reminder,
    delete_all
})(App)