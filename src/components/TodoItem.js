import React from 'react';
export default class TodoItem extends React.Component {
    render(){
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-xs-1"><input type="checkbox" checked={this.props.todo.completed}/></div>
                    <div className="col-xs-10"><span>{this.props.todo.title}</span></div>
                    <div className="col-xs-1">
                        <button className="btn btn-danger btn-xs">X</button>
                    </div>
                </div>
            </li>
        )
    }
}