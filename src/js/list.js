import $ from 'jquery';
import '../scss/common.css';

//components
import header from '../components/header';
import footer from '../components/footer';
import indexTitle from '../components/indexTitle';
import courseList from '../components/courseList';
import listNav from '../components/listNav';
import noDataTip from '../components/noDataTip';

//models
import IndexModel from '../models/index';

//modules
import courseTab from '../modules/courseTab';
//config

//lib
import { filterCourseData } from '../lib/course';
import { getUrlQueryValue } from '../utils/tools';

(async ($) => {
    const $app = $('#app'),
          $container = $('<div class="container"></div>');

    const queryField = getUrlQueryValue('field') || 'all';
    
    const indexModel = new IndexModel(),
          retData = await indexModel.getData(),
          { swipers, courses, fields, recom} = retData.data[0];
    
    const headerComponent = header(fields),
          footerComponent = footer(),
          listNavComponent = listNav(fields,queryField),
          courseListComponent = courseList(), 
          indexTitleComponent = indexTitle(),
          noDataTipComponent = noDataTip();
          

    
    function init () {
        render();
        loadModules(courses);
    };

    function render () {
        $container.append(headerComponent.tpl());
        $container.append(indexTitleComponent.tpl('全部课程'));
        $container.append(listNavComponent.tpl());
        $container.append(courses.length > 0 ? (filterCourseData(courses,queryField) === null ?
                                                noDataTipComponent.tpl() :
                                                courseListComponent.tpl(filterCourseData(courses,queryField))) : noDataTipComponent.tpl());
        $container.append(footerComponent.tpl());
        $app.append($container);
    };

    function loadModules (courses) {
      new courseTab(courses).init();
    }



    init();
})($);


