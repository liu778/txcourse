import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../.././../utils/tools';

export default (recom) => {
    return {
        name:'recomList',
        tpl () {
            var list = '';
            recom.forEach( el => {
                list += tplReplace(tpl,{
                    id:el.id,
                    itemTitle:el.course_title,
                    imgSrc:el.imgSrc,
                    courseInfo:el.course_info,
                    teacherImg:el.teacher_img,
                    teacherName:el.teacher_name,
                    status:el.status,
                    price:el.price,
                    bfprice:el.bfprice,
                    isShow:el.bfprice === '0' ? 'hide' : 'show' 
                })
            });
            return list;
        }
    }
}