/**
 * Created by Administrator on 2017/3/15.
 */
import React,{Component} from 'react';
import './common.css';
export default class Confrim extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return(
                <div className="confirm">
                    <div className="confirm-title">
                        {
                            this.props.name
                        }
                    </div>
                    <div className="confirm-title1">
                        {
                            this.props.reward.name
                        }
                    </div>
                    <div className="confirm-title">
                        <label className="confirm-title-item1" onClick={this.props.cancelMask}>取消</label>
                        <label className="confirm-title-item2" onClick={()=>this.props.changeScore(this.props.showMask)}>确定</label>
                    </div>
                </div>

        )
    }
}