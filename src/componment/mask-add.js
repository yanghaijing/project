import React, {Component} from 'react';
import './content-student.css';
import ReactDOM from 'react-dom'
export default class Mask extends Component {
    constructor(props) {
        super(props);
        this.add=this.add.bind(this);

    }


    render() {
        return (
            <div style={
                {display:this.props.showMask==false?"none":"block"}
            }>
                <div className="mask"></div>
                <div className="confirm-student" style={{zIndex:99999}}>
                    <div className="confirm-student-title">
                        <h5>班级基本信息</h5>
                        <span>Basic class information</span>
                    </div>
                    <div className="confirm-student-body">
                        <form action="" id="myForm">
                            <div className="form-box">
                                <label htmlFor=""> 姓名 </label>
                                <input type="text"  ref="name"/>
                            </div>
                            <div className="form-box">
                                <label htmlFor="">班级 </label>
                                <input type="text" ref="class"/>
                            </div>
                            <div className="form-box">
                                <label htmlFor="">学号 </label>
                                <input type="text" ref="studentId"/>
                            </div>
                            <div className="form-box">
                                <label htmlFor="">性别 </label>
                                <input type="text"ref="sex"/>
                            </div>
                            <div className="form-box">
                                <label htmlFor="">身份证号 </label>
                                <input type="text" ref="id"/>
                            </div>
                            <div className="form-box control-student">
                                <label htmlFor="" onClick={this.props.cancelMask}>取消 </label>
                                <label htmlFor="" onClick={this.add}>确定 </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    add(){

        let name=ReactDOM.findDOMNode(this.refs.name).value;
        let Class=ReactDOM.findDOMNode(this.refs.class).value;
        let studentId=ReactDOM.findDOMNode(this.refs.studentId).value;
        let sex=ReactDOM.findDOMNode(this.refs.sex).value;
        let id=ReactDOM.findDOMNode(this.refs.id).value;
        this.props.changeData(name);
        this.props.changeData(Class);
        this.props.changeData(studentId);
        this.props.changeData(sex);
        this.props.changeData(id);
        ReactDOM.findDOMNode(this.refs.name).value="";
        ReactDOM.findDOMNode(this.refs.class).value="";
        ReactDOM.findDOMNode(this.refs.studentId).value="";
        ReactDOM.findDOMNode(this.refs.sex).value="";
        ReactDOM.findDOMNode(this.refs.id).value="";
        this.props.cancelMask();

    }

}

