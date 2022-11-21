import React, { FC } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useGetAnimalsQuery } from '../../services/animals';
import { ImgWrapper, ButtonLike, Br } from './style';
import { Like } from './icon';

const CardList: FC = () => {
  const { data, isSuccess } = useGetAnimalsQuery(0);

  console.log(data);
 
  return (
    <Row>
      {isSuccess && data.map((item) => (
        <Col md={6} lg={4} xl={3} className="g-4" key={item.id}>
          <Card className="h-100">
            <ImgWrapper className="border-bottom">
              <Card.Img className="h-100" variant="top" src={item.image_link} />
            </ImgWrapper>
            
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Title>Вид: {item.animal_type}</Card.Title>
              <Card.Text>
                Длина: от {item.length_min} до {item.length_max}. <Br />
                Вес: от {item.weight_min} до {item.weight_max}. <Br />
                Продолжительность жизни до {item.lifespan}. <Br />
                Регион проживания: {item.geo_range}. <Br />
                Среда обитания: {item.habitat}. <Br />
                Чем питается: {item.diet}.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonLike active={item.isLike}>
                <Like />
              </ButtonLike>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardList;