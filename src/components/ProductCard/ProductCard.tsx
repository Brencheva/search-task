import { Product } from "../../types";

export default function ProductCard({ title, price, images }: Product) {
  return (
    <li className="flex align-center max-w-[50%] w-full p-4">
      {images[0] && <img className="w-[20%] mr-4" src={images[0]} alt={title} />}
      <div className="text-start">
        <h3 className="mb-2">{title}</h3>
        <span className="block">$ {price}</span>
      </div>
    </li>
  );
}
