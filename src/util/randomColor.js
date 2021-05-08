export const randomColor = () => {
  const colors = ["#C2DEE5", "#F2F9AD", "#9ED2C0", "#DCC0EC", "#FF9990"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
