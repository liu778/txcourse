import tpl from './index.tpl';
import './index.scss';
import list from './list';
import indicator from './indicator';
import { tplReplace } from '../../utils/tools';

export default () => {
    const listComponent = list(),
          indicatorComponent = indicator();

    return {
        name:'swiper',
        tpl (swipers) {
            return tplReplace(tpl,{
                itemLen:(swipers.length + 1) * 1200,
                listItem:listComponent.tpl(swipers),
                indicatorItem:indicatorComponent.tpl(swipers)
            })
        }
    }
}