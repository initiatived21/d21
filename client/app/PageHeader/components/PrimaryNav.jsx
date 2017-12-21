import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import PrimaryNavItem from './PrimaryNavItem'
import localPath from '../../lib/browser/localPath'
import { BLOG_URL } from '../../lib/config'

export default class PrimaryNav extends ChildComponent {
  static propTypes = {
    controller: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  }

  render() {
    const currentPage = `${this.props.controller}#${this.props.action}`

    // <PrimaryNavItem active={currentPage === 'pledges#new'} href={localPath('/pledges/new')}>
    // {this.t('.new_pledge_link')}
    // </PrimaryNavItem>

    return (
      <nav className="c-primary-nav">
        <ul className="o-list-inline">
          <PrimaryNavItem active={currentPage === 'pages#home'} href={localPath('/')}>
            {this.t('.start_link')}
          </PrimaryNavItem>
          <PrimaryNavItem active={currentPage === 'pledges#index'} href={localPath('/pledges')}>
            {this.t('.all_pledges_link')}
          </PrimaryNavItem>
          <PrimaryNavItem active={currentPage === 'pages#howitworks'} href={localPath('/howitworks')}>
            {this.t('.howitworks_link')}
          </PrimaryNavItem>
          <PrimaryNavItem active={currentPage === 'pages#about'} href={localPath('/about')}>
            {this.t('.about_link')}
          </PrimaryNavItem>
          {/*
          <PrimaryNavItem active={currentPage === 'pages#press'} href={localPath('/press')}>
            {this.t('.press_link')}
          </PrimaryNavItem>
          */}
          <PrimaryNavItem href={BLOG_URL} external>
            {this.t('.blog_link')}
          </PrimaryNavItem>
        </ul>
      </nav>
    )
  }
}
