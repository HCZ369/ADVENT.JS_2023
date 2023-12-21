function findFirstRepeated(gifts) {
  let menorValor = -1;
  let posMenorValor = Infinity;

  if (gifts.length < 1 || gifts[0] === null) {
    menorValor = -1;
  } else {
    for (let i = 0; i < gifts.length; i++) {
      for (let j = i + 1; j < gifts.length; j++) {
        if (gifts[i] === gifts[j]) {
          if (j < posMenorValor) {
            menorValor = gifts[j];
            posMenorValor = j;
          }
        }
      }
    }
  }

  return menorValor;
}
