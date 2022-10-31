// add zero to digits
function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export const getDate = () => {
  const date = new Date();
  return [padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate()), date.getFullYear()].join(
    '/'
  );
};
