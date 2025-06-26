
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
const Homepage = async () => {
const latesProducts = await getLatestProducts();
	return (
		<>
			<ProductList data={latesProducts} title="Newest Arrivals" />
		</>
	);
};

export default Homepage;
