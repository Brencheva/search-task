import { useGetProducts } from "../../hooks";
import ProductCard from "../ProductCard/ProductCard";
import { CloseIcon, SearchIcon } from "./SearchBar.const";

export default function SearchBar() {
  const { query, setQuery, loading, error, products } = useGetProducts();

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  const reset = () => {
    setQuery("");
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-8 flex flex-col align-center">
      <div className="w-full flex items-center relative mb-8">
        <input
          type="text"
          placeholder="search"
          data-testid="search-field"
          className="border border-purple-400 rounded-lg py-4 px-12 w-full"
          onChange={search}
          value={query}
        />
        <SearchIcon />
        <button className="absolute right-0 mr-2 " onClick={reset} data-testid="reset-button">
          <CloseIcon />
        </button>
      </div>
      <ul
        className={
          products.length ? "list-none flex flex-wrap width-full" : "invisible"
        }
      >
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </ul>
      {!loading && !products.length && <p>No items found</p>}
      {loading && <p>Loading..</p>}
    </div>
  );
}
