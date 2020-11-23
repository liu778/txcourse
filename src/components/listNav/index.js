import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../utils/tools';
import nav from './navItem';

export default (fieldData,queryField) => {
    const navComponent = nav(fieldData,queryField);
    return {
        name:'listNav',
        tpl () {
            return tplReplace(tpl,{
                list:navComponent.tpl()
            })
        }
    }
}
