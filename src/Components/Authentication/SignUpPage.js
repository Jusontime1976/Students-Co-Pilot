import React from 'react';
import Aux from '../../Hoc/Auxi';
import SignUpPageUI from './SignUpPageUI';

class SignUpPage extends React.Component
{
    render()
    {
        return(
         <Aux>
       <SignUpPageUI shiftPageHandler={this.props.shiftPageHandler}/>
         </Aux>
        );
    }
};

export default SignUpPage;