function tplReplace (tpl,obj) {
    return tpl().replace(/{{(.*?)}}/g,(node,key) => {
        return obj[key];
    })
}

function getUrlQueryValue (key) {
    const reg = new RegExp('(^|&)'+key+'=([^&]*)(&|$)','i'),
          res = window.location.search.substring(1).match(reg);
    
    return res !== null ? decodeURIComponent(res[2]) : 'null';
};

function getTarget (ev) {
    const e = ev || window.Event;
    return e.target || e.srcElement;
    
}

/* function getUrlQueryValue2 (key) {
    const start = '';
          var end;
          var res = window.location.search;
    start = res.indexOf(key);
    if(start !== -1){
        end = res.indexOf('&',start);
        end = end === -1 ? res.length - 1 : end; 
        return res.substring(start,end);
    }
    return null;
    
    
}; */

export {
    tplReplace,
    getUrlQueryValue,
    getTarget
    
}