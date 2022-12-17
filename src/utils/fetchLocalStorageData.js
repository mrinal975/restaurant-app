export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartInfo") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartInfo"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
