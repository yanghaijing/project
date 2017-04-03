import React,{Component} from 'react';
import './common.css';
export default class Mask extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.showMask);
        return(
            <div style={{display:this.props.showMask==false?"none":"block"}}>
                <div className="mask">
                </div>
                <div className="confirm" style={{zIndex:9999}}>
                    <div className="confirm-title">
                        {
                            <div>
                                {this.props.showMask.type==1?"奖励加薪项目":"惩罚减薪项目"}
                            </div>
                        }
                    </div>
                    <div className="confirm-title1">
                        {
                            <div>
                                <div className="confirm-title1-left">{this.props.showMask.name}</div>
                                <div className="confirm-title1-right">{this.props.showMask.score}</div>
                            </div>
                        }
                    </div>
                    <div className="confirm-title">
                        <label className="confirm-title-item1" onClick={this.props.cancelMask}>取消</label>
                        <label className="confirm-title-item2" onClick={()=>this.props.changeScore(this.props.showMask)}>确定</label>
                    </div>
                </div>
            </div>
        )
    }
}
