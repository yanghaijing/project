/**
 * Created by Administrator on 2017/3/13.
 */
import React,{Component} from 'react';
import './common.css';
import Score from './score';
import Title from './title';
import SalaryIncrease from './salary_increase';
import SalaryReduce from './salary_reduce'
import list from '../img/list.png'
import jifen from '../img/jifen.png'

export default class Content extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let array=[];
        this.props.rewards.map((obj,index)=>{
           if(obj.type==1){
               array.push(obj);
           }
        });
        console.log(this.props.showMask);
        return(
            <div className="content-box">
                <div className="content-inner-box">
                    <Score score={this.props.student.score} click={this.props.click}/>
                    <Title name="奖励加薪项目" color="#eed63b" name1="Incentive pay program" color1="#000" img={list}/>
                    <div className="increase-box" >
                        {
                            array.map((obj,index)=>{
                                return <SalaryIncrease reward={obj}
                                                       key={index}
                                                       showMask={this.props.showMask}/>

                            })

                        }

                    </div>
                    <Title name="惩罚减薪项目" color="#544b14" name1="Punish pay project" color1="#fff" img={jifen}/>
                    <div className="reduce-box">
                        {
                            this.props.rewards.map((obj,index)=>{
                                if(obj.type==2){
                                    return  <SalaryReduce reward={obj}
                                        key={index} showMask={this.props.showMask}/>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}