import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import New from "./New";
import { store } from "../store";

describe("New", () => {
  it("will render the component", () => {
    const component = render(
      <Provider store={store}>
        <Router>
          <New />
        </Router>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("will display the value of the options", () => {
    const component = render(
      <Provider store={store}>
        <Router>
          <New />
        </Router>
      </Provider>
    );

    const optionOneEle = component.getByTestId("option-one");
    const optionTwoEle = component.getByTestId("option-two");

    fireEvent.change(optionOneEle, { target: { value: "Javascript" } });
    fireEvent.change(optionTwoEle, { target: { value: "Typescript" } });
    expect(optionOneEle.value).toBe("Javascript");
    expect(optionTwoEle.value).toBe("Typescript");
  });
});
