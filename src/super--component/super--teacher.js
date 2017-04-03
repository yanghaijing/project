import React,{Component} from 'react';
import '../componment/common.css';
import teacherLogo from '../img/teacherLogo.png'
export default class SuperTeacher extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return(
            <div className="content-box1">
                <div className="history-teacher">
                    <div className="teacher-box">
                        <div className="teacher-top c">
                            <span>任课老师</span>
                            <span>Teacher</span>
                            <div className="teacher-img"></div>
                        </div>
                        <ul className="teacher-mes">
                            <li><span>{this.props.grades.teacher}</span></li>
                            <li><span>WEB</span></li>
                            <li><span>WEB</span></li>
                        </ul>
                    </div>
                    <div className="teacher-box">
                        <div className="teacher-top a">
                            <span>班主任</span>
                            <span>Class director</span>
                            <div className="teacher-img"></div>
                        </div>
                        <ul className="teacher-mes">
                            <li><span>{this.props.grades.header}</span></li>
                            <li><span>WEB</span></li>
                            <li><span>WEB</span></li>
                        </ul>
                    </div>
                    <div className="teacher-box">
                        <div className="teacher-top b">
                            <span>年级主任</span>
                            <span>Class director</span>
                            <div className="teacher-img"></div>
                        </div>
                        <ul className="teacher-mes">
                            <li><span>边云风</span></li>
                            <li><span>WEB</span></li>
                            <li><span>WEB</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
