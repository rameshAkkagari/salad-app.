import React from 'react'
import styled from 'styled-components'
import BgImg from '../assets/Food/item-9.jpeg'
import Button from './Button'
import Logo from './sections/Logo'
import { Link } from 'react-router-dom'


const Section = styled.section `
width: 100vw;
height: 100vh;
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.4)`}; 
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1rem;

.btn{
  width: 90%;
}


button{
  text-align: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.body};
}

.link{
  display: flex;
  align-items: center;
  gap: 5px;

  p{
    @media(max-width: 31em){
      font-size: 0.75rem;
    }
  }

  span{
    font-size: 1rem;
    font-weight: 600;
  }
  a{
    font-weight: 600;
    color: ${props => props.theme.body};
  }
}
`
const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  border-radius: 10px;
`

const BoxII = styled.div`
  width: 50%;
  background-color: rgba(255,255,255, 0.50);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 0;
  border-radius: 0 10px 10px 0;


  @media(max-width: 44em){
    width: 100%;
    border-radius: 10px;
  }
  .hGzAAU{
    text-align: center;
  }

  h4{
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
  }
  form{
    display: flex;
    align-items: center;
    flex-direction: column;

  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-family: 'Poppins';

    label {
      font-size: 0.65rem;
      color: #000;
      font-weight: 500;
    }
    input{
        margin-top: 5px;
        
        background-color: #fff;
        padding: 1rem 0.5rem;
        border-radius: 5px;
        width: 100%;
        &:placeholder{
          font-size: ${props => props.theme.fontmd};
          text-transform: capitalize;
          color: #000;
        }
        @media(max-width: 30em){
          font-size: 0.75rem;
          &:placeholder{
            font-size: 0.75rem;
          }
    }
  }


`


const Box = styled.div`
  width: 50%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;

  }

  @media(max-width: 44em){
    display: none;
  }
`

const SignIn = () => {
  return (
    <Section>
      <div className="btn">
        <Link to='/'>
        <Button text='Back' />
        </Link>
      </div>
      <Container>
        <Box>
          <img src={BgImg} alt="Sign" />
        </Box>
        <BoxII>
          <Logo />
          <h4>welcome back to Salad.</h4>
          <form>
            <div className="form-group">
              <label>Username or Email</label>
              <input type="text"  placeholder="Donald Brooks"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password"  placeholder='Password' />
            </div>
            <Button text='sign in' classway='primary-btn' />
          </form>
          <div className="link">
            <div>
              <p>New to <span>Salad.</span></p>
            </div>
            <div>
              <p>
                <Link to='/signup'> Sign up</Link>
              </p>
            </div>
          </div>
        </BoxII>
      </Container>
    </Section>
  )
}

export default SignIn