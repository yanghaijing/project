import React,{Component} from 'react';
import './super.css';
import SuperTitle from "./super--title";
import SuperItem from "./super item";
import SuperTeacher from "./super--teacher";
import SuperScore from './super--score'
export default class Supercontent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div className="middle">
                    <div className="middle-inner">
                        <SuperItem grades={this.props.grades}/>
                        <SuperTitle />
                        <SuperTeacher grades={this.props.grades}/>
                        <SuperScore grades={this.props.grades}/>
                    </div>
                </div>
        )
    }
}