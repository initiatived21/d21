import React from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import localPath from '../../lib/browser/localPath'

export default class SearchBar extends ChildComponent {
  render() {
    return (
      <form className="c-search-bar" action={localPath('/pledges')} method="GET">
        <input className="c-search-bar__input c-input" name="query" type="search"
          placeholder={this.t('.search_placeholder')} />
        <button title={this.t('.search_title')}
          id="search-button"
          className="o-btn c-search-bar__submit c-btn c-btn--primary"
          type="submit">
          <span className="fa fa-search"></span>
        </button>
      </form>
    )
  }
}
