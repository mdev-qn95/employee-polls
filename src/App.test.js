import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./store";
import { setAuthedUser } from "./store/actions/authedAction";

describe("App", () => {
  it("Render the component", () => {
    const component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("Show Login page when not logged in", () => {
    const component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const loginPage = component.getByTestId("login-page");
    expect(loginPage).toBeInTheDocument();
  });

  it("Show Home page when logged in", () => {
    store.dispatch(setAuthedUser({ id: "johndoe", password: "johndoe" }));

    const component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const homePage = component.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
});
