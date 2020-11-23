import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../../utils/tools';

export default () => {
    return {
        name:'swiper-list',
        tpl (swipers) {
            var list = '',
                firstData= swipers[0];

            swipers.forEach( el => {
                list += tplReplace(tpl,{
                    itemHref:el.id ? `https://ke.qq.com/course/${el.id}` : 'javascript:;',
                    title:el.title,
                    imgSrc:el.imgSrc 
                })
            });

            list += tplReplace(tpl,{
                itemHref:firstData.id ? `https://ke.qq.com/course/${firstData.id}` : 'javascript:;',
                title:firstData.title,
                imgSrc:firstData.imgSrc 
            });

            return list;
        }
    }
}