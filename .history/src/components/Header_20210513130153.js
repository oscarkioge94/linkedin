import styled from 'styled-components';
import Logo1 from "./"
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
const Container = styled.div``;
const Content = styled.div``;
const Logo = styled.span``;

export default Header;
