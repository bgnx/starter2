import { Frame } from "../components.js";
import { component, actualizeDOM, AppState } from "../AppState.js";
import { AuthPage } from "./pages/AuthPage.js";
import { DashboardPage } from "./pages/DashboardPage.js";

export const App = component(() => {
  return Frame({
    width: AppState.windowWidth, height: AppState.windowHeight,
    children: [
      AppState.route === `/auth` && AuthPage(),
      AppState.route.indexOf(`/dashboard`) === 0 && DashboardPage(),
    ]
  });
});

actualizeDOM();