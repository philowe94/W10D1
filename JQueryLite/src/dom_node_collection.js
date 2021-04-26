class DOMNodeCollection{
    constructor(htmlarr){
        this.htmlarr = htmlarr;
    }

    html(str) {
        //if it receives a str
        if(str == "") {
            for(let i = 0; i < this.htmlarr.length; i++){
                this.htmlarr[i].innerHTML = "";
            }
        }
        if(!!str){
            //loop thru the htmlarr and make the innerHTML of each of them the str
            for(let i = 0; i < this.htmlarr.length; i++){
                this.htmlarr[i].innerHTML = str;
            }
        } else {
            return this.htmlarr[0].innerHTML;
        }
    }

    empty() {
        this.html("");
    }

    append(el){
        if(el instanceof DOMNodeCollection){
            let dnchtmls = el.htmlarr;
            for(let i = 0; i < dnchtmls.length; i++) {
                for(let y = 0; y < this.htmlarr.length; y++){
                    this.htmlarr[y].innerHTML += dnchtmls[i].outerHTML;
                }
            }
        } else if (el instanceof HTMLElement) {
            for(let i = 0; y < this.htmlarr.length; i++){
                this.htmlarr[i].innerHTML += el.outerHTML;
            }
        } else if (typeof el === 'string' || el instanceof String) {
            for(let i = 0; i < this.htmlarr.length; i++){
                
                this.htmlarr[i].innerHTML += el;
            }
        }
    }

    attr(str, value) {
        if(!value){
            return this.htmlarr[0].getAttribute(str);
        } else {
            for(let i = 0; i < this.htmlarr.length; i++){
                this.htmlarr[i].setAttribute(str, value);
            }
        }
    }
}

module.exports = DOMNodeCollection;