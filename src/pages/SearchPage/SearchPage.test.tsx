/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import SearchPage from "./SearchPage";

const query = { target: { value: "iphone" } };

describe("Search Bar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchPage />);
    expect(asFragment).toMatchSnapshot();
  });

  it("search field should have value", () => {
    const { getByTestId } = render(<SearchPage />);
    const searchField = getByTestId("search-field");
    fireEvent.change(searchField, query);
    expect(searchField).toHaveValue("iphone");
  });

  it("search reset button should reset the field", () => {
    const { getByTestId } = render(<SearchPage />);
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
