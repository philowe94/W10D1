let DOMNodeCollection = require("./dom_node_collection");

let $l = function(arg) {
    //if arg is an htmlelement,
    //put in array and return a DNC instance
    if(arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg])
    } else {
        let nodelist = document.querySelectorAll(arg);
        let arr = [];
        for(let i = 0; i < nodelist.length; i++) {
            arr[i] = nodelist[i];
        }
        return new DOMNodeCollection(arr);
    }
}

window.$l = $l;