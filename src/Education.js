import React from 'react';

class Education extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            school: '',
            degree: '',
            start_date: '',
            end_date: '',
            mode: 'edit'
        };

        this.onChangeMode = this.onChangeMode.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);

        this.schoolRef = React.createRef();
        this.degreeRef = React.createRef();
        this.sdRef = React.createRef();
        this.edRef = React.createRef();
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

            let school = this.schoolRef.current.value;
            let degree = this.degreeRef.current.value;
            let start_date = this.sdRef.current.value;
            let end_date = this.edRef.current.value;

            this.setState({

                school: school,
                degree: degree,
                start_date: start_date,
                end_date: end_date
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

        this.props.removeEducation(id);
    }

    render() {

        return (

            <div className = 'education'>
                <div className = 'school_field'>
                    {this.state.mode === 'preview' && <p>{this.state.school}</p>}
                    {this.state.mode === 'edit' && <input type = 'text' ref = {this.schoolRef} placeholder = 'Accredited Institution' defaultValue = {this.state.school}></input>}
                </div>
                <div className = 'degree_field'>
                    {this.state.mode === 'preview' && <p>{this.state.degree}</p>}
                    {this.state.mode === 'edit' && <input type = 'text'  ref = {this.degreeRef} placeholder = 'Degree obtained' defaultValue = {this.state.degree}></input>}
                </div>
                <div className = 'start_date_field'>
                    <label>Start Date</label>
                    {this.state.mode === 'preview' && <p>{this.state.start_date}</p>}
                    {this.state.mode === 'edit' && <input type = 'date' ref = {this.sdRef} defaultValue = {this.state.start_date}></input>}
                </div>
                <div className = 'end_date_field'>
                    <label>End Date</label>
                    {this.state.mode === 'preview' && <p>{this.state.end_date}</p>}
                    {this.state.mode === 'edit' && <input type = 'date' ref = {this.edRef} defaultValue = {this.state.end_date}></input>}
                </div>
                <button onClick = {() => {this.onButtonPress()}} id = {this.props.uuid}>Save</button>
                <button onClick = {() => {this.remove(this.props.uuid)}}>Remove</button>
            </div>
        );
    }
}

export default Education;