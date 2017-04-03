import React,{Component} from 'react';
import './common.css'
export default class SalaryIncrease extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.showMask);
        return (
            <div className="increaseItem" onClick={()=>this.props.showMask(this.props.reward)}>
                <div className="increaseItem-title">
                    {
                        this.props.reward.name
                    }

                </div>
                <div className="increaseItem-score">
                    {
                        this.props.reward.score
                    }
                </div>
            </div>

        )
    }
}
