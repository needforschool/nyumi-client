const convertDate = (inputFormat: any) => {
  const pad = (s: number) => {
    return s < 10 ? "0" + s : s;
  };
  const d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
};

export default convertDate;
