import React from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import I18n from 'i18n-js'
import { FAQ_PATH } from '../../lib/config'

export default class PledgeFormHelp extends ChildComponent {
  render() {
    return(
      <aside className="c-help">

        <h2 className="c-help__title">
          {this.t('.heading')}
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

          <h3 className="c-help__subheading">
            {this.t('.step', { step: 4 })}
          </h3>
          <p className="c-help__paragraph">
            {this.t('.text.step4')}
          </p>

          <h3 className="c-help__subheading">
            {this.t('.step', { step: 5 })}
          </h3>
          <p className="c-help__paragraph">
            {this.t('.text.step5')}
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
