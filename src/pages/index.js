import React, { Component } from 'react';

import CourseField from '../components/CourseField';
import CourseList from '../components/CourseList';



export default class IndexPage extends Component {
    render () {

        const { curField, changeCourseField } = this.props;

        console.log(curField);
        console.log(changeCourseField);

        return (
            <div className="page-wrapper">
                <CourseField
                    curField={curField}
                    changeCourseField={changeCourseField} 
                />
                <CourseList 
                    curField={curField}
                />
            </div>
        )
    }
}

