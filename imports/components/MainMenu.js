import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

const MainMenu = () => {
  return (
    <Menu>
        <Menu.Item header>Simplon Playground</Menu.Item>
        <Menu.Item name='Github Search' active={true} onClick={this.handleItemClick} />
        <Menu.Item name='jobs' onClick={this.handleItemClick} />
        <Menu.Item name='locations' onClick={this.handleItemClick} />
    </Menu>
  )
}

export default MainMenu
