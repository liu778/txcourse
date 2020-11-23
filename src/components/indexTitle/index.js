import tpl from './index.tpl';
import './index.scss';
import { tplReplace} from '../../utils/tools';
import more from './tpl/index';

export default () => {
    const moreTpl = more();
    return {
        name:'indexTitle',
        tpl (title,showMore) {
            return tplReplace(tpl,{
                titleText:title,
                more:showMore ? moreTpl.tpl() : ''
            })
        }
    }
}