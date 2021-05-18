import Alert from 'components/atoms/Alert/Alert';
import Button from 'components/atoms/Button/Button';
import React from 'react';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Navbar from '../components/organisms/Navbar/Navbar';

const Test = () => (
  <div>
    <Heading big>TEST</Heading>
    <Heading>TEST</Heading>
    <Paragraph>TEST</Paragraph>
    <Button>ADD TASK</Button>
    <Alert>LOW</Alert>
    <Alert type="medium">MEDIUM</Alert>
    <Alert type="high">HIGH</Alert>

    <Navbar />
  </div>
);

export default Test;
