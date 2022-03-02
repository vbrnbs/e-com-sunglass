import styled from "styled-components"
import { mobile } from "../responsive"


const Conatiner = styled.div`
    flex: 1;
    height:70vh;
    margin: 0px 50px;
    position: relative;
    ${mobile({ height: "50vh", margin: "3px" })};
`
const Image = styled.img`
    width: 100%;
    margin: 3px;
    height: 100%;
    object-fit: cover;
`
const Info = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 12px 20px;
    border: none;
    background-color: #fff;
    color: gray;
    font-weight: 600;
    cursor: pointer;
`
const CategoryItem = ({item}) => {
  return (
    <div>
      <Conatiner>
          <Image src={item.img}/>
          <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
          </Info>
      </Conatiner>
    </div>
  )
}

export default CategoryItem
