import { Alert, Button } from 'react-bootstrap'
import React from 'react'
import { ApplicationTheme } from '../App'

const Detail = ({ selected }) => (
  <ApplicationTheme.Consumer>
    {({ theme, changeTheme }) => (
      <div>
        <Alert variant="success">{selected || 'No value selected'}</Alert>
        <Button
          onClick={
            () => {
              changeTheme()
            } // change the theme from here
          }
        >
          {theme}
        </Button>
      </div>
    )}
  </ApplicationTheme.Consumer>
)

export default Detail
