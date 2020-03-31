import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<HomePage /> testing", () => {
  const wrapper = shallow(<HomePage test="testing prop" another="test" />);

  it("Navbar tag renders", () => {
    expect(wrapper.find("Navbar").exists()).toBe(true);
  });

  it("Navbar renders with props", () => {
    expect(wrapper.find("[test='testing prop']").exists()).toBe(true);
  });

  it("Navbar renders with multiple attributes", () => {
    expect(
      wrapper
        .find({
          test: "testing prop",
          another: "test",
          className: "navigation"
        })
        .exists()
    ).toBe(true);
  });
});
