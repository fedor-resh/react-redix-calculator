
function p10_p (ch,zn,executiveSystem = 2){
    const p10_pForInt = (input,executiveSystem)=>{
        let num = ''
        if(input===0){
            return 0
        }
        while(input){
            let x
            switch (input%executiveSystem){
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
                    x = input%executiveSystem
            }
            num=(x).toString() + num
            input=Math.floor(input/executiveSystem)
        }
        return num
    }

    if(ch % zn == 0){
        let int = Math.floor(ch/zn)
        return p10_pForInt(int,executiveSystem)
    }
    const int = p10_pForInt(Math.floor(ch/zn),executiveSystem)
    ch%=zn
    let d = ''
    const arr = [ch%zn]
    let ind = 0
    while(ch){
        ch*=executiveSystem
        let cif = Math.floor(ch/zn)
        ch-=cif*zn
        d+=cif.toString()
        if(ch in arr){
            ind = arr.indexOf(ch)
            break
        }
    }
    if(ch){
        return int+'.'+d.substring(0,ind)+'('+d.substring(ind,-1)+')'
    }else{
        return int + '.' +d
    }
}

export default p10_p;