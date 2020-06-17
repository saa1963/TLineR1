import * as React from 'react';
import { Container, Navbar, DropdownToggle, DropdownMenu, DropdownItem, Dropdown, Button, UncontrolledDropdown } from 'reactstrap';

import './custom.css'

export default class App extends React.Component<{}> {

  render() {
    return <header>
      <Navbar className="navbar-expand navbar-toggleable border-bottom box-shadow mb-3" light>
        <Container className="justify-content-start">
          <Button className="nbutton mr-1" id="prev_page" color="primary" href="#">&lt;&lt;</Button>
          <Button className="nbutton mr-1" id="prev_period" color="primary">&lt;</Button>
          <Button className="nbutton mr-1" id="next_period" color="primary" href="#">&gt;</Button>
          <Button className="nbutton" id="next_page" color="primary" href="#">&gt;&gt;</Button>
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
      </Navbar>
    </header>
  }
}
