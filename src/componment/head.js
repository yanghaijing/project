/**
 * Created by Administrator on 2017/3/13.
 */
import React, { Component } from 'react';
import './common.css'

export default class Head extends Component {
    constructor(props){
        super(props);
        this.cName=this.cName.bind(this);
    }
    cName(){
        let aa;
        this.props.course.map((obj,index) =>{
            if(obj.cname==this.props.grade.course){
                aa=<label>第{index+1}门课程《{obj.cname}》</label>
            }
        },this);
        return aa
    }
    render() {
        let time=new Date().getYear()+1900;
        return (
            <div className='head-box'>
                <div className='logo fl'>数字媒体学院</div>
                <div className="nav-content">
                    <div className="nav-content-left fl">
                        <div className='year fl'>{time+"年"}</div>
                        <div className='box2 fl'>
                            {this.props.period.name}
                        </div>
                        <span className="fl">|</span>
                        <div className="fl c-name">
                            {this.cName()}
                        </div>
                    </div>
                    <div className="nav-content-right fr">
                        <label>任课老师：{this.props.teacherList[0].tname}</label>
                        <span>|</span>
                        <label>班主任：{this.props.teacherList[1].tname}</label>
                        <img src={this.props.src} onClick={this.props.Headclick}/>
                    </div>
                </div>
            </div>
        );
    }
}
