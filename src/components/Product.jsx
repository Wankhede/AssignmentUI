import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';



const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  object-fit: cover;

  &:hover ${Info}{
    opacity: 1;
  }
`;



const Image = styled.img`
    z-index: 1;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {

  const addProductHandler = () => {
    console.log(item);
    
    const newvar = {prod: item._id, quantity: 1}
    axios.post('https://shopperstopee.herokuapp.com/api/cart', newvar
    )
    .then(function (response) {
      console.log(response);
    })
  }


  return (
    <Container>
      
      
      <Link to={item._id}> <Image src={item.imgUrl} height="500px"  />

     
      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={()=> addProductHandler()}/>
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>

        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      </Link>
    </Container>
  );
};

export default Product;
