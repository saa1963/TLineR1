import * as React from 'react';
import { Container, Navbar, DropdownToggle, DropdownMenu, DropdownItem, Button, UncontrolledDropdown } from 'reactstrap';
import {TLPeriod} from '../store/TimeLines'
import './tlperiod.css'


interface ITPeriod {
  indexOfTL: number
  id: number
  il: number
  ir: number
  childCount: number
}

export class TPeriod extends React.PureComponent<ITPeriod, {}>{
  react() {
    return (
      <td
        draggable={true}
        className={'period_cell' + this.props.childCount ? ' note' : ''}
        id={'cell-' + this.props.indexOfTL + '-' + this.props.id}
        colSpan={this.props.ir - this.props.il + 1}
        onDragStart={}
      ></td>
      )
  }
}