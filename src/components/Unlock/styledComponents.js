import {styled} from 'styled-components'

export const MainCont = styled.div`
  background-image: linear-gradient(#3c2940, #0b0c1e);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 100px;
  width: 100px;
  @media (min-width: 767px) {
    height: 200px;
    width: 200px;
  }
`

export const Text = styled.p`
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
  font-family: 'Roboto';
  @media (min-width: 767px) {
    font-size: 25px;
  }
`

export const Btn = styled.button`
  background-color: #06b6d4;
  color: #e2e8f0;
  height: 50px;
  width: ${props => (props.isLocked ? '100px' : '80px')};
  padding: 10px;
  margin-top: 40px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 15px;
  @media (min-width: 767px) {
    height: 70px;
    width: ${props => (props.isLocked ? '150px' : '120px')};
    font-size: 25px;
  }
`
