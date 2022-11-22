import React, { FC } from 'react';
import useStore from '../../store';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonFilter } from './style';
import { Like } from './icon';

const Header: FC = () => {
  const { filter, updateFilter } = useStore(({ filter, updateFilter }) => ({ filter, updateFilter }));
  return (
    <header className="w-100 pt-4 pb-4 mb-3 border-bottom ">
      <Container className="d-md-flex justify-content-between align-items-center">
        <h1>Тестовое задание Альфа-банк</h1>

        <div>
          <span className="text-uppercase">Фильтр: </span>
          <ButtonFilter active={filter} onClick={() => updateFilter()}>
            <Like />
          </ButtonFilter>          
        </div>
        
      </Container>
    </header>
  );
};

export default Header;
