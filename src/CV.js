import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PersonalInfo from './PersonalInfo.js';
import Experience from './Experience.js';
import Education from './Education.js';

class CV extends React.Component {

    constructor() {

        super();

        let id1 = uuidv4();
        let id2 = uuidv4();

        this.state = {

            experience_list: [<Experience key = {id1} uuid = {id1} removeExperience = {this.removeExperience.bind(this)}/>],
            education_list: [<Education key = {id2} uuid = {id2} removeEducation = {this.removeEducation.bind(this)}/>]
        };

        this.onAddComponent = this.onAddComponent.bind(this);
    }

    removeExperience(id) {

        let arr = [];

        this.state.experience_list.forEach(comp => {

            arr.push(comp.props.uuid);
        });
        console.log(arr);

        this.setState({

            experience_list: this.state.experience_list.filter(component => component.props.uuid !== id)
        })
    }

    removeEducation(id) {

        this.setState({

            education_list: this.state.education_list.filter(component => component.props.uuid !== id)
        })
    }

    onAddComponent(type) {

        let id = uuidv4();

        if(type === 'exp') {

            this.setState({

                experience_list: [...this.state.experience_list, <Experience key = {id} uuid = {id} removeExperience = {this.removeExperience.bind(this)}/>]
            });
        }
        else {

            this.setState({

                education_list: [...this.state.education_list, <Education key = {id} uuid = {id} removeEducation = {this.removeEducation.bind(this)}/>]
            });
        }
    }

    render() {

        return (
            
            <>
                <div className = 'topbar'>
                    <p>CV Application</p>
                </div>
                <div className = 'CV'>
                    <div className = 'personal_info'>
                        <PersonalInfo />
                    </div>
                    <div className = 'experience_info'>
                        {this.state.experience_list}
                    </div>
                    <button className = 'add_experience' onClick = {() => {this.onAddComponent('exp')}}>Add Experience</button>
                    <div className = 'education_info'>
                        {this.state.education_list}
                    </div>
                    <button className = 'add_education' onClick = {() => {this.onAddComponent('edu')}}>Add Education</button>
                </div>
            </>
        );
    }
}

export default CV;