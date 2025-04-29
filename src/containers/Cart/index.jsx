import Logo from "../../assets/Logo 1.svg";

import { CartItems , CartResume } from "../../components";
import { Container, Banner, Title, Content, Return } from "./styles";
import { useNavigate } from "react-router-dom";

export function Cart() {
	const navigate = useNavigate();
	return (
		<Container>
			<Banner>
				<img src={Logo} alt="logo Devburguer" />
			</Banner>
			<Title>Checkout - Pedido</Title>
			<Content>
				<CartItems />
				<CartResume />
			</Content>
			<Return
				type="button"
				onClick={() => {
					navigate({
						pathname: "/",
						search: "",
					});
				}}
			>
			Voltar
			</Return>
		</Container>
	);
}
