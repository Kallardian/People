/*
Recebe uma String e colocar a primeira letra dela maiscula
*/

const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter;
