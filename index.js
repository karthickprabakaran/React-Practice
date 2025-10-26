



const square = function(radius) {
  return radius * radius;
}

const radius = [3, 1, 2, 4];


const calculate = function(radius, logic) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;

}



console.log(calculate(radius, square));
