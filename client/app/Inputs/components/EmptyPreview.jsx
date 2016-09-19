import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class EmptyPreview extends ChildComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    loading: PropTypes.bool
  }

  render() {
    const { type, loading } = this.props

    let previewText
    if (loading) {
      previewText = <i>{this.t('.loading')}</i>
    } else {
      previewText = this.t('.preview')
    }

    return (
      <div className="c-image-preview__placeholder">
        {type === 'avatar' ?
          <div className="c-image-preview__empty-avatar"><FontAwesome name="user" /></div> :
          null}
        <span className="c-image-preview__text">{previewText}</span>
      </div>
    )
  }
}
