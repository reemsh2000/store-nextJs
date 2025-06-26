import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({ data, title ,limit }: { data: Product[]; title?: string,limit?:number }) => {

    const limitedData = limit ? data.slice(0,limit) : data
	return (
		<div className="my-10">
			<h2 className="h2-bold mb-4">{title}</h2>
			{limitedData.length > 0 ? (
				<div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{limitedData.map((product: Product) => {
						return <ProductCard product={product} key={product.slug}/>;
					})}
				</div>
			) : (
				<div>No Product found</div>
			)}
		</div>
	);
};

export default ProductList;
