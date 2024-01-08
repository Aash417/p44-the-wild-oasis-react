import Heading from "../ui/Heading";
import Menus from '../ui/Menus';
import Row from '../ui/Row';

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <Menus>
        <Menus.Toggle></Menus.Toggle>
        <Menus.List>
          <Menus.Button>click</Menus.Button>
          <Menus.Button>click</Menus.Button>
        </Menus.List>
      </Menus>
    </Row>
  );
}

export default Dashboard;
