/**
 *
 * @param {string} character
 * @param {string} str
 */
function countCharacter(character,str){
    return str.split('')
        .reduce((count,el)=>{
            console.log(el)
            if (el === character){
                return ++count
            }else{return count}
        },0)
}
export default countCharacter;