import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../utils/tools';
import list from './list';
export default () => {
    const listComponent = list();
    return {
        name:'courseLIst',
        tpl (courseData) {
            return tplReplace(tpl,{
                list:listComponent.tpl(courseData)
            })
        }
    }
}