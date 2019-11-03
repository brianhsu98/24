OPERATORS = ["*", "/", "+", "-"];

function addParens(num1, num2, num3, num4, op1, op2, op3) {
  num_array = [num1, num2, num3, num4];
  paren_arrays = [];
  for (i = 0; i < num_array.length - 1; i += 1) {
    for (j = i + 1; j < num_array.length; j += 1) {
      var new_array = num_array.slice();
      new_array[i] = "(" + num_array[i];
      new_array[j] = num_array[j] + ")";
      paren_arrays.push(new_array);
    }
  }
  equations = [];
  for (paren_array of paren_arrays) {
    equations.push(
      paren_array[0] +
        op1 +
        paren_array[1] +
        op2 +
        paren_array[2] +
        op3 +
        paren_array[3]
    );
  }

  return equations;
}

function solve(num1, num2, num3, num4) {
  var possible_equations = [];

  for (operation_1 of OPERATORS) {
    for (operation_2 of OPERATORS) {
      for (operation_3 of OPERATORS) {
        possible_equations.push(
          ...addParens(
            num1,
            num2,
            num3,
            num4,
            operation_1,
            operation_2,
            operation_3
          )
        );
      }
    }
  }

  for (possible_equation of possible_equations) {
    var result = eval(possible_equation);
    if (result === 24) {
      return possible_equation;
    }
  }

  return null;
}
