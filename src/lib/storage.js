export default {
  get: item => localStorage.getItem(item),
  set: (item, value) => localStorage.setItem(item, value),
  has: item => localStorage.hasOwnProperty(item),
  remove: item => localStorage.removeItem(item),
}