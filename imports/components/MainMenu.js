import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react'

const MainMenu = () => {
  return (
    <Menu>
        <Menu.Item header href="/">Simplon Playground</Menu.Item>
        <Menu.Item href="/articles/new">Nouvel article</Menu.Item>
        <Menu.Item
          href="/githubsearch"
          name='Github Search'/>
        <Menu.Item position="right"><LoginButtons align="right"/></Menu.Item>
    </Menu>
  )
}

export default MainMenu
