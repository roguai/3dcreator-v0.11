import styled from "styled-components";

const Container=styled.div`
    text-align:center;
    width: 400px;
    margin: auto;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const ErrorPage = () => {
    return (
        <Container>
            <h1>Oops!</h1>
            <p>Blank page</p>
            
          
        </Container>
    )
};

export default ErrorPage;