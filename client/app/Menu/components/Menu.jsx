import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import onClickOutside from 'react-onclickoutside'
import RootComponent from '../../lib/Base/components/RootComponent'
import MenuItem from './MenuItem'

class Menu extends RootComponent {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.hide = this.hide.bind(this)
  }

  handleClick(event) {
    event.preventDefault()

    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  handleClickOutside() {
    this.hide()
  }

  hide() {
    this.setState({
      isVisible: false
    })
  }

  render() {
    return (
      <div className="c-menu">
        <div className={(this.state.isVisible ? 'visible' : '')}>
          <a className="c-menu__close" href="#" onClick={(event) => { event.preventDefault(); this.hide()}}>
            <FontAwesome name="times" />
          </a>
          <MenuItem handleClick={this.hide}>Start</MenuItem>
          <MenuItem active handleClick={this.hide}>Ich verspreche es</MenuItem>
          <MenuItem handleClick={this.hide}>So funktioniert es</MenuItem>
          <MenuItem handleClick={this.hide}>Über uns</MenuItem>
          <MenuItem handleClick={this.hide}>Presse</MenuItem>
          <MenuItem handleClick={this.hide}>Blog</MenuItem>
        </div>

        <a className="c-menu__button" href="#" onClick={this.handleClick}>
          <FontAwesome name="bars" />
        </a>
      </div>
    )
  }
}

export default onClickOutside(Menu)
