import React,{Component} from 'react';
import './common.css';
export default class TodayDate extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.today);
        return(
            <div>
                {
                    new Date().getYear()+1900+"年"+(new Date().getMonth()+1)+"月"+(new Date().getDate())+"日"

                }
                <div className="history-items">
                    {
                        this.props.today.todayArr.map((obj,index)=>{
                            return(<div className="history-items-inner" key={index}>
                                <div className="history-items-inner-left">{obj.des}</div>
                                <div className="history-items-inner-right">{obj.operate}$</div>
                            </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}
