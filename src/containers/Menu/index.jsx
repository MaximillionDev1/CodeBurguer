import { useEffect, useState } from "react";
import {
	Container,
	Banner,
	CategoryMenu,
	ProductsContainer,
	CategoryButton,
	ReturnButtonStyled
} from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router";
import { ReturnButton } from "../../components/ReturnButton";

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const[filteredProducts, setFilteredProducts] = useState([]);

	const navigate = useNavigate();

	const {search} =useLocation()

	const queryParams = new URLSearchParams(search);

	

	const[activeCategory, setActiveCategory] = useState(()	=> {

		const categoryId = +queryParams.get("categoria")

		if(categoryId){
			return Number(categoryId)
		}
		return 0
	});


	useEffect(() => {
		async function loadCategories() {
			try {
				const { data } = await api.get("/categories");
				const newCategories = [{ id: 0, name: "Todas" }, ...data];
				setCategories(newCategories);
			} catch (error) {
				console.error("Erro ao carregar categorias:", error);
			}
		}

		async function loadProducts() {
			try {
				const { data } = await api.get("/products");
				const newProducts = data
					.map((product) => product)
					.map((product) => ({
						currencyValue: formatPrice(product.price),
						...product,
					}));
				setProducts(newProducts);
			} catch (error) {
				console.error("Erro ao carregar produtos:", error);
			}
		}

		loadCategories();
		loadProducts();
	}, []);

	useEffect(() => {
		if (activeCategory === 0) {
			setFilteredProducts(products);
		} else {
			const filtered = products.filter(
				(product) => product.category_id === activeCategory
			);
			setFilteredProducts(filtered);
		}
	}, [products , activeCategory]);

	return (
		<Container>
			<Banner>
				<h1>
					O MELHOR
					<br />
					HAMBURGUER
					<br />
					ESTÁ AQUI!
					<br />
					<span>Esse cardápio está irresistível!</span>
				</h1>
			</Banner>

			<CategoryMenu>
				{categories.map((category) => (
					<CategoryButton
						key={category.id}
						$isActiveCategory={activeCategory === category.id}
						onClick={() => {
							navigate(
								{
									pathname: "/cardapio",
									search: `?categoria=${category.id}`,
								},
								{
									replace: true,
								},
								
							);
							setActiveCategory(category.id)
						}}
					>
						{category.name}
					</CategoryButton>
				))}
			</CategoryMenu>

			<ProductsContainer>
				{filteredProducts.map((product) => (
					<CardProduct product={product} key={product.id} />
				))}
			</ProductsContainer>
			<ReturnButtonStyled
			key={categories.id}
			onClick={() => {
				navigate({
					pathname: "/",
					search: "",
				});
			}}
			
			>Voltar</ReturnButtonStyled>
		</Container>
	);
}
