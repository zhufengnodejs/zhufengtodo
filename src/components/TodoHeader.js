import React from 'react';
const ENTER_KEY = 13;
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {newTodo:''};
    }
    handleChange=(event) => {
        this.setState({newTodo: event.target.value});
    }

    handleKeyDown=(event)=> {
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            let val = this.state.newTodo.trim();
            if (val) {
                this.props.addTodo(val);
                this.setState({newTodo: ''});
            }
        }
    }
    render() {
        return (
            <div className="panel-heading">
                <input
                    type="text"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    autoFocus={true}
                    value={this.state.newTodo}
                    className="form-control"
                    placeholder="请输入你想做的事情"
                />
            </div>
        )
    }
}