import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import { useGetAnimalsQuery } from '../../services/animals';
import Loader from '../../components/Loader';
import CardList from '../../components/CardList';
import { MainEl } from './style';

const Main: FC = () => {
  const { error, isLoading } = useGetAnimalsQuery(0);

  if (isLoading) {
    return (
      <MainEl>
        <Loader />
      </MainEl>
    )
  }

  if (error) {
    return (
      <MainEl>Ошибка загрузки данных</MainEl>
    )
  }

  return (
    <MainEl>
      <Container>
        <CardList />
      </Container>      
    </MainEl>
  );
};

export default Main;
