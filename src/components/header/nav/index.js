import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../../utils/tools';

export default () => {
    return {
        name:'header-nav',
        tpl (fieldsData) {
            var list = '';
            list += tplReplace(tpl,{
                fieldName:'全部',
                field:'all'
            });

            fieldsData.forEach( el => {
              list += tplReplace(tpl,{
                    fieldName:el.field_name,
                    field:el.field
                });
            });
            
            return `<ul class="header-nav clearfix">${list}</ul>`;
        }
    }
}