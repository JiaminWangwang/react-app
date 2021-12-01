import { connect } from 'react-redux';

import { changeCourseField } from '../store/actions/courseTabList';
import { changeText } from '../store/actions/text';

import IndexPage from './index';


// store state
// reducer method
// 获取state
function mapStateToProps(state) {
    return {
        curField: state.courseTabList.curField
    }
}
    
// 改变state
function mapDispatchToProps(dispatch) {
    return {
        changeCourseField: (field) => dispatch(changeCourseField(field)),
        changeText: (field) => dispatch(changeText(field))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);