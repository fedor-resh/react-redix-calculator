
module.exports.p_p10 = function p_p10 (number){
    const p_p10_c = (number) => {
        let p = 2**(number.length - 1)
        let c = 0
        for(let i = 0; i < number.length;i++){
            if('1234567890'.includes(number.charAt(i))){
                c += +number.charAt(i)*p
            }else {
                c += number.charCodeAt(i)*p
            }
            p = Math.floor(p/2)
        }
        return c
    }
    const p_p10_d = (number) => {
        if (number.includes('(')){
            const ind = number.indexOf('(')
            const after = number.substring(ind+1,number.length - 1)
            const before = number.substring(0,ind)

            const ch = p_p10_c(after+before) - p_p10_c(after)
            const zn = 2**(after+before).length - 2**after.length
        }else{
            const ch = p_p10_c(number)
            const zn = 2**number.length
        }
        return {ch, zn}
    }
    const NOD = (n,m) => {
        while (m){
            let x = n
            n = m
            m = x%m
        }
        return n
    }
    if (number.includes('.')){
        const ind = number.indexOf('.')
        const intPart = number.substring(0,ind)
        const floatPart = number.substring(ind + 1)
        let {ch, zn} = p_p10_d(floatPart)
        ch += zn * p_p10_c(intPart)
        const nod = NOD(ch,zn)
        ch = Math.floor(ch/nod)
        zn = Math.floor(zn/nod)
        return {ch, zn}
    }else{
        return p_p10_c(number)
    }
}
let assert = require('assert');

describe("p_p10", function() {
    it("возводит число в степень n", function() {
        assert.equal(p_p10(11), 3);
    });
    it('...',()=>{
        assert.equal(p_p10(100), 4);
    })
});


function p10_p(ch, zn, executiveSystem = 2) {
    const p10_pForInt = (input, executiveSystem) => {
        let num = ''
        if (input === 0) {
            return 0
        }
        while (input) {
            let x
            switch (input % executiveSystem) {
                case 10:
                    x = 'A'
                    break
                case 11:
                    x = 'B'
                    break
                case 12:
                    x = 'C'
                    break
                case 13:
                    x = 'D'
                    break
                case 14:
                    x = 'E'
                    break
                case 15:
                    x = 'F'
                    break
                default:
                    x = input % executiveSystem
            }
            num = (x).toString() + num
            input = Math.floor(input / executiveSystem)
        }
        return num
    }

    if (ch % zn === 0) {
        let int = Math.floor(ch / zn)
        return p10_pForInt(int, executiveSystem)
    }
    const int = p10_pForInt(Math.floor(ch / zn), executiveSystem)
    ch %= zn
    let d = ''
    const arr = [ch % zn]
    let ind = 0
    while (ch) {
        ch *= executiveSystem
        let cif = Math.floor(ch / zn)
        ch -= cif * zn
        d += cif.toString()
        if (arr.indexOf(ch)!==-1) {
            ind = arr.indexOf(ch)
            // debugger
            break
        }
        arr.push(ch)
    }

    if (ch) {
        return int + '.' + d.substring(0, ind) + '(' + d.substring(ind) + ')'
    } else {
        return int + '.' + d
    }
}

// export {p10_p, p_p10};
