import { Button } from 'react-bootstrap'
import { ApplicationTheme } from '../App'

const SubSubTable = () => (
  <ApplicationTheme.Consumer>
    {({ theme, changeTheme }) => (
      <div>
        <h4>SubSubTable Component</h4>
        <p>the theme is {theme}</p>
        <Button onClick={() => changeTheme()}>CHANGE THEME</Button>
      </div>
    )}
  </ApplicationTheme.Consumer>
)

export default SubSubTable
