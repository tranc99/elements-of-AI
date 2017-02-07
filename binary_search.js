function binarySearch(list, target) {
  var max = list.length - 1;
  var min = 0;

  var guess = (min + max) / 2;
  console.log('initial guess is ' + guess);
  guess = Number.parseInt(guess);
  console.log('our guess is now ' + guess);

  var currentValue = list[guess];
  console.log('currentValue is now ' + currentValue)
  console.log('but target is ' + target)
  //return 5;
  while(currentValue != target) {
    console.log("min and max are " + min + " " + max);
    console.log('searching...')
    var unmatched = currentValue >= target;
    console.log("and the mysterious guess is now " + guess);
    console.log('number at our guess is now ' + list[guess])
    switch(unmatched) {
      case (true):
        console.log('guess too big')
        max = max - 1;
        guess = ( min + max ) / 2;
        guess = Number.parseInt(guess);
        currentValue = list[guess];
        break;

      case (false):
        console.log('guess too small');
        min = min + 1;
        guess = ( min + max ) / 2;
        guess = Number.parseInt(guess);
        currentValue = list[guess];
        break;

      default:
          console.log("could we have found it?");
          return guess;
      }

    if (list[guess] === target) {
      console.log("found!")
      return guess;
    }

    if (max < min) {
      console.log("not found!");
      return -1;
    }


  }


}

exports.binarySearch = binarySearch;
