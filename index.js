var beatles = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

var arr = []
var n = 0
var i = 0
function theBeatlesPlay(musicians, instruments){
  for (i = 0; i < 4; i++){
      if (n === 4){
      console.log(arr)
      return arr
    } else {
    arr.push(musicians[n] + " plays " + instruments[n])
    n++
    }
  }
}

theBeatlesPlay(beatles, instruments)

const facts = [ "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  
var arr2 = []
function johnLennonFacts(fact){
  var clone = fact.slice(0)
      while (clone.length > -1)
       if (clone.length === 0) {
         return arr2
       } else if (clone.length < 1){
       return arr 2
       } else {
     arr2.push(clone[0] + '!!!');
     clone.shift();
  }
}

johnLennonFacts(facts)
console.log(arr2)