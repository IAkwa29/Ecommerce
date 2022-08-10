import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    height:100px;
    background-color: pink;
    font-size: 20px;
`;
const Wrapper = styled.div`
    padding: 30px 40px;
    display:flex;
    justify-content:space-between;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    align-item: center;
    
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
`;
const Center = styled.div`
flex:1;
`;
const Right = styled.div`
flex:1;
`;
const Language = styled.span`
    font-size:14;
    cursor:pointer;
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <input type="text" />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>CENTER</Center>
                <Right>RIGHT</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar