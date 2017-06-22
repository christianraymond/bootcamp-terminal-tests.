module.exports = function(){
  function countAllPaarl(paarRedNum){
    var splitedRedNum = paarRedNum.split(',');
    var allPaarRegNum = 0;
    for(var x = 0; x < splitedRedNum.length; x++){
      aPaarlRegNum = splitedRedNum[x].trim();
      if(aPaarlRegNum.includes('CP')){
        allPaarRegNum++
      }
    }
    return allPaarRegNum;
  }
  countAllPaarl('CP, CA, CY')
}
