import * as React from 'react';
import { Container, Navbar, DropdownToggle, DropdownMenu, DropdownItem, Button, UncontrolledDropdown } from 'reactstrap';
import './custom.css'

const App = (props: { children?: React.ReactNode }) => {
  return (
      <React.Fragment>
        <header>
          <Navbar className="navbar-expand navbar-toggleable border-bottom box-shadow mb-3" light>
            <Container className="justify-content-start mx-0">
              <Button className="nbutton mr-1" id="prev_page" outline href="#">&lt;&lt;</Button>
              <Button className="nbutton mr-1" id="prev_period" outline>&lt;</Button>
              <Button className="nbutton mr-1" id="next_period" outline href="#">&gt;</Button>
              <Button className="nbutton" id="next_page" outline href="#">&gt;&gt;</Button>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  Линия времени
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Новая</DropdownItem>
                  <DropdownItem>Загрузить</DropdownItem>
                  <DropdownItem>Загрузить файл</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Container>
            //<Container fluid className="justify-content-end">
            //  <div className="mr-2">Иванов</div>
            //  <Button color="primary" className="mr-1" outline onClick={() => alert('1')}>Регистрация</Button>
            //  <Button color="primary" outline onClick={() => alert('2')}>Вход</Button>
            //</Container>
          </Navbar>
        </header>
        <Container className="mx-0">
          {props.children}
        </Container>
      </React.Fragment>
    )
}

export default App;