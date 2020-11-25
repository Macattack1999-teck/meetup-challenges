///// CODE EXPIREMENT MEETUP CHALLENGE /////

///// CHALLENGE LINK /////
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris //

///// CHALLENGE /////
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

///// MY SOLUTION /////
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  const answer = []
  for (let i = 0; i < arr.length; i++) {
    let divisionTotal = Math.pow(arr[i].avgAlt + earthRadius, 3) / GM
    let squareRoot = Math.sqrt(divisionTotal)
    let orbitalPeriod = Math.round(squareRoot * (2 * Math.PI))
    answer.push({
      name: arr[i].name,
      orbitalPeriod
    })
  }
  return answer;
}
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])