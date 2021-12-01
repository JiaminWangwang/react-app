const CHANGE_TEXT = 'CHANGE_TEXT';


function changeText (field) {
    return {
        type: CHANGE_TEXT,
        field
    }
}

export {
    changeText
}