class DOMNodeCollection{
    constructor(htmlarr){
        this.htmlarr = htmlarr;
    }

    html(str) {
        //if it receives a str
        if(!!str){
            //loop thru the htmlarr and make the innerHTML of each of them the str
            for(let i = 0; i < this.htmlarr.length; i++){
                this.htmlarr[i].innerHTML = str;
            }
        } else {
            return this.htmlarr[0].innerHTML;
        }
    }
}

module.exports = DOMNodeCollection;