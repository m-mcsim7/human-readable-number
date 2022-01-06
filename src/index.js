module.exports = function toReadable(number){
   arr_numbers = []
   arr_numbers[0] = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
   arr_numbers[1] = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
   arr_numbers[2] = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
   let str = ''
   if (number == 0) {
      str = 'zero'
      return str.trim()
   }
   if (number < 20){
      str = (arr_numbers[0][number])
      return str.trim()
   } 
   if ((number + '').length == 3){
      if ((number + '').slice(1, 3) > 19.5){
            str = arr_numbers[2][((number + '').slice(0, 1))] + ' ' + arr_numbers[1][((number + '').slice(1, 2))] +' ' + arr_numbers[0][((number + '').slice(2, 3))]
            return str.trim()
         }
         else {
            str = arr_numbers[2][((number + '').slice(0, 1))] + ' ' + arr_numbers[0][+(number + '').slice(1, 3)]
            return str.trim()
         }
   }
   else{
      str = arr_numbers[1][((number + '').slice(0, 1))] + ' ' + arr_numbers[0][((number + '').slice(1, 2))]
      return str.trim()
   }
   return str.trim()
}



