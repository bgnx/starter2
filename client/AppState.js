import { App } from "./index.js";

export const AppState = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  route: `/auth`,
};
window.onresize = () => {
  AppState.windowWidth = window.innerWidth;
  AppState.windowHeight = window.innerHeight;
  actualizeDOM();
};

export const actualizeDOM = (() => {
  let TimeoutId = null;
  return () => {
    if (TimeoutId === null) {
      TimeoutId = setTimeout(() => {
        TimeoutId = null;
        ReactDOM.render(App(), document.body.firstElementChild)
      })
    }
  }
})();
export const component = (fn) => (props) => React.createElement(fn, props);
export const eventHandler = (fn) => (...args) => (fn(...args), actualizeDOM());