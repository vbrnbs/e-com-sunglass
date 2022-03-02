// import { ListItem } from "@material-ui/core"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: whitesmoke;
    position: relative;
    ${mobile({margin: "0"})};

    &:hover ${Info}{
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
    object-fit: cover;
    ${mobile({width: "100vw"})};
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
