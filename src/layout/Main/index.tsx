import React, { FC } from 'react';
import useStore from '../../store';
import Container from 'react-bootstrap/Container';
import Loader from '../../components/Loader';
import CardList from '../../components/CardList';
import { MainEl } from './style';

const Main: FC = () => {
  const { isLoading, error } = useStore(
    ({ isLoading, error }) => ({ isLoading, error })
  );

  if (isLoading) {
    return (
      <MainEl>
        <Loader />
      </MainEl>
    )
  }

  if (error) {
    return (
      <MainEl>Ошибка загрузки данных: {error?.status} {error?.statusText} .</MainEl>
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
