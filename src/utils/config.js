const BASE_URL = 'http://localhost:3000';

const API = {
    getCourseData : BASE_URL + '/users/courseData?field=',
    getCourseFieldData : BASE_URL + '/users/courseFieldData',
    getData : BASE_URL + '/users/findData'
}

const SWIPER = {
    autoPlay:true,
    duration:3000
}

export {
    API,
    SWIPER
}