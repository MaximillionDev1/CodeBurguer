import PropTypes from "prop-types";
import { ContainerButton } from "./styles";


export function ReturnButton({ children, ...props }) {
    return <ContainerButton {...props}>{children}</ContainerButton>;
}

ReturnButton.propTypes = {
    children: PropTypes.string
}
ReturnButton.defaultProps = {
    children: "Voltar"
};