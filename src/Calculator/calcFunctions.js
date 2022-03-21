function p_p10 (number,radix = 2){
    number = number.toString()

    const p_p10_c = (number) => {

        let p = radix**(number.length - 1)
        let c = 0
        for(let i = 0; i < number.length;i++){
            if('0123456789'.includes(number.charAt(i))){
                c += +number.charAt(i)*p
            }else {
                c += (+number.charCodeAt(i) - 55)*p
            }
            p = Math.floor(p/radix)
        }
        return c
    }
    const p_p10_d = (number) => {
        let ch
        let zn
        if (number.includes('(')){
            const ind = number.indexOf('(')
            const after = number.substring(ind+1,number.length - 1)
            const before = number.substring(0,ind)

            ch = p_p10_c(before+after) - p_p10_c(before)
            zn = radix**(after+before).length - radix**before.length
        }else{
            ch = p_p10_c(number)
            zn = radix**number.length
        }
        return {
            ch:ch,
            zn:zn
        }
    }
    const NOD = (n,m) => {
        while (m){
            let x = n
            n = m
            m = x%m
        }
        return n
    }
    if (number.toString().includes('.')){
        const ind = number.indexOf('.')
        const intPart = number.substring(0,ind)
        const floatPart = number.substring(ind + 1)
        let {ch, zn} = p_p10_d(floatPart)
        ch += zn * p_p10_c(intPart)
        const nod = NOD(ch,zn)
        return {
            ch:Math.floor(ch/nod),
            zn:Math.floor(zn/nod)
        }
    }else{
        return {
            ch:p_p10_c(number),
            zn:1
        }
    }
}


function p10_p(ch, zn, radix = 2) {
    const p10_pForInt = (input, radix) => {
        let num = ''
        if (input === 0) {
            return 0
        }
        while (input) {
            let x = input % radix
            if (x>=10){
                x=String.fromCharCode(x+55)
            }
            num = x + num
            input = Math.floor(input / radix)
        }
        return num
    }

    if (ch % zn === 0) {
        let int = Math.floor(ch / zn)
        return p10_pForInt(int, radix)
    }
    const int = p10_pForInt(Math.floor(ch / zn), radix)
    ch %= zn
    let d = ''
    const arr = [ch % zn]
    let index = 0
    while (ch) {
        ch *= radix
        let cif = Math.floor(ch / zn)
        ch -= cif * zn
        if (cif>=10){
            cif=String.fromCharCode(cif+55)
        }

        d += cif.toString()
        if (arr.indexOf(ch)!==-1) {
            index = arr.indexOf(ch)
            break
        }
        arr.push(ch)
    }
    console.log(d)
    if (ch) {
        return int + '.' + d.substring(0, index) + '(' + d.substring(index) + ')'
    } else {
        return int + '.' + d
    }
}

function p_p(number,from,to) {
    const {ch,zn}=p_p10(number,from)
    return p10_p(ch,zn,to)
}

export default p_p;
