import $ from 'jquery';
import { getTarget } from '../../utils/tools';
import { filterCourseData } from '../../lib/course';
import list from '../../components/courseList/list';

const listComponent = list();

export default class courseTab {
    constructor (courses) {
        
        this.courses = courses;

        this.$courseTab = $('.J_courseList');
        this.$courseCardList = $('.course-card-list');
        this.htmlCache = {};
        
    }

    init () {
        this.bindEvent();
    }

    bindEvent () {
        this.$courseTab.on('click','.course-item-lk',this.onTabClick.bind(this));
    }

    onTabClick (ev) {
       const tar = getTarget(ev),
             field = $(tar).attr('data-field');
        this.changeTab($(tar));
        this.renderHtml(this.pageChange(this.courses,field));
    }

    changeTab (tar) {
        tar.addClass('current')
        .parent('.course-tab-item')
        .siblings('.course-tab-item')
        .children('.course-item-lk')
        .removeClass('current');
    }

    pageChange (data,field) {
        var data = filterCourseData(data,field);
        if(!this.htmlCache[field]){
            this.htmlCache[field] = listComponent.tpl(data);
        }
        return this.htmlCache[field];
    }

    renderHtml (data) {
        this.$courseCardList.html(data)
    }
}