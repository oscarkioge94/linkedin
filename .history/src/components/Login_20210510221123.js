import styled from 'styled-components';
function Login() {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="./login-logo.svg"  alt="logo"/>
                </a>
            </Nav>
        </Container>
    )
}
const Container = styled.div``;
const Nav = styled.nav``;


export default Login
