import { axiosGet } from "../utils/http";

function getCourseFields () {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/v2/get_course_fields.json',
            success (data) {
                resolve(data.result);
            },
            error (err) {
                reject(err);
            }
        })
    });
}

function getCourseList () {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/v2/get_courses_all.json',
            success (data) {
                resolve(data.result);
            },
            error (err) {
                reject(err);
            }
        })
    });
}

export {
    getCourseFields,
    getCourseList
}