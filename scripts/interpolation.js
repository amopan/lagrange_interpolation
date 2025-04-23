class Entry {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Interpolation {
    //https://uk.wikipedia.org/wiki/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%87%D0%BB%D0%B5%D0%BD_%D0%9B%D0%B0%D0%B3%D1%80%D0%B0%D0%BD%D0%B6%D0%B0
    enties = [];
    #polinom = null;
    constructor(entries){
        this.entries = entries;
    }
    getValue = function (x) {
        let y = 0;
        const n = this.entries.length;
        
        for(let k = 0; k<n;k++){
            const xk = this.entries[k].x;
            const yk = this.entries[k].y;
            //чисельник як значення
            let numerator =1;
            //знаменик як значення
            let denominator = 1;
            for(let i = 0; i<n;i++){
                if (i===k) continue;
                const xi = this.entries[i].x;
                numerator = numerator*(x-xi);
                denominator= denominator*(xk-xi);
            }  
            y =y+ yk*numerator/denominator;
        }
        return y; 
    }
}