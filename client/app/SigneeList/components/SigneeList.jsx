import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import Signee from './Signee'

export default class SigneeList extends ChildComponent {
  static propTypes = {
    pledge_id: PropTypes.number.isRequired,
    signatures: PropTypes.array.isRequired,
    showPrivateData: PropTypes.bool,
  }
  render() {
    const { signatures, showPrivateData } = this.props

    let signeeListOrText
    if (signatures.length > 0) {
      signeeListOrText = (
        <ol className="c-signee-list o-list-bare">
          {signatures.map( (signature, index) =>
            <Signee
              key={signature.id}
              id={index + 1}
              name={signature.name}
              email={signature.email}
              reason={signature.reason}
              img_src={''}
              created_at={signature.created_at}
              anonymous={signature.anonymous}
              organization={signature.organization}
              contact_person={signature.contact_person}
              showPrivateData={showPrivateData}
            />
          )}
        </ol>
      )
    }
    else {
      signeeListOrText = (<p>{this.t('.no_signees')}</p>)
    }

    return (
      <section className="">
        <h2>{this.t('.heading')}</h2>
        {signeeListOrText}
      </section>
    )
  }
}
