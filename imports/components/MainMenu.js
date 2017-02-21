import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

const MainMenu = () => {
  return (
    <Menu>
        <Menu.Item header href="/">Simplon Playground</Menu.Item>
        <Menu.Item
          href="/githubsearch"
          name='Github Search'/>
    </Menu>
  )
}

export default MainMenu
