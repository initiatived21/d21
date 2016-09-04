import React from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class MenuButton extends React.Component {
  handleClick(event) {
    event.preventDefault()

    const el = document.getElementById('site-wrapper')
    el.classList.toggle('show-nav')
  }

  render() {
    return (
      <a className="c-page-head__menu-button o-btn c-btn c-btn--primary"
        href="#" onClick={this.handleClick}>
        <FontAwesome name="bars" />
      </a>
    )
  }
}
