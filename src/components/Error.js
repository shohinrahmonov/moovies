import React from 'react';
import { Container } from '../style/Container';
import { ErrorWrapper } from '../style/ErrorWrapper';



const Error = ({error}) => {
    return ( 
        <ErrorWrapper>
            <Container>
                {error ?<h1>{`${error}`}</h1> : <h1>Page not found.</h1>}
            </Container>
        </ErrorWrapper>
     );
}
 
export default Error;