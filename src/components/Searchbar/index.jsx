import { FaSearch } from "react-icons/fa";
import { Container, InputContainer, ContainerButton } from "./style";

const Searchbar = ({ error, ...rest }) => {
  return (
    <Container>
      <InputContainer isErrored={!!error}>
        <input {...rest} />
        <ContainerButton>
          <FaSearch />
        </ContainerButton>
      </InputContainer>
    </Container>
  );
};
export default Searchbar;
