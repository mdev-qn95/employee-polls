import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Menu";
import { store } from "../store";
import { setAuthedUser } from "../store/actions/authedAction";

describe("Menu", () => {
  it("will render the component", () => {
    store.dispatch(setAuthedUser({ id: "johndoe", password: "johndoe" }));

    const component = render(
      <Provider store={store}>
        <Router>
          <Menu />
        </Router>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("will display the name of the logged in user", () => {
    store.dispatch(setAuthedUser({ id: "johndoe", password: "johndoe" }));

    const component = render(
      <Provider store={store}>
        <Router>
          <Menu />
        </Router>
      </Provider>
    );

    const userId = component.getByTestId("user-id");
    expect(userId.textContent).toBe("johndoe");
  });
});
