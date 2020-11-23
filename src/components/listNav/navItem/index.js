import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../../utils/tools';
 
export default (data,queryField) => {
    return {
        name:'listNavItem',
        tpl () {
            var list = '';

            list += tplReplace(tpl,{
                className:queryField === 'all' ? 'course-item-lk current' : 'course-item-lk',
                fieldId:'all',
                fieldName: '全部'
            });

            data.forEach((el) => {
                list += tplReplace(tpl,{
                    className:queryField == el.field ? 'course-item-lk current' : 'course-item-lk',
                    fieldId:el.field,
                    fieldName: el.field_name
                })
            });

            return list;
        }
    }
}