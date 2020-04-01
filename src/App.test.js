import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<App /> testing", () => {
  const wrapper = shallow(<App />);

  it("header should have an h1 and p", () => {
    expect(wrapper.find("header").children().length).toBe(3);
  });

  it("should contain one h1", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });
  it("h1 should contain the text RecommendIt", () => {
    expect(wrapper.find("h1").text()).toBe("RecommendIt");
  });

  it("should containe at least 1 p with the class of loading", () => {
    expect(wrapper.find(".loading").exists()).toBe(true);
  });
  it("p should contain the text ...", () => {
    expect(wrapper.find(".loading").text()).toBe("Loading...");
  });

  it("just testing out enzyme selectors", () => {
    expect(wrapper.find("h1 ~ p").exists()).toBe(true);
  });

  it("matches the snapshot", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
