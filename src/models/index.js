import { API } from '../utils/config';
import $ from 'jquery';

export default class indexModel {
    getCourseData (field) {
       return $.ajax({
            url:API.getCourseData + field,
            type:'GET'
        })
    };

    getCourseFieldData () {
        return $.ajax({
            url:API.getCourseFieldData,
            type:'GET'
        })
    };

    getData () {
        return $.ajax({
            url:API.getData,
            type:'GET'
        })
    }
}