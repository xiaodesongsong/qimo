import React from 'react';
import "./rel_book.css";
class Todolist extends React.Component {
    constructor(props){ //构造函数
        super(props);
        this.state = {
            data:{}
        };
    } 
    render() {
        return (
            <div style = {{ width:'88%',float:'right' }}>
                <div className="boxs">
                    <ul className = " boxs_title ">
                        <li>
                            <span className = " title_span ">
                                <img className="title_img" src={require('./image/head.jpg')} />
                                <span className = "span_set"><p>下午好：</p><p>今日名言：我ijfjdfkahfhakfhak</p></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
          
        );
    }
}
export default Todolist;