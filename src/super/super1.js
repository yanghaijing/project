import React ,{Component,PropTypes} from 'react'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Head from '../super--component/head'
import LeftSelect from "../super--component/left_select";
import SuperContent from '../super--component/content'
import back from '../img/back.png'
import {SuperLoginData,leftLinkRight} from '../Action';
import {containerLink} from '../super--component/reducers'
class Super1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.linkIndex);
        return(
            <div>
                <Head grades={this.props.grades[this.props.linkIndex]}/>
                <SuperContent grades={this.props.grades[this.props.linkIndex]}/>
                <LeftSelect grades={this.props.grades}  linkIndex={this.props.linkIndex} onLink={this.props.onLink}/>

            </div>
        )
    }
}
function maneger(state) {
    console.log(state.containerLink);
    return {
        grades:state.SuperLoginData.grades,
        linkIndex:state.containerLink.linkIndex||0
    }
}

const mapDispatchToProps = {
    aa: SuperLoginData,
    onLink:leftLinkRight
};
export default connect(maneger,mapDispatchToProps)(Super1);