import React,{Component} from 'react';
import './Super-common.css';
class SuperHead extends Component{
    render(){
        return(
            <div className='head-box'>
                <div className='logo fl'>数字媒体学院</div>
                <div className="nav-content">
                    <div className="nav-content-left fl">
                        <div className='year fl'>数字媒体学院:</div>
                        <div className="classname fl">WEB</div>
                        <div className='box2 fl'>
                            1503
                        </div>
                        <span className="fl">|</span>
                        <div className="fl c-name">
                            第一教学周期
                        </div>
                    </div>
                    <div className="nav-content-right fr">
                        <img src={this.props.src} onClick={this.props.Headclick}/>
                    </div>
                </div>
            </div>
        )
    }
}