import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            name: '',
            email:'',
            phone:'',
            blog:'',
            isValid:false
        };
    }

    handleChange = (e)  =>{
        this.setState({
            [e.target.name]: e.target.value
        },()=>{
                if(this.state.name.length > 0){
                    this.setState({isNameValid: true})
                }
                else{
                    this.setState({isNameValid: false})
                }
                if(this.state.email.length  > 0){
                    if(this.emailIsValid(this.state.email)){
                        this.setState({isEmailValid: true})
                    }
                }
                else{
                    this.setState({isEmailValid: false})
                }
                if(this.state.phone.length  > 0){
                    this.setState({isPhoneValid: true})
                }
                else{
                    this.setState({isPhoneValid: false})
                }
                if(this.state.blog.length  > 0){  
                        this.setState({isUrlValid: true})
                }
                else{
                    this.setState({isUrlValid: false})
                }
            }   
        )
    }


    checkFields = () => {
        if(this.state.isEmailValid === true && this.state.isNameValid === true && this.state.isUrlValid === true && this.state.isPhoneValid === true){
            if(this.state.phone.length < 9 || !this.isUrl(this.state.blog) || !this.emailIsValid(this.state.email)){
                this.props.error(false)
            }
            else{
                this.setState({isValid: true})
                this.props.error(true)
            }
            
        }
    }
    isUrl = (s) => {
        var regexp = /(ftp|http|https):\/\/(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(s);
    }
    emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input type = 'text' name = 'name' onChange = {this.handleChange} value = {this.state.name} className = 'name'/>
                <h3>Email:
                </h3>
                <input type = 'text' name = 'email' onChange = {this.handleChange} value = {this.state.email} className = 'email'/>
                <h3>Phone:
                </h3>
                <input type = 'text' name = 'phone' onChange = {this.handleChange} value = {this.state.phone} className = 'phone'/>
                <h3>Blog URL:
                </h3>
                <input type = 'text' name = 'blog' onChange = {this.handleChange} value = {this.state.blog} className = 'blog'/>
                <div className="small-6 small-centered text-center columns">
                  <a href="#" 
                        className="button success expand round text-center"
                        onClick = {() => this.checkFields()}>
                        Verify
                    </a>         
                </div>
            </form>
        </div>);
    }
}

export default Form;
