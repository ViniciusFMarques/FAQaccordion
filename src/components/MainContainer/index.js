import PropTypes from 'prop-types';
import { Container, Header } from './styles';
import star from '../../assets/images/icon-star.svg';
import AccordionGroup from '../AccordionGroup';

export default function MainContainer({ title }) {
  return (
    <Container>
      <Header>
        <img src={star} alt="star" />
        <h1>{title}</h1>
      </Header>
      <AccordionGroup />
    </Container>
  );
}

MainContainer.propTypes = {
  title: PropTypes.string.isRequired,
};
