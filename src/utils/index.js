const Utils = {
  setUserToken(key, value) {
      return sessionStorage.setItem(key, value);
  },
  getUserToken(key) {
      return sessionStorage.getItem(key);
  },
  destroyUserToken(key) {
      return sessionStorage.removeItem(key);
  },
};

export const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export default Utils;