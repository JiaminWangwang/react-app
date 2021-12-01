import initialState from '../states/courseTabList';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COURSE_FIELD':
            return {
                ...state,
                curField: action.field
            }
        default:
            return state;
    }
}