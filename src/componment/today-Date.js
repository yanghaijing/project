import React,{Component} from 'react';
import './common.css';
export default class HistoryDate extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.today);
        return(
            <div>
                {
                    this.props.history.order.map((token,index)=>{
                        return<div className="history-box" key={index}>
                            <div className="history-time">{`${token.slice(0,4)}年${token.slice(4,6)}月${token.slice(6,8)}日`}</div>
                            <div className="history-items">
                                {
                                    this.props.history.historyObj[token].map((obj,index2)=>{
                                        return(<div className="history-items-inner" key={index2}>
                                            <div className="history-items-inner-left">{obj.des}</div>
                                            <div className="history-items-inner-right">{obj.operate}$</div>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>


                    })
                }
            </div>
        )
    }
}