import React, {Component} from 'react';
import logo from '../../assets/images/Hurix-Logo.png';
import Dashboard from '../dashboard/dashboard';


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:''
        }
        this.handleClick = this.handleClick.bind(this);
       }
       handleClick(e){
        var payload={
            "email":this.state.username,
            "password":this.state.password
            }
      
       };
       
    render() {
        console.log(this.state, 'e');
        return (
            <div>
                <div className="col-md-12 login-bg-img">
                    <img className="hurix-logo-right" src={logo} alt="logo"/>
                    <div className="col-md-12">
                        <div className="mt-0">
                            <div className="col-md-4 offset-2 col-8 col-sm-8 offset-sm-2 offset-md-4">
                                <div className="row">
                                    <div className="col-md-10 offset-1 pt-1 pb-4 mt-1 transparent-form-bg">
                                        <span className="icon-hope"></span>
                                        
                                        <h5 className="text-center mt-5">Sign In</h5>
                                        <hr></hr>
                                        <form className="form-horizontal col-md-10 offset-md-1">
                                            <div className="form-group mb-1">
                                                <label className="control-label required mb-0">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control login-input-box" required/>

                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="control-label mb-0">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control login-input-box" required/>

                                            </div>
                                            <button type="button" className="btn btn-editor tag-center mt-1">Sign In</button>
                                            <a className="tag-center mt-3 forgot-password-link cursor-pointer">Forgot Password?</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     

            </div>
        );
    }
}

export default Login;