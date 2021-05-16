import styled from 'styled-components';
function Login() {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/public/images/linkedin.png"  alt="logo"/>
                </a>
            </Nav>
        </Container>
    )
}
const Container = styled.div``;
const Nav = styled.nav``;


export default Login
