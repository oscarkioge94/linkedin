import styled from 'styled-components';
function Login() {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="data:image/png;base64,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"  alt="logo"/>
                </a>
                <div>
                    <Join>
                        Join now
                    </Join>
                    <SignIN>Sign In</SignIN>
                </div>
            </Nav>
        </Container>
    )
}
const SignIN = styled.a`
box-shadow:inset 0 0 0 1px #0a66c2;
color:#0a66c2;
border-radius:24px;
transition-duration:167ms;
font-size:16px;
font-weight:600;
line-height:48px;
padding:10px 24px;
text-align:center;
background-color:rgba(0,0,0,0);
&:hover{
    background-color:rgba(112,181,249,0.15);
    color:#0a66c2;
    text-decoration:none;
}

`;
const Join = styled.a`
font-size:16px;
padding:10px 12px;
text-decoration:none;
color:rgba(0,0,0,0.6);
margin-right:12px;
&:hover{
    background-color:rgba(0,0,0,0.08);
    color:rgba(0,0,0,0.9);
    text-decoration:none;
    cursor:pointer;
    border-radius:4px;

}
`;


const Container = styled.div`
padding:0px;
`;
const Nav = styled.nav`
max-width:1128px;
margin: auto;
padding:12px 0 16px;
display:flex;
align-items:center;
position:relative;
justify-content:space-between;
flex-wrap:no-wrap;
& > a{
    width:135px;
    height:34px;
    @media(max-width:768px){
        padding:0.5px;
    }
}
`;


export default Login
