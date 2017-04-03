import React,{Component} from 'react';
import '../componment/common.css';
import teacher from '../img/teacher.png'
export default class SuperTitle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="title" >
                <div className="title-img-box">
                    <img src={teacher}/>
                </div>
                <div className="title-text-box">
                    班级教师
                </div>
                <div className="title-text1-box">
                    Class Teacher
                </div>
            </div>
        )
    }
}
