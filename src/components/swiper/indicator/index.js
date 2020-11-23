import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../../utils/tools';

export default () => {
    return {
        name:'indicator',
        tpl (swipers) {
            var list = '';
            swipers.forEach( (el,index) => {
                list += tplReplace(tpl,{
                    indicatorItemStyle:!index ? 'indicator-item indicatorFocus' : 'indicator-item'
                })
            });

            return list;
        }
    }
}