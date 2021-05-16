import styled from 'styled-components';
import logo1 from './login-logo.svg';
function Header() {
    return (
       <Container>
           <Content>
               <Logo>
               <img  src={logo1}/>
               </Logo>
               
           </Content>
       </Container>
    )
}
const Container = styled.div`
    background-color:white;
    border-bottom:1px solid rgba(0,0,0,0.08);
    left:0;
    padding:0 24px;
    position:fixed;
    width:100vw;
`;
const Content = styled.div``;
const Logo = styled.span``;

export default Header;
