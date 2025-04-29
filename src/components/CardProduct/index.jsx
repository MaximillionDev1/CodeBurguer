import PropTypes from "prop-types";
import { CardContainer } from "./styles";
import { CardImage } from "./styles";
import { CartButton } from "../CartButton";
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }) {
	const { putProductsInCart } = useCart();

	return (
		<CardContainer>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong>{product.currencyValue}</strong>
			</div>
			<CartButton
				onClick={() => {
					putProductsInCart(product);
				}}
			/>
		</CardContainer>
	);
}

CardProduct.propTypes = {
	product: PropTypes.object,
};
