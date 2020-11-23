import tpl from './index.tpl';
import './index.scss';
import list from './list';
import { tplReplace } from '../../utils/tools';

export default (recom) => {
    const listComponent = list(recom);
    return {
        name:'courseRecom',
        tpl () {
            return tplReplace(tpl,{
                list:listComponent.tpl()
            })
        }
    }
}