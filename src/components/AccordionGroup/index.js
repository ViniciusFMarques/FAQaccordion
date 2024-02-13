import AccordionSection from '../AccordionSection';
import { Container } from './styles';
import { data } from '../../mock/data';

export default function AccordionGroup() {
  return (
    <Container>
      {data.map((item) => (
        <AccordionSection key={item.id} question={item.question} content={item.content} />
      ))}
    </Container>

  );
}
