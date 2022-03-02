import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
`;
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://images.unsplash.com/photo-1600024914429-62cee426b165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    background-size: cover;
    position: absolute;
    z-index: 1;
    filter: blur(10px);
`;
const Wrapper = styled.div`
    width: 15%;
    padding: 20px;
    background-color: white;
    z-index: 2;
    ${mobile({width: "75%"})};
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    margin-bottom: 10px;
`;
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 22px;
    background-color: #DAB855;
    color: white;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Overlay />
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>SIGN IN</Button>
                <Link>DO NOT YOU REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
