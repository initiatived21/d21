import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class PledgeDescription extends ChildComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.childrenWithLineBreaks = this.childrenWithLineBreaks.bind(this)
  }

  childrenWithLineBreaks() {
    const rows = this.props.children.split(/\r\n|\n/g),
      num_rows = rows.length,
      rowsWithLineBreaks = []

    rows.forEach(function(row, index) {
      rowsWithLineBreaks.push(row)
      if (index !== num_rows - 1) {
        rowsWithLineBreaks.push(<br/>)
      }
    })

    return rowsWithLineBreaks
  }

  render() {
    const { className } = this.props

    let combinedClassName = 'c-pledge__description'
    if (className) {
      combinedClassName += ` ${className}`
    }

    return (
      <p className={combinedClassName}>
        {this.childrenWithLineBreaks()}
      </p>
    )
  }
}
