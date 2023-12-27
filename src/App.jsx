import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

function App() {
  return (
    <>
      <GlobalStyles />
      <Row type="vertical">
        <Row type="vertical">
          <Heading as="h1">Check in and out</Heading>
          <Button variation="primary" size="medium">
            Check in
          </Button>
        </Row>
        <Row type="horizontal">
          <Heading as="h2">Form</Heading>
          <form>
            <Input type="number"></Input>
            <Input type="number"></Input>
          </form>
        </Row>
      </Row>
    </>
  );
}

export default App;
