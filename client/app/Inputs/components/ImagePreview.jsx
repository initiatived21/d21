import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import EmptyPreview from './EmptyPreview'

export default class ImagePreview extends ChildComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    url: PropTypes.string,
    loading: PropTypes.bool
  }

  render() {
    const { type, url, loading } = this.props

    const className = `c-image-preview c-image-preview--${type}`

    let modalElement
    if (url) {
      modalElement = <img src={url} />
    } else {
      modalElement = <EmptyPreview type={type} loading={loading} />
    }

    return (
      <div className={className}>
        {modalElement}
      </div>
    )
  }
}
