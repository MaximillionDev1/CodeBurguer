import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Title, ContainerItems, CategoryButton } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom"; 

export function CategoryCarousel() {
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate(); 

	useEffect(() => {
		async function loadCategories() {
			try {
				const { data } = await api.get("/categories");
				setCategories(data);
				console.log(data); // opcional
			} catch (error) {
				console.error("Erro ao carregar categorias:", error);
			}
		}
		loadCategories();
	}, []);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1280, min: 690 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 690, min: 0 },
			items: 2,
		},
	};

	return (
		<Container>
			<Title>Categorias</Title>

			<Carousel
				responsive={responsive}
				infinite={true}
				partialVisible={false}
				itemClass="carousel-item"
			>
				{categories.map((category) => (
					<ContainerItems key={category.id} imageUrl={category.url}>
						<CategoryButton
							onClick={() => navigate(`/cardapio?categoria=${category.id}`)}
						>
							{category.name}
						</CategoryButton>
					</ContainerItems>
				))}
			</Carousel>
		</Container>
	);
}
