import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import SubTable from './SubTable'

// if we want to share the selected property (currently living in the Table state)
// between multiple components, e.g. Detail, we have to ELEVATE this state property
// to the nearest ancestor of both Table and Detail (in this case, App)

class Table extends Component {
  // state = {
  //   selected: undefined,
  // }

  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            onClick={(e) => this.props.changeAppState('First')}
            className={this.checkSelected('First')}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeAppState('Second')}
            className={this.checkSelected('Second')}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeAppState('Third')}
            className={this.checkSelected('Third')}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Local state is {this.props.selected || 'undefined'}
        </p>
        <SubTable />
      </>
    )
  }
}

export default Table
