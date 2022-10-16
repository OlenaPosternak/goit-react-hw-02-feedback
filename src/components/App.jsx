import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { AppStyle } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

// import { getValue } from '@testing-library/user-event/dist/utils';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedbackType => {
    this.setState(prevState => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
   
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return ((good / total) * 100);
  };

  render() {
    return (
      <AppStyle>
        <Section title={'Please leave your feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          ></FeedbackOptions>
        </Section>

        <Section title={'Statistics'}>
         
        <Notification total={this.countTotalFeedback()}></Notification>

        <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>


          
        </Section>
      </AppStyle>
    );
  }
}
