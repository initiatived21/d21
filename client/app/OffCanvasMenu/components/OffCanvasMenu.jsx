import React, { PropTypes } from 'react'
import onClickOutside       from 'react-onclickoutside'
import ChildComponent       from '../../lib/Base/components/ChildComponent'
import OffCanvasMenuItem    from './OffCanvasMenuItem'
import localPath            from '../../lib/browser/localPath'
import { BLOG_URL }         from '../../lib/config'

class OffCanvasMenu extends ChildComponent {
  static propTypes = {
    controller: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.hide = this.hide.bind(this)
  }

  handleClickOutside() {
    this.hide()
  }

  hide() {
    const el = document.getElementById('site-wrapper')
    el.classList.remove('show-nav')
  }

  render() {
    const currentPage = `${this.props.controller}#${this.props.action}`

    return (
      <ul className="c-off-canvas-menu__inner">
        <OffCanvasMenuItem href={localPath('/')} active={currentPage === 'pages#home'}
          handleClick={this.hide}>
          {this.t('.items.start')}
        </OffCanvasMenuItem>
        {/*
        <OffCanvasMenuItem href={localPath('/pledges/new')} active={currentPage === 'pledges#new'}
          handleClick={this.hide}>
          {this.t('.items.new_pledge')}
        </OffCanvasMenuItem>
        <OffCanvasMenuItem href={localPath('/pledges')} active={currentPage === 'pledges#index'}
          handleClick={this.hide}>
          {this.t('.items.all_pledges')}
        </OffCanvasMenuItem>
        <OffCanvasMenuItem href={localPath('/howitworks')} active={currentPage === 'pages#howitworks'}
          handleClick={this.hide}>
          {this.t('.items.howitworks')}
        </OffCanvasMenuItem>
        <OffCanvasMenuItem href={localPath('/about')} active={currentPage === 'pages#about'}
          handleClick={this.hide}>
          {this.t('.items.about')}
        </OffCanvasMenuItem>
        <OffCanvasMenuItem href={localPath('/press')} active={currentPage === 'pages#press'}
          handleClick={this.hide}>
          {this.t('.items.press')}
        </OffCanvasMenuItem>
        */}
        <OffCanvasMenuItem href={BLOG_URL} handleClick={this.hide} external>
          {this.t('.items.blog')}
        </OffCanvasMenuItem>
      </ul>
    )
  }
}

export default onClickOutside(OffCanvasMenu)
