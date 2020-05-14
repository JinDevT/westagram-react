import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import logo from '../../images/1600px-Instagram_logo.svg.png';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputId : "",
            inputPassword : "",
            isActive: false
        }
    }
    
    // input value
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    // button change
    buttonChange = () => {
        const { inputId, inputPassword } = this.state;
        if(inputId.includes("@") && inputPassword > 4) {
           this.setState({isActive : true});
        } else {
            this.setState({isActive : false});
        }
    }
    
    // go main
    handleGoMain = (e) => {
        e.preventDefault();
        const { inputId, inputPassword } = this.state;
        console.log("전달받은 id:: ", inputId);
        console.log("전달받은 password:: ", inputPassword);

        if(inputId.includes("@") && inputPassword > 3) {
            this.props.history.push('/main');
        }
    }

    render() {
        const { inputId, inputPassword, isActive } = this.state;
        return (
            <div className="Login">
                <div className="container">
                    <div className="inner">
                        <header className="header">
                            <h1>
                                <span className="header_tit">로고</span>
                                <Link to="/" className="page_move">
                                    <img src={logo} alt="logo"/>
                                </Link>
                            </h1>
                        </header>
                        <form className="form">
                            <div className="input_box">
                                <input id="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" value={inputId} name="inputId" onChange={this.handleInput} onKeyUp={this.buttonChange}/>
                            </div>
                            <div className="input_box">
                                <input id="password" type="password" placeholder="비밀번호" value={inputPassword} name="inputPassword" onChange={this.handleInput} onKeyUp={this.buttonChange}/>
                            </div>
                            <div className="button_box">
                                <button type="submit" className={"btn " + (isActive ? "active" : "disabled")}  onClick={this.handleGoMain}>
                                    <span>로그인</span>
                                </button>
                            </div>
                        </form>
                    
                        <div className="password_forget">
                            <Link to="/" className="page_move">
                                <span>비밀번호를 잊으셨나요?</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Login);