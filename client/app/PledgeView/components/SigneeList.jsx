import React, { PropTypes } from 'react'
import I18n from 'i18n-js'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import Signee from './Signee'

export default class SigneeList extends ChildComponent {
  static propTypes = {
    pledge_id: PropTypes.number.isRequired,
    signatures: PropTypes.array.isRequired
  }
  render() {
    const { signatures } = this.props

    return (
      <section className="o-layout__item">
        <h3>Unterzeichner</h3>
        <ol className="o-list-bare">
          {signatures.map( signature =>
            <Signee
              key={signature.id}
              id={signature.id}
              name={signature.name}
              comment={signature.reason}
              img_src="/images/max_mustermann.jpg"
              created_at={signature.created_at}
            />
          )}
        </ol>
      </section>
    )
  }
}
