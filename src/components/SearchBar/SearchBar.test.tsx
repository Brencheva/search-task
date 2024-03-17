/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

const query = { target: { value: "iphone" } };

describe("Search Bar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchBar />);
    expect(asFragment).toMatchSnapshot();
  });

  it("search field should have value", () => {
    const { getByTestId } = render(<SearchBar />);
    const searchField = getByTestId("search-field");
    fireEvent.change(searchField, query);
    expect(searchField).toHaveValue("iphone");
  });

  it("search reset button should reset the field", () => {
    const { getByTestId } = render(<SearchBar />);
    const searchField = getByTestId("search-field");
    const button = getByTestId("reset-button");
    fireEvent.change(searchField, query);
    expect(searchField).toHaveValue("iphone");
    button.click();

    setTimeout(() => {
      expect(searchField).toHaveValue("");
    }, 500);
  });
});
