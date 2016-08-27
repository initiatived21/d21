import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import ElementList from '../../ElementList/components/ElementList'

export default class EmptyResults extends ChildComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <h1>Versprechensübersicht</h1>
        <section className="c-pledge-list">
          <header className="c-pledge-list__header">
            <h2 className="c-pledge-list__title">
              <FontAwesome name="star" />
              {' '}
              Neueste Versprechen
            </h2>
          </header>
          <ElementList pledges={this.props.pledges} filter="active" />
        </section>
      </div>
    )
  }
}
