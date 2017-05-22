module.exports = function(){
  function countAllFromTown(townRegNum){
  var splitedRegNum = townRegNum.split(',');
  var incrementRegNum = 0;
   for(var x = 0; x < splitedRegNum.length; x++){
     var aSingleRegNum = splitedRegNum[x].trim();
     if(aSingleRegNum.startsWith('CA')){
       incrementRegNum++;
   }
 }
 return incrementRegNum;
}
 countAllFromTown('CA, CY, CA');
}
