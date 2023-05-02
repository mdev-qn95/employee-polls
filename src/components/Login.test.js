import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import { store } from "../store";
import { getDataInit } from "../store/shared/init";

describe("Login", () => {
  it("will render the component", () => {
    const component = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("will clear the value of the inputs after pressing the submit button", async () => {
    await store.dispatch(getDataInit());

    const wrapper = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const loginPage = wrapper.getByTestId("login-page");
    const userIdEle = wrapper.getByTestId("user-id");
    const passwordEle = wrapper.getByTestId("password");
    const submitEle = wrapper.getByTestId("submit");

    expect(loginPage).toBeInTheDocument();
    expect(userIdEle).toBeInTheDocument();
    expect(passwordEle).toBeInTheDocument();
    expect(submitEle).toBeInTheDocument();

    fireEvent.change(userIdEle, { target: { value: "johndoe" } });
    fireEvent.change(passwordEle, {
      target: { value: "000" },
    });

    expect(userIdEle.value).toBe("johndoe");
    expect(passwordEle.value).toBe("000");

    fireEvent.click(submitEle);

    expect(loginPage).toBeInTheDocument();
    expect(userIdEle.value).toBe("");
    expect(passwordEle.value).toBe("");
  });
});
