let generateNumbers = () => {
  return parseFloat(Math.floor(Math.random() * (4 - 0) + 0));
};

let validateNumber = (number) => {
  return number == 3 ? "X" : number;
};

let excecuteEj = () => {
  for (let i = 1; i < 15; i++) {
    document.writeln(
      "<h3>Resultado " +
        i +
        ": " +
        validateNumber(generateNumbers()) +
        "</h3><br>"
    );
  }
};
