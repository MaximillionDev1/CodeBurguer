import { navLinks } from "./navLinks";
import Logo from "../../assets/Logo 1.svg";
import { SignOut } from "@phosphor-icons/react";
import {Container,NavLinksContainer,NavLink,Footer} from './styles'
import {useUser} from '../../hooks/UserContext'
import { useResolvedPath } from "react-router";


export function SideNavAdmin() {

const {logout} = useUser()
const {pathname}= useResolvedPath();


	return (
		<Container>
			<img src={Logo} alt="hamburguer-logo-devburguer" />
			<NavLinksContainer>
				{navLinks.map((link) => (
					<NavLink key={link.id} to={link.path}
					$isActive={pathname === link.path}>
						{link.icon}
						<span>{link.label}</span>
						
					</NavLink>
				))}
			</NavLinksContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <SignOut/>
                    <p>Sair</p>
                </NavLink>
            </Footer>
		</Container>
	);
}
