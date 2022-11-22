import React, { FC } from 'react';
import shallow from 'zustand/shallow';
import useStore from '../../store';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ImgWrapper, ButtonLike } from './style';
import { Like } from './icon';

const CardList: FC = () => {
  const { animals, updateAnimals, removeAnimal, filter } = useStore(
      ({ animals, updateAnimals, removeAnimal, filter }) => ({
        animals,
        updateAnimals,
        removeAnimal,
        filter
      }),
      shallow
    );
  
  return (
    <Row>
      {animals
        .filter((item) => filter === false || item.isLike === filter)
        .map((item) => (
          <Col md={6}  xl={4} className="g-4" key={item.id}>
            <Card className="h-100 text-start">
              <ImgWrapper className="border-bottom">
                <Card.Img className="h-100" variant="top" src={item.image_link} />
              </ImgWrapper>
              
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Title>Вид: {item.animal_type}</Card.Title>
                <Card.Text>
                  Длина: от {item.length_min} до {item.length_max}. <br />
                  Вес: от {item.weight_min} до {item.weight_max}. <br />
                  Продолжительность жизни до {item.lifespan}. <br />
                  Регион проживания: {item.geo_range}. <br />
                  Среда обитания: {item.habitat}. <br />
                  Чем питается: {item.diet}.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <ButtonLike active={item.isLike} onClick={()=>updateAnimals(item.id)}>
                  <Like />
                </ButtonLike>

                <Button variant="outline-danger" onClick={()=>removeAnimal(item.id)}>Удалить</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))
      }
    </Row>
  );
};

export default CardList;