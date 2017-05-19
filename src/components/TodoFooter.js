import React from 'react';
import * as filters from './filters';
export default class TodoFooter extends React.Component {
    render(){
        return (
            <div className="panel-footer">
                <div className="row">
                    <div className="col-xs-3 text-left">
                        <div style={{height: 30, lineHeight: '30px'}}>
                            {this.props.activeTodoCount?<span>还有件{this.props.activeTodoCount}待办事项</span>:''}
                        </div>
                    </div>
                    <div className="col-xs-6 text-center">
                        <button onClick={()=>this.props.changeFilter(filters.ALL)} className={"btn btn-sm "+(this.props.filter === filters.ALL?'btn-success':'btn-default')}>全部</button>
                        <button onClick={()=>this.props.changeFilter(filters.ACTIVE)}  style={{marginLeft: 5}} className={"btn btn-sm "+(this.props.filter === filters.ACTIVE?'btn-success':'btn-default')}>未完成</button>
                        <button onClick={()=>this.props.changeFilter(filters.COMPLETED)}  style={{marginLeft: 5}} className={"btn btn-sm "+(this.props.filter === filters.COMPLETED?'btn-success':'btn-default')}>已完成</button>
                    </div>
                    <div className="col-xs-3 text-right">
                        {this.props.completedTodoCount>0?<button onClick={()=>this.props.clearCompleted()} className="btn btn-danger btn-sm">删除已完成的</button>:''}
                    </div>
                </div>
            </div>
        )
    }
}