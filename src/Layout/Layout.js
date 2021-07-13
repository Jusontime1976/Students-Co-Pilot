import React from 'react';
import Aux from '../HOC/Auxi';
import SignInPage from '../Components/Authentication/SignInPage';
import SignUpPage from '../Components/Authentication/SignUpPageUI';
import Spinner from '../UIs/Loader/Loader';
import { TramRounded } from '@material-ui/icons';

class Layout extends React.Component
{
    constructor()
    {
        super();
        this.state={
        shiftPageStatus : true ,       // true for signInPage
        spinnerStatus : false,
        };

        this.shiftPageHandler=this.shiftPageHandler.bind(this);
    }

    shiftPageHandler()
    {
        this.setState({
            spinnerStatus : true
        })
        setTimeout(()=>{
            this.setState({
                shiftPageStatus : !this.state.shiftPageStatus,
                spinnerStatus : false
            });
        },400);
    }

    render()
    {
        const SIGNINPAGE=<SignInPage shiftPageHandler={this.shiftPageHandler}/>;
        const SIGNUPPAGE=<SignUpPage shiftPageHandler={this.shiftPageHandler}/>;
        const AUTHENTICATION_PAGE=(this.state.shiftPageStatus ? SIGNINPAGE : SIGNUPPAGE);
        const HOME_PAGE=(this.state.spinnerStatus ? <Spinner /> : AUTHENTICATION_PAGE);

        return (
          <Aux>
          {HOME_PAGE}
          </Aux>
        );
    }
};

export default Layout;
