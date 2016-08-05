import React, { PropTypes  } from 'react'
import FontAwesome from 'react-fontawesome'
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
            <FontAwesome className="o-media__img" name="info" />
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
