import styled from 'styled-components';
import logo1 from './linkedin.png';
function Header() {
    return (
       <Container>
           <Content>
               <Logo>
               <img  src={logo1}/>
               </Logo>
               <Search>
                   <div>
                       <input type="text" placeholder="search"></input>
                   </div>
                   <SearchIcon>
                       
                   </SearchIcon>
               </Search>
               
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
    z-index:100;
`;
const Content = styled.div`
display:flex;
align-items:center;
margin:0 auto;
min-height:100%;
max-width:1128px;
`;
const Logo = styled.span`
margin-right:8px;
font-size:0px;
`;

export default Header;
