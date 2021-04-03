import {Button} from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from '../firebase';

function Login() {
    const signIn = () => {
      auth.signInWithPopup(provider).catch(alert)
    }


    return (
        <Container>
              <Head>
                <title>Login</title>
              </Head>    

              <LoginContainer>
                 <Logo
                   src="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg" 
                  />

                 <Button variant="outlined" onClick={signIn}>Sign in with google
                 </Button>
              </LoginContainer>       
        </Container>
    )
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
  
`;

const LoginContainer = styled.div`
  padding: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7)
`


const Logo = styled.img`
   height: 200px;
   width: 200px;
   margin-bottom: 50px;
`;