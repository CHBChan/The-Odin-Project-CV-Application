import React from 'react';

class Experience extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            title: '',
            comp: '',
            start_date: '',
            end_date: '',
            desc: '',
            mode: 'edit'
        };

        this.onChangeMode = this.onChangeMode.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);

        this.titleRef = React.createRef();
        this.compRef = React.createRef();
        this.sdRef = React.createRef();
        this.edRef = React.createRef();
        this.descRef = React.createRef();
    }

    onChangeMode() {

        let btn = document.getElementById(`${this.props.uuid}`);
        let new_mode;
        if(this.state.mode === 'preview') {

            new_mode = 'edit';
            btn.innerHTML = 'Save';
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

            let title = this.titleRef.current.value;
            let comp = this.compRef.current.value;
            let start_date = this.sdRef.current.value;
            let end_date = this.edRef.current.value;
            let desc = this.descRef.current.value;

            this.setState({

                title: title,
                comp: comp,
                start_date: start_date,
                end_date: end_date,
                desc: desc
            },() => {
    
                this.onChangeMode();
            });
        }
        else {

            this.onChangeMode();
        }
        console.log(this.state);
    }

    getDate() {

        let date = new Date();
        let str = date.toISOString().substring(0, 10);

        return str;
    }

    remove(id) {

        this.props.removeExperience(id);
    }

    render() {

        return (

            <div className = 'experience'>
                <div className = 'title_field'>
                    {this.state.mode === 'preview' && <p>{this.state.title}</p>}
                    {this.state.mode === 'edit' && <input type = 'text' ref = {this.titleRef} placeholder = 'Job title' defaultValue = {this.state.title}></input>}
                </div>
                <div className = 'comp_field'>
                    {this.state.mode === 'preview' && <p>{this.state.comp}</p>}
                    {this.state.mode === 'edit' && <input type = 'text' ref = {this.compRef} placeholder = 'Employer' defaultValue = {this.state.comp}></input>}
                </div>
                <div className = 'sd_field'>
                    <label>Start Date</label>
                    {this.state.mode === 'preview' && <p>{this.state.start_date}</p>}
                    {this.state.mode === 'edit' && <input type = 'date' ref = {this.sdRef} defaultValue = {this.state.start_date}></input>}
                </div>
                <div className = 'ed_field'>
                    <label>End Date</label>
                    {this.state.mode === 'preview' && <p>{this.state.end_date}</p>}
                    {this.state.mode === 'edit' && <input type = 'date' ref = {this.edRef} defaultValue = {this.state.end_date}></input>}
                </div>
                <div className = 'desc_field'>
                    {this.state.mode === 'preview' && <p>{this.state.desc}</p>}
                    {this.state.mode === 'edit' && <input type = 'text' ref = {this.descRef} placeholder = 'General responsibilities' defaultValue = {this.state.desc}></input>}
                </div>
                <button onClick = {() => {this.onButtonPress()}} id = {this.props.uuid}>Save</button>
                <button onClick = {() => {this.remove(this.props.uuid)}}>Remove</button>
            </div>
        );
    }
}

export default Experience;