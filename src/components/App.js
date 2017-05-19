import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import * as filters from './filters';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' // ES6
import './App.css';

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

    changeFilter = (filter) => {
        this.setState({filter});
    }
    clearCompleted = () => {
        let todos = this.state.todos;
        todos = this.state.todos.filter(todo => !todo.completed);
        this.setState({todos});
    }
    toggleAll = (event) => {
        let checked = event.target.checked;
        let todos = this.state.todos;
        todos = this.state.todos.map(todo => {
            todo.completed = checked;
            return todo;
        })
        this.setState({todos});
    }

    render() {
        let todos = this.state.todos;
        let showTodos = todos.filter(todo => {
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
        let activeTodoCount = todos.reduce((result, todo) => todo.completed ? result : result + 1, 0);
        let completedTodoCount = todos.length - activeTodoCount;
        let checkAll = (
            todos.length > 0 ? (
                <li className="list-group-item">
                    <input
                        type="checkbox"
                        onChange={this.toggleAll}
                        checked={activeTodoCount === 0}
                    />{activeTodoCount === 0 ? '全部取消' : '全部选中'}
                </li>
            ) : null
        )
        
        let main = (
            <div className="panel-body">
                <ul className="list-group">
                    {checkAll}
                    <CSSTransitionGroup
                        transitionName="todo"
                        transitionEnter={true}
                        transitionLeave={true}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {todoItems}
                    </CSSTransitionGroup>
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
                            <TodoFooter clearCompleted={this.clearCompleted} completedTodoCount={completedTodoCount}
                                        activeTodoCount={activeTodoCount} changeFilter={this.changeFilter}
                                        filter={this.state.filter}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}