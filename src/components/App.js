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
            todos: [],
            filter: filters.ALL, //显示全部的待办事项
            editTodo: null,      //正在编辑中的todo
        };
    }

    addTodo = (title) => {
        let todos = this.state.todos;
        todos.push({
            id: Date.now(),
            title,
            completed: false
        });
        this.setState({todos});
    }
    delTodo = (id) => {
        let todos = this.state.todos;
        todos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({todos});
    }

    toggle = (id) => {
        let todos = this.state.todos;
        todos = this.state.todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        })
        this.setState({todos});
    }

    changeFilter=(filter)=>{
        this.setState({filter});
    }
    render() {
        let showTodos = this.state.todos.filter(todo => {
            switch (this.state.filter) {
                case filters.COMPLETED:
                    return todo.completed;
                case filters.ACTIVE:
                    return !todo.completed;
                default:
                    return true;
            }
        }, this);
        let todoItems = showTodos.map((todo, index) => (
            <TodoItem toggle={this.toggle} key={index} todo={todo} delTodo={this.delTodo}/>
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
                            <TodoHeader title={this.state.newTodo} addTodo={this.addTodo}/>
                            {main}
                            <TodoFooter changeFilter={this.changeFilter} filter={this.state.filter}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}