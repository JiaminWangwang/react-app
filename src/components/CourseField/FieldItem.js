import React from 'react';

import './index.css';

export default class FieldItem extends React.Component {
    render () {
        const { item, curField, changeCourseField } = this.props;
        return (
            <span 
                className={["field-item", item.field === curField ? 'current-field' : ''].join(' ')}
                onClick={() => changeCourseField(item.field)}
            >
                { item.field_name }
            </span>
        )
    }
}