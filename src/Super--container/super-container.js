import React,{Component} from 'react';
import './Super-common.css'
import SuperHead from './SuperHead'
import {connect} from 'react-redux';
class SuperConntainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="App">
                <SuperHead />
            </div>
        )
    }
}
export default connect()(SuperConntainer);