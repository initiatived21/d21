import React, { PropTypes } from 'react'
import { FormButton } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import { termsPath, privacyPath } from '../../lib/browser/paths'

export default class PreviewExplanation extends ChildComponent {
  static propTypes = {
    isDraft: PropTypes.bool.isRequired,
    activateAction: PropTypes.string.isRequired,
  }

  render() {
    const { isDraft, activateAction, userConfirmed } = this.props

    let statusInfo
    if (isDraft) {
      if (userConfirmed) {
        statusInfo = (
          <div>
            <p>Ihr Versprechen wird von unserer Redaktion geprüft und innerhalb von ein bis drei
            Werktagen veröffentlicht. Sie können Ihr Versprechen in Ihrem Nutzerkonto verwalten.</p>
            <p>Mit dem Abschicken stimmen Sie unseren <a href={termsPath()}>AGB</a> und
            der <a href={privacyPath()}>Datenschutzerklärung</a> zu.</p>

            <a className="o-btn c-btn c-btn--tertiary u-mt-small" href="">
              <FontAwesome name="pencil" />
              {' '}
              Bearbeiten
            </a>

            <FormButton
              className="o-btn o-btn--full c-btn c-btn--primary u-mt-small"
              action={activateAction}
              method='PATCH'
            >
              <FontAwesome name="thumbs-o-up" />
              {' '}
              {this.t('.status.submit_for_approval')}
            </FormButton>
          </div>
        )
      } else {
        statusInfo = <p>{this.t('.status.confirm_email')}</p>
      }
    } else {
      statusInfo = <p>this.t('.status.reviewed')</p>
    }

    return (
      <div className="c-sidebar c-sidebar--tertiary">
        <h2 className="c-sidebar__title">
          {this.t('.title')}
        </h2>

        <div className="c-sidebar__wrapper">
          <p className="u-mb-small">{this.t('.preview')}</p>
          {statusInfo}
        </div>
      </div>
    )
  }
}
