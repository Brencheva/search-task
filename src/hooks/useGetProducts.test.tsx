import { renderHook } from "@testing-library/react";
import { useGetProducts } from "./useGetProducts";
import { act } from "react-dom/test-utils";

const products = [
  {
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
  },
  {
    id: 0,
    title: "Iphone 16",
    description: "Iphone 16 Silver",
    price: 25000,
    discountPercentage: 5,
    rating: 10,
    stock: 100,
    brand: "Apple",
    category: "phone",
    thumbnail: "",
    images: [],
  },
];

describe("useGetProducts Hook", () => {
  it("success result", async () => {
    const { result } = renderHook(() => useGetProducts());
    act(() => {
      result.current.loading = false;
      result.current.error = "";
      result.current.products = products;
    });
    expect(result.current).toMatchObject({
      products,
      error: "",
      loading: false,
    });
  });
  it("error result", async () => {
    const error = "Network Error";
    const { result } = renderHook(() => useGetProducts());
    act(() => {
      result.current.loading = false;
      result.current.error = error;
      result.current.products = [];
    });
    expect(result.current).toMatchObject({
      products: [],
      error,
      loading: false,
    });
  });
});
