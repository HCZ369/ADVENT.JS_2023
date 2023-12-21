function manufacture(gifts, materials) {
    let filtrados = new Set([...materials]);
    let regalosHechos = [];
  
    if (gifts && gifts.length > 0) {
      gifts.forEach(regalo => {
        let elementosindividuales = new Set([...regalo]);
        const resultado = [...elementosindividuales].every(caracter => filtrados.has(caracter));
  
        if (resultado) {
          regalosHechos.push(regalo);
        }
  
        //console.log(regalo, resultado ? "SÍ" : "No");
      });
    } else {
      console.error('La lista de regalos es nula o vacía.');
    }
  
    return regalosHechos;
  }