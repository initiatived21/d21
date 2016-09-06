import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FlashMessage from './FlashMessage'
import { TRANSITION_TIME } from '../../lib/config'

const FlashMessageList = ({ messages, onMessageExpire }) => (
  <ul className="c-flash-list">
    <ReactCSSTransitionGroup
      transitionName="c-flash-list__item-"
      transitionEnterTimeout={TRANSITION_TIME}
      transitionLeaveTimeout={TRANSITION_TIME}
    >
      {
        messages.map(message =>
          <FlashMessage
            key={message.id}
            {...message}
            onExpire={() => onMessageExpire(message.id)}
          />
        )
      }
    </ReactCSSTransitionGroup>
  </ul>
)

FlashMessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onMessageExpire: PropTypes.func.isRequired
}

export default FlashMessageList
