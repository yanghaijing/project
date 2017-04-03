import React, {Component} from 'react';
import './super.css';
import SelectItem from './selectItem'
import set2 from'../img/set2.png';
export default class LeftSelect extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.onLink);
        let time=(new Date().getYear()+1900+"年")+(new Date().getMonth()+1+"月")+new Date().getDate()+"日";

        return (

            <div className="left">
                <img src={set2}/>
                <div className="officeName">

                </div>
                <div className="classCount">
                    班级总数：

                </div>
                <div className="time-date">
                    {
                        time
                    }
                </div>
                {
                    this.props.grades.map((obj,index)=>{
                        return <SelectItem grades={obj} key={index}index={index} onLink={this.props.onLink}

                                           />

                    })
                }
            </div>

        );
    }
}