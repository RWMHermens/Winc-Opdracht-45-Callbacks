const huiswerkMaken = (vak, callback) => {
  setTimeout(klaarMetHuiswerk, 3000);
  console.log(`Oké, oké, ik ga nu mijn ${vak} huiswerk maken!`);
  //   callback();
};

const klaarMetHuiswerk = () => {
  console.log("Kijk pap en mam, ik ben klaar met mijn huiswerk.");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk);
