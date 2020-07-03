import * as React from 'react';
import { Container, Navbar, DropdownToggle, DropdownMenu, DropdownItem, Button, UncontrolledDropdown } from 'reactstrap';
import { TLPeriod, ITPeriod } from '../store/TimeLines'
import './tlperiod.css'


const TPeriod = (props: ITPeriod) => {
  const [period, setPeriod] = React.useState(props)
  return (
    <td
      draggable={true}
      className={'period_cell' + props.period.periods.length ? ' note' : ''}
      id={'cell-' + props.indexOfTL + '-' + this.props.id}
      colSpan={props.ir - props.il + 1}
      onDragStart={(ev) => {
        ev.dataTransfer.setData('application/json', JSON.stringify(props.period, ['name', 'begin', 'end', 'periods']))
        ev.dataTransfer.dropEffect = 'copy'
      }}
      onDragEnter={(ev) => {
        ev.preventDefault();
        (ev.target as HTMLTableCellElement).classList.add('period_cell_drop');
      }}
      onDragLeave={(ev) => (ev.target as HTMLTableCellElement).classList.remove('period_cell_drop')}
      onDragOver={(ev) => ev.preventDefault()}
      onDrop={(ev) => {
        const data = ev.dataTransfer.getData('application/json')
        const tl = JSON.parse(data)
        period.Add(tl)
        event.preventDefault();
      }}
    ></td>
  )
}

export default TPeriod;
