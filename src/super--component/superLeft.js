import React, {Component} from 'react';
import './super.css';
import set2 from'../img/set2.png';
import SuperSelectItem from './select-item'
export default class SuperLeft extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let time=(new Date().getYear()+1900+"年")+(new Date().getMonth()+1+"月")+new Date().getDate()+"日";

        return (

            <div className="left">
                <img src={set2}/>
                <div className="officeName">
                    {
                        this.props.grade.officeName
                    }
                </div>
                <div className="classCount">
                    班级总数：
                    {
                        this.props.grade.gcount
                    }
                </div>
                <div className="time-date">
                    {
                        time
                    }
                </div>
                <SuperSelectItem  content="班级设置" color="#eed63b" />
                <SuperSelectItem  content="奖罚设置"/>
            </div>

        );
    }
}