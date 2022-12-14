import React from "react";

class PersonalInfo extends React.Component {

    constructor() {

        super();

        this.state = {

            fname: 'John',
            lname: 'Doe',
            email: 'jdoe@gmail.com',
            phone: '111-222-3333',
            mode: 'preview'
        };

        this.onChangeMode = this.onChangeMode.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);

        this.fnameRef = React.createRef();
        this.lnameRef = React.createRef();
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
    }

    onChangeMode() {

        let btn = document.querySelector('.personal_btn');
        let new_mode;
        if(this.state.mode === 'preview') {

            new_mode = 'edit';
            btn.innerHTML = 'Submit';
        }
        else {

            new_mode = 'preview';
            btn.innerHTML = 'Edit';
        }

        this.setState({

            ...this.state,
            mode: new_mode
        });
    }

    onButtonPress() {

        if(this.state.mode === 'edit') {

            let fname = this.fnameRef.current.value;
            let lname = this.lnameRef.current.value;
            let email = this.emailRef.current.value;
            let phone = this.phoneRef.current.value;

            this.setState({

                fname: fname,
                lname: lname,
                email: email,
                phone: phone
            },() => {
    
                this.onChangeMode();
            });
        }
        else {

            this.onChangeMode();
        }
        console.log(this.state);
    }

    render() {

        return (

            <>
                <div className = 'fname_field'>
                    {this.state.mode === 'preview' && <p>{this.state.fname}</p>}
                    {this.state.mode === 'edit' && <input type = "text" ref = {this.fnameRef} defaultValue = {this.state.fname}></input>}
                </div>
                <div className = 'lname_field'>
                    {this.state.mode === 'preview' && <p>{this.state.lname}</p>}
                    {this.state.mode === 'edit' && <input type = "text" ref = {this.lnameRef} defaultValue = {this.state.lname}></input>}
                </div>
                <div className = 'email_field'>
                    {this.state.mode === 'preview' && <p>{this.state.email}</p>}
                    {this.state.mode === 'edit' && <input type = "text" ref = {this.emailRef} defaultValue = {this.state.email}></input>}
                </div>
                <div className = 'phone_field'>
                    {this.state.mode === 'preview' && <p>{this.state.phone}</p>}
                    {this.state.mode === 'edit' && <input type = "text" ref = {this.phoneRef} defaultValue = {this.state.phone}></input>}
                </div>
                <button className = 'personal_btn' onClick={this.onButtonPress}>Edit</button>
            </>
        );
    }
}

export default PersonalInfo;