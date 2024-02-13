import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, AccordionHeader, AccordionContent } from './styles';
import plusIcon from '../../assets/images/icon-plus.svg';
import minusIcon from '../../assets/images/icon-minus.svg';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

/* eslint-disable max-len */
export default function AccordionSection({ question, content }) {
  const [isActive, setIsActive] = useState(false);

  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isActive);

  const icon = isActive ? minusIcon : plusIcon;

  function handleActiveChange() {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  return (
    <Container>
      <AccordionHeader>
        <h2>{question}</h2>
        <button type="button" onClick={handleActiveChange}>
          <img src={icon} alt="plus icon" />
        </button>
      </AccordionHeader>
      {shouldRender
      && (
      <AccordionContent isLeaving={!isActive} ref={animatedElementRef}>
        {content}
      </AccordionContent>
      )}
    </Container>
  );
}

AccordionSection.propTypes = {
  question: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
