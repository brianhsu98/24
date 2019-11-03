OPERATORS = ["*", "/", "+", "-"];

function solve(num1, num2, num3, num4) {
  var possible_equations = [];

  for (operation_1 of OPERATORS) {
    for (operation_2 of OPERATORS) {
      for (operation_3 of OPERATORS) {
        possible_equations.push(
          num1 + operation_1 + num2 + operation_2 + num3 + operation_3 + num4
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
