import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
const Left = styled.div`
  flex=1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  
`;

const SearchConatiner = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  flex=1;
  border: none;
  
`;
const Center = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  
`;
const Right = styled.div`
  flex=1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchConatiner>
            <Input />
            <Search style={{ color: "black", fontSize: 16 }} />
          </SearchConatiner>
        </Left>
        <Center>
          <Logo>FIND YOUR DRIP</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
