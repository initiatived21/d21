import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import I18n from 'i18n-js'

import TagList from '../../TagList/components/TagList'
import PledgeLocation from './PledgeLocation'
import PledgeQuote from './PledgeQuote'
import PledgeData from './PledgeData'
import SocialMediaButtons from '../../SocialMediaButtons/components/SocialMediaButtons'
import PledgeImage from './PledgeImage'
import PledgeDescription from './PledgeDescription'
import PledgeCreatedAt from './PledgeCreatedAt'

import { DOMAIN_PROD } from '../../lib/config'

export default class Pledge extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    aasm_state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    who: PropTypes.string.isRequired,
    requirement: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.object,
    signatures_count: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
  }

  getPledgePath() {
    return `/${I18n.locale}/pledges/${this.props.id}`
  }

  render() {
    const {
      title, content, amount, who, requirement, location, deadline, description, image,
      aasm_state, signatures_count, created_at, user, tags
    } = this.props

    const initiator = user.organization ? user.organization : user.name
    const pledgeImage = image.url ? (<PledgeImage src={image.url} />) : null
    const pledgeDescription = description ? (
      <PledgeDescription className="u-mt">{description}</PledgeDescription>
    ) : null

    let pledgeCreatedAt
    if (aasm_state === 'active' || aasm_state === 'successful' || aasm_state === 'failed') {
      pledgeCreatedAt = (
        <PledgeCreatedAt>{created_at}</PledgeCreatedAt>
      )
    }

    return (
      <div className="u-2/3@l u-pr-small@l">
        <article className="c-pledge">
          <TagList tags={tags} />
          <PledgeLocation>{location}</PledgeLocation>
          <h1>
            {title}
          </h1>
          <PledgeQuote
            imagePath={user.avatar.url}
            initiatorName={initiator}
            content={content}
            amount={amount}
            who={who}
            requirement={requirement}
          />
          <PledgeData
            state={aasm_state}
            initiator={initiator}
            amount={amount}
            deadline={deadline}
            signatures_count={signatures_count}
          />
          <SocialMediaButtons
            className="u-mt-small u-mb"
            url={DOMAIN_PROD + this.getPledgePath()}
          />
          {pledgeImage}
          {pledgeDescription}
          {pledgeCreatedAt}
        </article>
      </div>
    )
  }
}
