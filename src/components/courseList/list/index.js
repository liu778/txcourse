import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../../utils/tools';



export default () => {
    return {
        name:'list',
        tpl (courseData) {
            let list = '';
            courseData.forEach( el => {
                list += tplReplace(tpl,{
                    field:el.field,
                    priceStyle:el.price === '0' ? 'item-free' : 'item-price',
                    id:el.id,
                    imgSrc:el.imgSrc,
                    courseName:el.course_name,
                    price:el.price === '0' ? '免费' : "￥" + el.price,
                    status:el.status
                });
            });
            return list;
        }
    }
}
