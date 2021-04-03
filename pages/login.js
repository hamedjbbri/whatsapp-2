import {Button} from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";

function Login() {
    return (
        <Container>
              <Head>
                <title>Login</title>
              </Head>    

              <LoginContainer>
                 <Logo
                   src="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg" 
                  />

                 <Button variant="outlined">Sign in with google</Button>
              </LoginContainer>       
        </Container>
    )
}

export default Login

const Container = styled.div``;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`


const Logo = styled.img`
   height: 200px;
   width: 200px;
   margin-bottom: 50px;
   margin-bottom: 50px
`;