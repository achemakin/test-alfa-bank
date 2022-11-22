import React, { FC } from 'react';
import useStore from './store';
import Header from './layout/Header';
import Main from './layout/Main';

useStore.getState().fetchAnimals();

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
