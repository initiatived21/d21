import React, { PropTypes } from 'react'
import I18n                 from 'i18n-js'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'
import PledgeUpdate         from './PledgeUpdate'

export default class PledgeUpdateList extends ChildComponent {
  static propTypes = {
    updates: PropTypes.array.isRequired,
  }

  render() {
    const { updates } = this.props

    return (
      <section className="c-update-list o-layout__item u-2/3@l">
        <h2>{this.t('.heading')}</h2>
        <ol className="o-list-bare">
          {updates.map( update =>
            <PledgeUpdate key={update.id} update={update} />
          )}
        </ol>
      </section>
    )
  }
}
