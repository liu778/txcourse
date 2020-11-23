import $ from 'jquery';
import '../scss/common.css';

//components
import header from '../components/header';
import footer from '../components/footer';
import swiper from '../components/swiper';
import indexTitle from '../components/indexTitle';
import courseRecom from '../components/recom';
import courseList from '../components/courseList';

//models
import IndexModel from '../models/index';

//modules
import Swiper from '../modules/swiper';

//config
import { SWIPER } from '../utils/config';

//lib
import { filterCourseData } from '../lib/course';


(async ($) => {
    const $app = $('#app'),
          $container = $('<div class="container"></div>');
    
    const indexModel = new IndexModel(),
          retData = await indexModel.getData(),
          { swipers, courses, fields, recom} = retData.data[0];
    
    const headerComponent = header(fields),
          footerComponent = footer(), 
          swiperComponent = swiper(),
          indexTitleComponent = indexTitle(),
          recomComponent = courseRecom(recom),
          courseListComponent = courseList();

    
    function init () {
        render();
        loadModules();
        
    };

    function render () {
        $container.append(headerComponent.tpl());
        $container.append(swiperComponent.tpl(swipers));
        $container.append(indexTitleComponent.tpl('JS++深度前端',true));
        $container.append(recomComponent.tpl());
        $container.append(indexTitleComponent.tpl('不止于就业的技术',true));
        $container.append(courseListComponent.tpl(filterCourseData(courses,'0',5)));
        $container.append(indexTitleComponent.tpl('JS++精品小课',true));
        $container.append(courseListComponent.tpl(filterCourseData(courses,'1',5)));
        $container.append(indexTitleComponent.tpl('JS++ 系统学习课',true));
        $container.append(courseListComponent.tpl(filterCourseData(courses,'2',5)));
        $container.append(footerComponent.tpl());
        $app.append($container);
    };


    function loadModules () {
        new Swiper(SWIPER).init();
    }

    init();
})($);


