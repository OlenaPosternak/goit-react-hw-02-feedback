import {StatisticsList} from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>{total !== 0 && 
        <StatisticsList>
          <li>Good: {good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive Feedback: {positivePercentage}%</li>
        </StatisticsList>}</>

  );
};
