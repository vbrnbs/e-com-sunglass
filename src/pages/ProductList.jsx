import styled from "styled-components"
import Announcment from "../components/Announcment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import {mobile} from "../responsive"


const Container = styled.div`
    
`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "felx", flexDirection: "column"})}
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0", fontSize: "14px"})}
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({width: "100px", margin: "3px 2px"})}
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
        <Announcment />
        <Navbar />
        <Title>Sunglasses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtered Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Lens
                    </Option>
                    <Option>Darken</Option>
                    <Option>Polaized</Option>
                    <Option>Sharpen</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sorted Products:</FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList
