import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    state = {
        message: '',
        isFormValid: false,
    }
    changeErrorState = (isFormValid) =>{
        this.setState({isFormValid: isFormValid}, () => {
            this.setState({message: isFormValid ? 'Success' : 'Invalid'})
        })
    }
    render() {
        return (<div>
            <Form error = {this.changeErrorState} isFormValid = {this.state.isFormValid} ></Form>
            <Message message = {this.state.message}></Message>
        </div>);
    }
}

export default App;
