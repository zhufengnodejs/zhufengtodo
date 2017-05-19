import React from 'react';
export default class TodoItem extends React.Component {
    render(){
        return (
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
        )
    }
}