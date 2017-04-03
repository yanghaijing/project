/**
 * Created by Administrator on 2017/3/13.
 */
import React, {Component} from 'react';
import './common.css';
import set1 from'../img/touxiang.png';
import SelectItem from './selectItem'


export default class leftSelect extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="left-box">
                <img src={set1} onClick={this.props.pictureClick}/>
                {
                    this.props.students.map((obj,index)=>{
                        return <SelectItem student={obj} key={index}index={index}
                                           changeIndex={this.props.changeIndex}
                                           clickedStudent={this.props.clickedStudent}
                            />

                    })
                }
            </div>
        );
    }


}