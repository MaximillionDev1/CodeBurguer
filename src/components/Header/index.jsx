import {
	Container,
	Navigation,
	HeaderLink,
	Options,
	Profile,
	LinkContainer,
	Logout,
	Content,
} from "./styles";

import { UserCircle, ShoppingCart } from "@phosphor-icons/react";

import { useNavigate, useResolvedPath } from "react-router";

import { useUser } from "../../hooks/UserContext";

export function Header() {
	const navigate = useNavigate();

	const { logout, userInfo } = useUser();

	const { pathname } = useResolvedPath();

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<Container>
			<Content>
				<Navigation>
					<div>
						<HeaderLink to="/" $isActive={pathname === "/"}>
							Home
						</HeaderLink>
						<hr />
						<HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
							Cardápio
						</HeaderLink>
					</div>
				</Navigation>
				<Options>
					<Profile>
						<UserCircle size={24} color="#fff" weight="fill" />
						<div>
							<p>
								Ola, <span>{userInfo.name}</span>
							</p>
							<Logout onClick={handleLogout}>Sair</Logout>
						</div>
					</Profile>
					<LinkContainer>
						<ShoppingCart size={24} color="#fff" weight="fill" />
						<HeaderLink to='/carrinho'>Carrinho</HeaderLink>
					</LinkContainer>
				</Options>
			</Content>
		</Container>
	);
}
