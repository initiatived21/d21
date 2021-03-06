import React, { PropTypes } from 'react'

import openWindow from '../../lib/browser/openWindow'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import FacebookButton from './FacebookButton.jsx'
import TwitterButton from './TwitterButton.jsx'
import GoogleplusButton from './GoogleplusButton.jsx'
import XingButton from './XingButton.jsx'
import LinkedinButton from './LinkedinButton.jsx'

export default class SocialMediaButtons extends ChildComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    const anchor = e.currentTarget
    openWindow(anchor.href)
  }

  render() {
    const { url, className } = this.props
    const commonProps = {
      url,
      handleClick: this.handleClick
    }

    let combinedClassName = 'c-social-media o-list-inline'
    if (className) {
      combinedClassName += ` ${className}`
    }

    return (
      <ul className={combinedClassName}>
        <FacebookButton {...commonProps} />
        <TwitterButton {...commonProps} />
        <GoogleplusButton {...commonProps} />
        <XingButton {...commonProps} />
        <LinkedinButton {...commonProps} />
      </ul>
    )
  }
}

SocialMediaButtons.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string
}
