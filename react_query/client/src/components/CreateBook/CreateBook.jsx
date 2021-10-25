import React from 'react';
import BookForm from '../Shared/BookForm';
import Container from '../Shared/Container';
import { useMutation } from 'react-query';
import { createBook } from '../../api';
import { useHistory } from 'react-router-dom';
import { Box, Heading} from 'rebass/styled-components';

const CreateBook = () => {

    const history = useHistory();
    const { mutateAsync, isLoading } = useMutation(createBook);

    const onFormSubmit = async (data) => {
        await mutateAsync(data);
        history.push('/');
    }

    return (
        <Container>
            <Box>
                <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
                <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
            </Box>
        </Container>
    )
}

export default CreateBook
