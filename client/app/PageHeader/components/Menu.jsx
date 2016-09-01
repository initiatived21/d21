import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import onClickOutside from 'react-onclickoutside'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import MenuItem from './MenuItem'
import localPath from '../../lib/browser/localPath'
import { BLOG_URL } from '../../lib/config'

class Menu extends ChildComponent {
  static propTypes = {
    controller: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  }

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
    const currentPage = `${this.props.controller}#${this.props.action}`

    return (
      <div className="c-menu">
        <div className={(this.state.isVisible ? 'visible' : '')}>
          <a className="c-menu__close" href="#"
            onClick={(event) => { event.preventDefault(); this.hide()}}>
            <FontAwesome name="times" />
          </a>
          <MenuItem href={localPath('/')} active={currentPage === 'pages#home'}
            handleClick={this.hide}>
            {this.t('.items.start')}
          </MenuItem>
          <MenuItem href={localPath('/pledges/new')} active={currentPage === 'pledges#new'}
            handleClick={this.hide}>
            {this.t('.items.new_pledge')}
          </MenuItem>
          <MenuItem href={localPath('/howitworks')} active={currentPage === 'pages#howitworks'}
            handleClick={this.hide}>
            {this.t('.items.howitworks')}
          </MenuItem>
          <MenuItem href={localPath('/about')} active={currentPage === 'pages#about'}
            handleClick={this.hide}>
            {this.t('.items.about')}
          </MenuItem>
          <MenuItem href={localPath('/press')} active={currentPage === 'pages#press'}
            handleClick={this.hide}>
            {this.t('.items.press')}
          </MenuItem>
          <MenuItem href={BLOG_URL} handleClick={this.hide} external>
            {this.t('.items.blog')}
          </MenuItem>
        </div>

        <a className="c-menu__button o-btn c-btn c-btn--primary" href="#" onClick={this.handleClick}>
          <FontAwesome name="bars" />
        </a>
      </div>
    )
  }
}

export default onClickOutside(Menu)
