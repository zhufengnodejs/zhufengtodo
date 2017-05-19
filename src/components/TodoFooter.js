import React from 'react';
export default class TodoFooter extends React.Component {
    render(){
        return (
            <div className="panel-footer">
                <div className="row">
                    <div className="col-xs-3 text-left">
                        <div style={{height: 30, lineHeight: '30px'}}>还有件1待办事项</div>
                    </div>
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
        )
    }
}