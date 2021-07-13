import React,{Component} from 'react';
import Aux from '../../HOC/Auxi';
import SignInPageUI from './SignInPageUI';

class SignInPage extends Component
{
    render()
    {
        return (
            <Aux>
           <SignInPageUI shiftPageHandler={this.props.shiftPageHandler}/>
            </Aux> 
        );
    }
};

export default SignInPage;