/**
 * Created by Administrator on 2017/3/14.
 */
import React,{Component} from 'react';
import './common.css'
import money from '../img/money.png'

export default class HistoryScore extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="history-score">
                <div className="history-score-inner">
                    <div className="history-score-img">
                        <img src={money}/>历史平均薪资
                    </div>
                    <div className="history-score-jifen">￥
                        {
                            this.props.score
                        }
                    </div>
                </div>
            </div>
        )
    }
}
