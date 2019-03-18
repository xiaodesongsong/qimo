import React from 'react';
import "./head.css";
class Todolist extends React.Component {
    constructor(props){ //构造函数
        super(props);
        this.state = {
            data:{}
        };
    } 
    render() {
        return (
            <div style = {{ width:'10%',float:"left" }} > 
                <div className="box">
                    <ul >
                        <li className="my_head">
                            <div className="information"><span><img src="" /></span><span>您好</span></div>
                        </li>
                    </ul>
                    <ul className="box_head">
                        <li className="my_nenobook">
                            笔记本
                    </li>
                        <li className="my_real">
                            计划
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Todolist;