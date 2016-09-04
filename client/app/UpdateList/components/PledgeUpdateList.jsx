import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'
import PledgeUpdate         from './PledgeUpdate'

export default class PledgeUpdateList extends ChildComponent {
  static propTypes = {
    updates: PropTypes.array.isRequired,
  }

  render() {
    const { updates } = this.props

    let updateListOrText
    if (updates.length > 0) {
      updateListOrText = (
        <ol className="o-list-bare">
          {updates.map( update =>
            <PledgeUpdate key={update.id} update={update} />
          )}
        </ol>
      )
    }
    else {
      updateListOrText = (<p>{this.t('.no_updates')}</p>)
    }

    return (
      <section className="c-update-list">
        <h2>{this.t('.heading')}</h2>

        {updateListOrText}
      </section>
    )
  }
}
