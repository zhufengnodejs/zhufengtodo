import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
export default class App extends React.Component {
    render() {
        return (
            <div className="container" style={{marginTop: 10}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input type="text" className="form-control" placeholder="请输入你想做的事情"/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="col-xs-1"><input type="checkbox"/></div>
                                            <div className="col-xs-10"><span>在珠峰学习React</span></div>
                                            <div className="col-xs-1">
                                                <button className="btn btn-danger btn-xs">X</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel-footer">
                                <div className="row">
                                    <div className="col-xs-3 text-left"><div style={{height:30,lineHeight:'30px'}}>还有件1待办事项</div></div>
                                    <div className="col-xs-6 text-center">
                                        <button className="btn btn-default btn-sm">全部</button>
                                        <button style={{marginLeft: 5}} className="btn btn-warning btn-sm">未完成</button>
                                        <button style={{marginLeft: 5}} className="btn btn-success btn-sm">已完成</button>
                                    </div>
                                    <div className="col-xs-3 text-right">
                                        <button className="btn btn-danger btn-sm">删除已完成的</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}