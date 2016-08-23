import React from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import I18n from 'i18n-js'
import { FAQ_PATH } from '../../lib/config'

export default class PledgeFormHelp extends ChildComponent {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleClick = this.handleClick.bind(this)
    //this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { controls } = this.props

    const isOpen = controls ? this.state.isOpen : true

    let className = 'c-help', handleClick, chevronName
    if (controls) {
      className += ' c-help--controls'
      handleClick = this.handleClick
    }
    if (!isOpen) {
      className += ' c-help--closed'
      chevronName = 'chevron-down'
    }
    else {
      chevronName = 'chevron-up'
    }

    return(
      <aside className={className}>

        <h2 className="c-help__title" onClick={handleClick} >
          {this.t('.heading')}
          {' '}
          <FontAwesome className="c-help__chevron" name={chevronName} />
        </h2>

        <div className="c-help__wrapper">

          <h3 className="c-help__subheading">
            {this.t('.step', { step: 1 })}
          </h3>
          <p className="c-help__paragraph">
            {this.t('.text.step1')}
          </p>

          <h3 className="c-help__subheading">
            {this.t('.step', { step: 2 })}
          </h3>
          <p className="c-help__paragraph">
            {this.t('.text.step2')}
          </p>

          <h3 className="c-help__subheading">
            {this.t('.step', { step: 3 })}
          </h3>
          <p className="c-help__paragraph">
            {this.t('.text.step3')}
          </p>

          <div className="c-help__faq o-media o-media--flush u-mt">
            <FontAwesome className="o-media__img" name="info" />
            <div className="o-media__body">
              <h3>
                {this.t('.further_questions')}
              </h3>
              <p>
                <a href={`/${I18n.locale}${FAQ_PATH}`}>
                  {this.t('.faq_link')}
                </a>
              </p>
            </div>
          </div>

        </div>

      </aside>
    )
  }
}
