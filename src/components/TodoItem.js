import React from 'react';

export default class TodoItem extends React.Component {
    render(){
        let todo = this.props.todo;
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-xs-1"><input type="checkbox" checked={todo.completed} onChange={()=>this.props.toggle(todo.id)}/></div>
                    <div className="col-xs-10"><span>{todo.title}</span></div>
                    <div className="col-xs-1">
                        <button className="btn btn-danger btn-xs" onClick={()=>this.props.delTodo(todo.id)}>X</button>
                    </div>
                </div>
            </li>
        )
    }
}