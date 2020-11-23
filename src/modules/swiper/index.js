import $ from 'jquery';
import { getTarget } from '../../utils/tools';
export default class Swiper {
    constructor (options) {
        this.autoplay = options.autoPlay;
        this.duration = options.duration;
        

        this.$swiper = $('.J_swiper');
        this.$swiperList = this.$swiper.find('.swiper-list');
        this.$swiperItems = this.$swiperList.children('.swiper-item');
        this.$indicator = this.$swiper.find('.indicator');
        this.$indicatorItems = this.$indicator.find('.indicator-item');

        this.curIdx = 0;
    };
    

    init () {
        this.autoplay && this.autoPlay();
        this.bindEvent();
    }

    autoPlay () {
        this.timer = setInterval(this.run.bind(this),this.duration);
    }

    bindEvent () {
        this.$swiper.on('mouseover',this.mouseInOut.bind(this));
        this.$swiper.on('mouseout',this.mouseInOut.bind(this));
        this.$indicator.on('mouseover','.indicator-item',this.indicatorMouse.bind(this));
    }

    mouseInOut (ev) {
        const e = ev || window.Event,
              eventType = e.type;
        switch (eventType) {
            case 'mouseover':
                clearInterval(this.timer);
                break;
            case 'mouseout':
                this.autoplay && this.autoPlay();
                break;
            default:
                break;
        }
       
        
    }
    
    setIndicator (index) {
        this.$indicatorItems.eq(index).addClass('indicatorFocus')
                                       .siblings('.indicator-item').removeClass('indicatorFocus');
    }

    indicatorMouse(ev) {    
        const tar = getTarget(ev);
        this.curIdx = $(tar).index();
        this.setSlider(this.curIdx,"",false);

    }

    slideAction (dir) {
        let t = null;
        switch (dir) {
            case 'next':
                if(this.curIdx === this.$swiperItems.length - 1){
                    this.curIdx = 1; 
                    this.setSlider(this.curIdx,dir,true);
                    t = setTimeout(() => {
                        this.setSlider(this.curIdx,dir,false);
                        clearTimeout(t);
                    },100);
                }else{
                    this.curIdx++;
                    this.setSlider(this.curIdx,dir,false);
                }
                break;
                
            case "prev":
                if(this.curIdx === 0){
                    this.curIdx = this.$swiperItems.length - 2;
                    this.setSlider(this.curIdx,dir,true);
                    t = setTimeout(() => {
                        this.setSlider(this.curIdx,dir,false);
                        clearTimeout(t);
                    },100)
                }else{
                    this.curIdx--;
                    this.setSlider(this.curIdx,dir,false);
                }
                break;
            default:
                break;

        }

    }

    run () {
        this.slideAction("next");
    }
    //下标，方向，清除translate3D
    setSlider (index,dir,isInitial) {
        var x = isInitial ? (dir === 'next' ? 0 : (this.$swiperItems.length - 1) * -1200) : -1200 * index;
        this.$swiperList.css({
            transform:`translate3d(${x}px,0px,0px)`,
            transitionDuration:`${isInitial ? "initial" : "0.5s"}`
        });
        
        this.setIndicator((index === this.$swiperItems.length - 1 || index === 0 ) ? 0 : index);
    }
}