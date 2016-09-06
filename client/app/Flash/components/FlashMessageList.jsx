import React, { PropTypes } from 'react'
import FlashMessage from './FlashMessage'

const FlashMessageList = ({ messages, onMessageExpire }) => (
  <ul className="c-flash-list">
    {
      messages.map(message =>
        <FlashMessage
          key={message.id}
          {...message}
          onExpire={() => onMessageExpire(message.id)}
        />
      )
    }
  </ul>
)

FlashMessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    removed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onMessageExpire: PropTypes.func.isRequired
}

export default FlashMessageList
