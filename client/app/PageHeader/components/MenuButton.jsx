import React from 'react'
import FontAwesome from 'react-fontawesome'
import swipeDetect from '../../lib/browser/swipeDetect'

export default class MenuButton extends React.Component {
  componentDidMount() {
    // Swipe functionality to show/hide off canvas menu
    const siteWrapperElement = document.getElementById('site-wrapper')

    swipeDetect(siteWrapperElement, function(direction) {
      switch(direction) {
      case 'left':
        siteWrapperElement.classList.remove('show-nav')
        break
      case 'right':
        siteWrapperElement.classList.add('show-nav')
        break
      default:
        break
      }
    })
  }

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
