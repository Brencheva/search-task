/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import ProductCard from "./ProductCard";
import { Product } from "../../types";
import { render } from "@testing-library/react";

const productCard: Product = {
  id: 0,
  title: "Iphone 15",
  description: "Iphone 15 Silver",
  price: 2500,
  discountPercentage: 5,
  rating: 10,
  stock: 100,
  brand: "Apple",
  category: "phone",
  thumbnail: "",
  images: [],
};

describe("Product Card", () => {
  it("renders correctly", () => {
    const {asFragment} = render(<ProductCard {...productCard} />);
    expect(asFragment).toMatchSnapshot();
  });

  it("Card has text content", () => {
    const {getByText} = render(<ProductCard {...productCard} />);
    const title = getByText(productCard.title);
    const price = getByText(`$ ${productCard.price}`);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
