//import React,{Component} from 'react';
//import './common.css';
//export default class Content1 extends Component{
//    constructor(props){
//        super(props)
//    }
//    render(){
//        console.log(this.props);
//        return(
//            <div className="content-box">
//                <div className="content-inner-box">
//
//                </div>
//            </div>
//        )
//    }
//}
import React, {Component} from 'react';
import StudentItem from './student-item';
import './content-student.css';

export default class ContentStudent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.student);
        return (
            <div className="content-box" style={{height:"100%"}}>
                <div className="inner-box">
                    <div className="title-student">
                        <div className="img"></div>
                        <h3>学生管理</h3>
                        <label style={{fontFamily:"微软雅黑",fontSize:"12px",paddingLeft:"10px"}}>School management
                        </label>
                    </div>
                    <div className="student-box">
                        {
                            this.props.student.map((obj,index)=>{
                                if(obj.status=="1"){
                                    return <StudentItem key={index}
                                        name={obj}
                                        />
                                }else if(obj.status=="2"){
                                    return <div className="student-item" style={{backgroundColor:"#cccccc"}}>
                                        {obj.sname}
                                        <div className="student-item-leave">休  学</div>
                                    </div>
                                }else{
                                    return <StudentItem
                                        name={obj} key={index}
                                        />
                                }

                            })
                        }
                        <div className="student-item" style={{backgroundColor:"#bbbbbb",color:"#fff",fontSize:"36px"}}
                             onClick={this.props.showMask}>
                            +
                        </div>
                    </div>
                </div>

            </div>
        );
    }


}
