import { Button, Container, List } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Container>
      {options.map((option, index) => (
        <List key={index}>
          <li>
            <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </li>
        </List>
      ))}
      ;
    </Container>
  );
};
