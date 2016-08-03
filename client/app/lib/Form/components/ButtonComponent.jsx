import React, { PropTypes, Component } from 'react'
import Select from 'react-select'
import I18n from 'i18n-js'

export default class Input extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    commit: PropTypes.string,
    className: PropTypes.string,
    combinedClassName: PropTypes.string.isRequired,
  }

  render() {
    const {
      children, combinedClassName, onClick
    } = this.props


    return (
      <button className={combinedClassName} onClick={onClick} type='submit'>
        {children}
      </button>
    )
  }
}
