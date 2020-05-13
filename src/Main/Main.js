import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ContentLeft from '../components/ContentLeft/ContentLeft';
import ContentRigth from '../components/ContentRigth/ContentRigth';

import '../style/reset.css';
import '../style/common.css';
import './Main.scss';
import Feed from '../components/Feed/Feed';





class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Header />
                <div className="main_box">
                    <div className="container">
                        <ContentLeft />
                        <ContentRigth />
                    </div>
                </div>
            </div>
        );
    }
};

export default Main;