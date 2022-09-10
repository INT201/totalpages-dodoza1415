const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if (arrayItems == null || arrayItems == undefined){
    return undefined
  }
  else if (rowsPerPage == null || rowsPerPage == undefined || rowsPerPage == 0){
    return 1
  }else{
    return Math.ceil((arrayItems.length / rowsPerPage))
  }
}
let array = [1,2,3,4,5,6,7,8,9,10]
let array2 = [1,2,3,4,5]
let arrayItems 
let rowsPerPage = 20
console.log(totalPages(arrayItems, rowsPerPage))
module.exports = totalPages
