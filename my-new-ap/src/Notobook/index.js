import React from 'react';
import Head from './head';
import Rel_book from './rel_book';



class Todolist extends React.Component {
    constructor(props){ //构造函数
        super(props);
        this.state = {
            data:{}
        };
    } 
    render() {
        return (
            <div>
                <Head />
                <Rel_book />
            </div>
        );
    }
}
export default Todolist;