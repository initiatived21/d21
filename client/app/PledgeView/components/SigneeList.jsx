import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent.js'
import Signee from './Signee';
import { DUMMY_IMAGE_PATH } from '../../lib/config';

export default class SigneeList extends ChildComponent {
  static propTypes = {
    pledge_id: PropTypes.number.isRequired,
    signatures: PropTypes.array.isRequired
  }
  render() {
    const { signatures } = this.props

    return (
      <section className="o-layout__item">
        <h2>{this.t('.heading')}</h2>
        <ol className="o-list-bare">
          {signatures.map( signature =>
            <Signee
              key={signature.id}
              id={signature.id}
              name={signature.name}
              comment={signature.reason}
              img_src={`${DUMMY_IMAGE_PATH}/signee.jpg`}
              created_at={signature.created_at}
            />
          )}
        </ol>
      </section>
    )
  }
}
