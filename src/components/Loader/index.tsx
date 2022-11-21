import React, { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader: FC = () => {
  return <Spinner animation="border" role="status"></Spinner>;
}

export default Loader;