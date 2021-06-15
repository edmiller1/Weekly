export const randomColor = () => {
  const colors = [
    "#C2DEE5",
    "#F2F9AD",
    "#9ED2C0",
    "#DCC0EC",
    "#FF9990",
    "#F29877",
    "#D97904",
    "#48A1D9",
    "#AD6CD9",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
