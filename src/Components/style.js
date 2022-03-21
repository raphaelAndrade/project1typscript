import styled from 'styled-components'


export const List = styled.ul`
  list-style: none;
  li{
    border-bottom: solid black 1px;
    padding-bottom: 15px
  }
  h2 {
    font-size: 18px;
    color: red
  }
`
export const MainTitle = styled.h1`
  font-size: 22px;
  text-align: center;
  color: red
`
export const Button = styled.button`
  background: red;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  border: none;
  &:hover {
    background: #850d0d
  }
`
export const SubMenu = styled.ul`
  list-style: none;
  background: white;
  padding: 10px;
  width: 150px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.34); 
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.34);
  li {
   text-align: center;
   margin-top: 10px;
   &:first-child {
     margin-top: 0
   }
  }
`