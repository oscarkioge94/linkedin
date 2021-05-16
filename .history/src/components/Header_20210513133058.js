import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
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
                   
                       <SearchIcon/>

                   
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
const Search = styled.div`
opacity:1;
flex-grow:1;
position:relative;
& > div{
    max-width:280px;
    input{
        border:none;
        box-shadow:none;
        background-color:#eef3f8;
        border-radius:2px;
        color:rgba(0,0,0,0.9);
        width:218px;
        padding:0 8px 0 40px;
        line-height:1.75;
        font-weight:400;
        font-size:14px;
        height:34px;
        border-color:#dce6f1;
        vertical-align:text-top;
    }


}
const SearchIcon = styled.div`
    width:40px;
    position:absolute;
    z-index:1;
`;
`;

export default Header;
