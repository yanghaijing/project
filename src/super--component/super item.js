import React,{Component} from 'react';
import '../componment/common.css';
import rect from '../img/rect.png';
import count from '../img/count.png';
import course from '../img/course.png';
export default class SuperItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="super-item">
                    <div className="super-item-left">
                        <img src={rect}/>
                        <div className="imgbox">
                            <img src={course}/>
                        </div>
                        <div className="textbox">
                        课程
                        </div>
                    </div>
                    <div className="super-item-right">
                        {this.props.grades.course}
                    </div>


                </div>
                <div className="super-item">
                    <div className="super-item-left">
                        <img src={rect}/>
                        <div className="imgbox">
                            <img src={count}/>
                        </div>
                        <div className="textbox">
                            班级人数
                        </div>
                    </div>
                    <div className="super-item-right">
                        {this.props.grades.gcount}
                    </div>
                </div>
            </div>
        )
    }
}

