import React, { PropTypes } from 'react';
import I18n                 from 'i18n-js';
import ChildComponent       from '../../lib/Base/components/ChildComponent.js';

export default class Avatar extends ChildComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const { imagePath, name, className } = this.props

    const avatarName = `Avatar ${name}`

    let combinedClassName = 'c-avatar'
    if (className) {
      combinedClassName += ` ${className}`
    }

    const avatar = imagePath ?
      (<img className={combinedClassName} src={imagePath} width="89" height="89" alt={avatarName} />)
      :
      (<svg className={combinedClassName} xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87">
        <title>{avatarName}</title>
        <g fill="none" fill-rule="evenodd">
          <path fill="#FEFEFE" d="M86.92 43.472c0 23.995-19.452 43.447-43.448 43.447-23.997 0-43.45-19.452-43.45-43.447C.023 19.476 19.476.024 43.473.024c23.996 0 43.448 19.452 43.448 43.448"/>
          <path stroke="#B2B2B1" d="M86.92 43.472c0 23.995-19.452 43.447-43.448 43.447-23.997 0-43.45-19.452-43.45-43.447C.023 19.476 19.476.024 43.473.024c23.996 0 43.448 19.452 43.448 43.448z"/>
          <path fill="#D8D8D8" d="M65.487 18.735a3.55 3.55 0 1 1-.382 7.09 3.549 3.549 0 0 1-3.354-3.736 3.549 3.549 0 0 1 3.736-3.354"/>
          <path fill="#B3B3B3" d="M68.401 32.403l-13.243.014-.014-13.242z"/>
          <path fill="#D8D8D8" d="M55.686 33.913l13.243-.014L63.6 48.192zM39.341 23.99l14.283-5.362.014 13.243zM54.813 75.27a3.55 3.55 0 0 1-4.922.997 3.551 3.551 0 1 1 4.922-.997"/>
          <path fill="#B3B3B3" d="M41.553 70.853l6.701-11.424 11.423 6.701z"/>
          <path fill="#D8D8D8" d="M46.697 59.127l-6.7 11.424-9.619-11.841zM63.537 50.068l-2.618 15.03-11.424-6.7zM12.233 32.691a3.55 3.55 0 0 0-.996 4.922 3.551 3.551 0 1 0 .997-4.922"/>
          <path fill="#B3B3B3" d="M21.373 27.827l6.701 11.424-11.424 6.7z"/>
          <path fill="#D8D8D8" d="M28.794 57.126l-11.842-9.619 11.424-6.7zM29.106 38.008l-6.7-11.424 15.03-2.617z"/>
        </g>
      </svg>)

    return avatar
  }
}
