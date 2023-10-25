import { render } from "@testing-library/react-native";
import React from "react";
import App from "../App";
import { RealmProvider } from "@realm/react";
import { Person } from "../scheme";
import List from "../components/List";
import CreatePersonInput from "../components/Form/CreatPersonForm";

describe("Render App", () => {
  it("renders correctly", () => {
    render(<App />);
  });
  it("render list correctly", () => {
    render(
      <RealmProvider schema={[Person]}>
        <List />
      </RealmProvider>
    );
  });
  it("render create correctly", () => {
    render(
      <RealmProvider schema={[Person]}>
        <CreatePersonInput />
      </RealmProvider>
    );
  });
});
