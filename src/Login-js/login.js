import React ,{Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import SelectItem from '../loading/SelectItem'
import InputItem from '../loading/InputItem'
import Identify from '../loading/Identify'
import '../Login-js/login.css'
import {teacherLoginData,SuperLoginData} from '../Action'
import {connect} from'react-redux'
import {Link, hashHistory, browserHistory} from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.getIden = this.getIden.bind(this);
        //this.saveLoginMessage=this.saveLoginMessage.bind(this);
        //this.keyLogin=this.keyLogin.bind(this);
        //this.LoginClick = this.LoginClick.bind(this);
        //this.state={
        //    college:'数字媒体web',
        //    authority:'教师',
        //    username:'admin',
        //    passward:'admin',
        //    id:'',
        //    url:'http://192.168.35.25:3000',
        //    laissezPasser:false
        //}
    }

    login() {
        let college = parseInt(ReactDOM.findDOMNode(this.refs.college).value) + 1;
        let authority = ReactDOM.findDOMNode(this.refs.authority).value;
        let username = ReactDOM.findDOMNode(this.refs.username).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;
        let identify = ReactDOM.findDOMNode(this.refs.identify).value;
        console.log(authority);
        //if ((identify.toLowerCase() == this.state.id.toLowerCase()))
            if (authority==1) {
                fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=1`)
                    .then(json=>json.json())
                    .then(json=> {
                        if (json.status == 201) {
                            console.log(json.message);
                        } else if (json.status == 200) {
                            this.props.onSuper(json);
                            console.log(this.props);
                            // this.props.dispatch(teacherLoginData(json))
                            hashHistory.push("/teacher");
                        }


                    }, err=> {
                        alert("服务器异常");
                    });



            } else if (authority ==2) {
                //fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=1`)
                //    .then(json=>json.json())
                //    .then(json=> {
                //        if (json.status == 201) {
                //            alert(json.message);
                //        } else if (json.status == 200) {
                //            this.props.onSuper(json);
                //            // console.log(this.props);
                //            // this.props.dispatch(teacherLoginData(json))
                //            hashHistory.push("/super");
                //        }
                //
                //
                //    }, err=> {
                //        alert("服务器异常");
                //    });
                this.props.aa();
                hashHistory.push("/super");
            }
        }
    //}

    //componentWillMount(){
    //    this.props.dispatch(fixedUrl(this.state.url));
    //
    //
    //}
    //saveLoginMessage(){
    //    let college=parseInt(ReactDOM.findDOMNode(this.refs.college).value)+1;
    //    let authority=ReactDOM.findDOMNode(this.refs.authority).value;
    //    let username=ReactDOM.findDOMNode(this.refs.username).value;
    //    let password=ReactDOM.findDOMNode(this.refs.password).value;
    //    let identify=ReactDOM.findDOMNode(this.refs.identify).value;
    //    let laissezPasser=false;
    //    this.login(college,authority,username,password,identify,laissezPasser)
    //
    //}
    render() {
        return (
            <div style={{height:"100%"}}>{
                <div className="login-bg">
                    <div className="login-box">
                        <SelectItem prompt={['数字媒体web','数字媒体ui']}
                                    ref='college'/>
                        <SelectItem prompt={['学生','教师','超级管理员']}
                                    ref='authority'/>
                        <InputItem prompt="用户名" ref='username' name=''/>
                        <InputItem prompt="密码" ref='password' name=''/>
                        <Identify ref="identify" getId={this.getIden}/>
                        <InputItem prompt="登陆" color='yellow' LoginClick={this.login}/>
                    </div>

                </div>
            }
            </div>
        );
    }
    getIden(value){
        this.setState({
            id:value
        })
    }
}



    function maneger(state) {
        console.log(state);
        return state
    }
    const mapDispatchToProps = {
        onSuper: teacherLoginData,
        aa:SuperLoginData
    };

export default connect(maneger,mapDispatchToProps)(Login);


