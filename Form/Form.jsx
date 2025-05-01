import React from 'react';
import App from '../timer';
class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
    }
    handleChange = (Event) => {
        this.setState ({Event,firstName: Event.target.value})
    } 
    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert ('Your First name can not be less than 7 letters')
        }

    }

    render () {
        const {firstName,email} = this.state;
        return (
            <div>
            <input 
            type="text" 
            name='firstName'
            placeholder='firstName'
            value={firstName}
            onChange={this.handleChange}
            onBlur={this.validateName}
            />
            <input 
            type="text" 
            name='email'
            placeholder='email'
            value={email}
            onChange={this.handleChange}
            />
            
        </div>
  
        );
        
        
    }
}
export {Form}
export default App