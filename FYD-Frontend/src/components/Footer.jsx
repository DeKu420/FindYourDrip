//import React from 'react'
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
  cursor: pointer;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>FIND YOUR DRIP</Logo>
        <Desc>
          Diwali is the perfect festival of joy and happiness. Now, happiness
          comes when you buy new products for your loved ones. When these new
          products are on sale, you can think of it as doubling your happiness
          Celebrate this DIWALI with US.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#4267B2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#C13584">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#1DA1F2">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>USEFUL LINKS</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Woman's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          SIES College of Arts, Science and Commerce, Jain Society, Sion West,
          Mumbai 400 022, INDIA
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 9087654321 (LOL... Its fake )
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> kevin@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
