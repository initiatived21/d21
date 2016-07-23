import React, { PropTypes  } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import I18n from 'i18n-js'
import { FAQ_PATH } from '../../lib/config'

export default class PledgeFormHelp extends ChildComponent {
  static propTypes = {
  }

  render() {
    return(
      <aside className="c-help">

        <h2 className="c-help__title">
          So funktioniert es…
        </h2>

        <div className="c-help__wrapper">

          <h3 className="c-help__subheading">Schritt 1:</h3>
          <p className="c-help__paragraph">
            Sie veröffentlichen Ihr Versprechen.
          </p>

          <h3 className="c-help__subheading">Schritt 2:</h3>
          <p className="c-help__paragraph">
            Andere Akteure unterzeichnen Ihr Versprechen.
          </p>

          <h3 className="c-help__subheading">Schritt 3:</h3>
          <p className="c-help__paragraph">
            Sammelt ein Versprechen ausreichend Unterstützer, wird es umgesetzt.
          </p>

          <h3 className="c-help__subheading">Schritt 4:</h3>
          <p className="c-help__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
          </p>

          <h3 className="c-help__subheading">Schritt 5:</h3>
          <p className="c-help__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
          </p>

          <div className="c-help__faq o-media o-media--flush u-mt">
            <svg className="o-media__img" width="40" height="40" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z" />
            </svg>
            <div className="o-media__body">
              <h3>Sie haben weitere Fragen?</h3>
              <p><a href={`/${I18n.locale}${FAQ_PATH}`}>Schauen Sie in unseren FAQ nach.</a></p>
            </div>
          </div>

        </div>

      </aside>
    )
  }
}
