import React, { Component } from 'react';
import './super.css'
import set from '../img/set.png'
export default class Head extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div className='head-box'>
                <div className='logo fl'>数字媒体学院</div>
                <div className="nav-content">
                    <div className="nav-content-left fl">
                        <div className='year fl'>数字媒体学院:</div>
                        <div className="classname fl">WEB</div>
                        <div className='box2 fl'>
                            {this.props.grades.gname}
                        </div>
                        <span className="fl">|</span>
                        <div className="fl c-name">
                            第一教学周期
                        </div>
                    </div>
                    <div className="nav-content-right fr">
                        <img src={set}/>
                    </div>
                </div>
            </div>
        );
    }

}
