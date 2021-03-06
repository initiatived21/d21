import React, { PropTypes  } from 'react'
import { Form, InputSet, Input, Label, Button, Errors } from 'rform'
import FontAwesome from 'react-fontawesome'
import MediaQuery from 'react-responsive'
import I18n from 'i18n-js'

import ChildComponent from '../../lib/Base/components/ChildComponent'
import BasePledgeFormObject from '../../lib/form_objects/base_pledge_form'
import PledgeWithInitiatorFormObject from '../../lib/form_objects/pledge_with_initiator_form'
import PledgeContentInputs from './PledgeContentInputs'
import ImageInput from '../../Inputs/wrappers/ImageInputWrapper'
import SelectInput from '../../Inputs/wrappers/SelectInputWrapper'
import DateInput from '../../Inputs/wrappers/DateInputWrapper'
import Tooltip from '../../Tooltip/components/Tooltip'
import UserForm from '../../UserForm/components/UserForm'
import PledgeFormHelp from './PledgeFormHelp'
import { BREAKPOINT_L } from '../../lib/config'

export default class PledgeForm extends ChildComponent {
  static propTypes = {
    form: PropTypes.object.isRequired,
    availableTags: PropTypes.array.isRequired,
    onLinkClick: PropTypes.func.isRequired,
    userLoggedIn: PropTypes.bool.isRequired,
  }

  render() {
    const {
      onLinkClick, userLoggedIn, form, afterResponse, formId
    } = this.props

    const formObjectClass =
      userLoggedIn ? BasePledgeFormObject : PledgeWithInitiatorFormObject

    const initiatorForm = userLoggedIn ? null : this.renderInitiatorForm()
    const loginPrompt = userLoggedIn ? null : this.renderLoginPrompt(onLinkClick)

    return(
      <Form
        multipart ajax requireValid
        className="c-new-pledge"
        formObjectClass={formObjectClass}
        id={formId}
        {...form}
        afterResponse={afterResponse}
      >
        <h1>{this.t('.heading')}</h1>

        {loginPrompt}

        <div className='c-new-pledge__pledge-data'>

          <PledgeContentInputs />

          <MediaQuery maxWidth={BREAKPOINT_L - 1}>
            <PledgeFormHelp controls />
          </MediaQuery>

          <div className="o-layout o-layout--small u-mb">
            <div className="o-layout__item u-1/4@m u-mb-tiny">
              <Label attribute="location" />
            </div>
            <div className="c-input o-layout__item u-2/5@m">
              <div className="o-marginal">
                <Input className="o-marginal__content" attribute="location" />
                <Tooltip className="o-marginal__note">
                  {this.t('.tooltip.location')}
                </Tooltip>
              </div>
              <Errors attribute="location" />
            </div>
          </div>

          <div className="o-layout o-layout--small u-mb">
            <div className="o-layout__item u-1/4@m u-mb-tiny">
              <Label attribute="deadline" />
            </div>
            <div className="c-input o-layout__item u-2/5@m">
              <div className="o-marginal">
                <DateInput className="o-marginal__content"
                  attribute="deadline"
                  placeholder={this.t('rform.pledge.deadline.placeholder')}
                />
                <Tooltip className="o-marginal__note">
                  {this.t('.tooltip.deadline')}
                </Tooltip>
              </div>
              <Errors attribute='deadline' />
            </div>
          </div>

          <div className="o-layout o-layout--small u-mb">
            <div className="o-layout__item u-1/4@m u-mb-tiny">
              <Label attribute="title" />
            </div>
            <InputSet ariaLabelOnly
              wrapperClassName="c-input o-layout__item u-3/4@m"
              attribute="title"
            />
          </div>

          <div className="o-layout o-layout--small u-mb">
            <div className="o-layout__item u-1/4@m u-mb-tiny">
              <Label attribute="description" />
            </div>
            <InputSet ariaLabelOnly
              wrapperClassName="c-textarea o-layout__item u-3/4@m"
              attribute="description" type="textarea"
            />
          </div>

          <div className="o-layout o-layout--small u-mb">
            <div className="o-layout__item u-1/4@m u-mb-tiny">
              <div className="o-marginal">
                <Label className="o-marginal__content" attribute="image" />
                <Tooltip className="o-marginal__note">
                  {this.t('.tooltip.image')}
                </Tooltip>
              </div>
            </div>
            <div className="o-layout__item u-3/4@m">
              <ImageInput
                type="pledge-image"
                attribute="image"
                previewArea={300000}
                aspectRatio={3/2}
                scaleToX={1200}
                scaleToY={800}
              />
              <Errors attribute='image' />
            </div>
          </div>

          <div className="o-layout o-layout--small">
            <div className="o-layout__item u-1/4@m u-mb-tiny">
              <Label attribute="tag_ids" />
            </div>
            <div className="o-layout__item u-3/4@m">
              <SelectInput
                attribute='tag_ids'
                options={this.props.availableTags}
                placeholder={this.t('rform.pledge.tag_ids.placeholder')}
              />
              <Errors attribute='tag_ids' />
            </div>
          </div>
        </div>

        {initiatorForm}

        <div className="o-layout u-mt-large">
          <div className="o-layout__item u-1/3@m u-mb@s">
            <Button
              className="c-new-pledge__save-draft o-btn o-btn--small c-btn c-btn--primary u-mb-small"
              commit='save_draft'
            >
              <FontAwesome name="check" />
              {' '}
              {this.t('.save_draft')}
            </Button>
            <p>
              {this.t('.draft_explanation')}
            </p>
          </div>
          <div className="o-layout__item u-2/3@m">
            <Button
              className="c-new-pledge__preview o-btn o-btn--small c-btn c-btn--secondary u-mb-small"
            >
              <FontAwesome name="eye" />
              {' '}
              {this.t('.preview')}
            </Button>
            <p>
              {this.t('.preview_explanation')}
            </p>
          </div>
        </div>
      </Form>
    )
  }

  renderInitiatorForm() {
    const { onLinkClick, userLoggedIn } = this.props

    const loginPrompt = userLoggedIn ? null : this.renderLoginPrompt(onLinkClick)

    return (
      <div className='c-new-pledge__user-data'>
        <h2>{this.t('.account.heading')}</h2>

        <p className="u-mb-small">
          {this.t('.account.explanation')}
        </p>

        {loginPrompt}

        <UserForm
          asSubmodel='initiator'
          labelContent={I18n.t('rform.initiator.password.label')}
        />
      </div>
    )
  }

  renderLoginPrompt(onLinkClick) {
    return (
      <p className="u-mb">
        {this.t('.account.have_one')}
        {' '}
        <a className="c-new-pledge__link" href="#" onClick={onLinkClick}>
          {this.t('.account.login')}
        </a>
      </p>
    )
  }
}
