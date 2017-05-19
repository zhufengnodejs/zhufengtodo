import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import * as filters from './filters';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                id: Date.now(),
                title: '今天学习React',
                completed: false
            }],
            filter: filters.ALL, //显示全部的待办事项
            editTodo: null,      //正在编辑中的todo
            newTodo: ''          //新的待办事项
        };
    }

    render() {
        let showTodos = this.state.todos.filter(todo => {
            switch (this.state.filter) {
                case filters.COMPLETED:
                    return todo.completed;
                case filters.COMPLETED:
                    return !todo.completed;
                default:
                    return true;
            }
        },this);
        let todoItems = showTodos.map((todo,index)=>(
            <TodoItem key={index} todo = {todo}/>
        ))
        let main = (
            <div className="panel-body">
                <ul className="list-group">
                    {todoItems}
                </ul>
            </div>
        )
        return (
            <div className="container" style={{marginTop: 10}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <TodoHeader/>
                            {main}
                            <TodoFooter/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}