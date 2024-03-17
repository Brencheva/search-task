import { useGetProducts } from "../../hooks";
import ProductCard from "../../components/ProductCard/ProductCard";
import { SearchField } from "../../components";

export default function SearchPage() {
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
      <SearchField value={query} onChange={search} reset={reset} />
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
