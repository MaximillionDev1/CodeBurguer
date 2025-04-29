import { useContext, createContext, useEffect, useState } from "react"; 

const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartProducts, setCartProducts] = useState([]);

	const putProductsInCart = (product) => {
		const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

		let newProductsInCart = [];

		if (cartIndex >= 0) {
			newProductsInCart = [...cartProducts];
			newProductsInCart[cartIndex].quantity += 1;
			setCartProducts(newProductsInCart);
		} else {
			product.quantity = 1;
			newProductsInCart = [...cartProducts, product];
			setCartProducts(newProductsInCart);
		}

		updateLocalStorage(newProductsInCart);
	};

	const clearCart = () => {

		setCartProducts([]);
		updateLocalStorage([]);
	};

	const deleteProduct = (productId) => {
		const newCart = cartProducts.filter((prd) => prd.id !== productId);
		setCartProducts(newCart);
		updateLocalStorage(newCart);
	};

	const increaseProduct = (productId) => {
		const newCart = cartProducts.map((prd) => {
			return prd.id === productId
				? { ...prd, quantity: prd.quantity + 1 }
				: prd;
		});
		setCartProducts(newCart);
		updateLocalStorage(newCart);
	};

	const decreaseProduct = (productId) => {
		const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);
		if (cartProducts[cartIndex].quantity > 1) {
			const newCart = cartProducts.map((prd) => {
				return prd.id === productId
					? { ...prd, quantity: prd.quantity - 1 }
					: prd;
			});
			setCartProducts(newCart);
			updateLocalStorage(newCart);
		} else {
			deleteProduct(productId);
		}
	};

	const updateLocalStorage = (products) => {
		localStorage.setItem("devburguer:cartInfo", JSON.stringify(products));
	};

	useEffect(() => {
		const clientCartData = localStorage.getItem("devburguer:cartInfo");
		if (clientCartData) {
			const parsedData = JSON.parse(clientCartData);
			setCartProducts(parsedData);
		}
	}, []);

	return (
		<Cartcontext.Provider
			value={{
				cartProducts,
				putProductsInCart,
				clearCart,
				deleteProduct,
				increaseProduct,
				decreaseProduct,
			}}
		>
			{children}
		</Cartcontext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(Cartcontext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
