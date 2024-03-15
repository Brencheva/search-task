import { useState, useEffect, useMemo, useCallback } from "react";
import { Product } from "../types";
import { debounce } from "lodash";

export const useGetProducts = (): {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  error: string;
  products: Product[];
} => {
  const [query, setQuery] = useState("");
  const [products, setSearchProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    memoizedSearch();
  }, [query]);

  const search = useCallback(async () => {
    setLoading(true);
    return fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((result) => setSearchProducts(result.products))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [query]);

  const memoizedSearch = useMemo(() => debounce(search, 300), [search]);

  return {
    query,
    setQuery,
    loading,
    error,
    products,
  };
};
