import React, { PropTypes  } from 'react'
import Select from 'react-select'
import FontAwesome from 'react-fontawesome'

import ChildComponent from '../../lib/Base/components/ChildComponent'
import BasePledgeFormObject from '../../lib/form_objects/base_pledge_form'
import PledgeWithInitiatorFormObject from '../../lib/form_objects/pledge_with_initiator_form'
import FormFor from '../../lib/Form/containers/FormFor'
import Label from '../../lib/Form/components/Label'
import Input from '../../lib/Form/containers/Input'
import Button from '../../lib/Form/containers/Button'
import ImageInput from '../../lib/Form/containers/ImageInput'

export default class PledgeForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    availableTags: PropTypes.array.isRequired,
    onLinkClick: PropTypes.func.isRequired,
    currentUser: PropTypes.object,
  }

  render() {
    const { onLinkClick, currentUser } = this.props

    const formObject = currentUser ? BasePledgeFormObject : PledgeWithInitiatorFormObject

    const initiatorForm = currentUser ? null : this.renderInitiatorForm()
    const loginPrompt = currentUser ? null : this.renderLoginPrompt(onLinkClick)

    return(
      <FormFor multipart
        className="c-new-pledge"
        ajax={true}
        object={formObject}
        formData={this.props.formData}>

        <h1>Ein Versprechen abgeben</h1>

        {loginPrompt}

        <div className='c-new-pledge__pledge-data'>

          <div className='PledgeForm-Sentence'>
            {this.t('.promise.part1')}
            <Input className="c-input" attribute='content' />
            {this.t('.promise.part2')}
            <Input className="c-input" attribute='amount' type='number' />
            <Input className="c-input" attribute='who' />
            <Input className="c-input u-mb-small" attribute='requirement' />
          </div>


          <div className="o-layout o-layout--small">
            <div className="o-layout__item u-1/4 u-mb-small">
              <Label attribute="location" />
            </div>
            <Input className="c-input o-layout__item u-3/4 u-mb-small" attribute='location' noLabel />

            <div className="o-layout__item u-1/4 u-mb-small">
              <Label attribute="deadline" />
            </div>
            <Input className="c-input o-layout__item u-3/4 u-mb-small" type='date' attribute='deadline'
              noLabel />

            <div className="o-layout__item u-1/4 u-mb-small">
              <Label attribute="title" />
            </div>
            <Input className="c-input o-layout__item u-3/4 u-mb-small" attribute="title" noLabel />

            <div className="o-layout__item u-1/4 u-mb-small">
              <Label attribute="description" />
            </div>
            <Input className="c-textarea o-layout__item u-3/4 u-mb-small" attribute="description"
              type="textarea" noLabel />

            <div className="o-layout__item u-1/4 u-mb-small">
              <Label attribute="image" />
            </div>
            <ImageInput
              className="c-image-input--pledge-image o-layout__item u-3/4 u-mb-small"
              attribute="image"
              previewArea={300000}
              aspectRatio={3/2}
              scaleToX={1200}
              scaleToY={800}
            />

            <div className="o-layout__item u-1/4">
              <Label attribute="tag_ids" />
            </div>
            <Input className="c-input o-layout__item u-3/4" type='multiselect'
              attribute='tag_ids' options={this.props.availableTags} noLabel
            />
          </div>
        </div>

        {initiatorForm}

        <div className="o-layout u-mt-large u-mb-huge">
          <div className="o-layout__item u-1/3">
            <Button
              className="c-new-pledge__save-draft o-btn o-btn--small c-btn c-btn--primary u-mb-small"
              commit='save_draft'
            >
              <FontAwesome name="check" />
              {` ${this.t('.save_draft')}`}
            </Button>
            <p>
              Speichert Entwurf in Ihrem Nutzerkonto.
            </p>
          </div>
          <div className="o-layout__item u-2/3">
            <Button
              className="c-new-pledge__preview o-btn o-btn--small c-btn c-btn--secondary u-mb-small"
            >
              <FontAwesome name="eye" />
              {' '}
              Zur Vorschau
            </Button>
            <p>
              Im nächsten Schritt können Sie Ihr Versprechen noch einmal
              überprüfen, bevor Sie es abschicken.
            </p>
          </div>
        </div>
      </FormFor>
    )
  }

  renderInitiatorForm() {
    const { onLinkClick, currentUser } = this.props

    const loginPrompt = currentUser ? null : this.renderLoginPrompt(onLinkClick)

    return (
      <div className='c-new-pledge__user-data'>
        <h2>Ihre Daten für Ihr Nutzerkonto</h2>

        <p className="u-mb-small">Über Ihr Nutzerkonto verwalten Sie das Versprechen.</p>

        {loginPrompt}

        <div className="o-layout">
          <div className="o-layout__item u-1/4 u-mb-small">
            <Label submodel="initiator" attribute="avatar" />
          </div>
          <ImageInput
            className="c-image-input--avatar o-layout__item u-3/4 u-mb-small"
            submodel="initiator"
            attribute="avatar"
            aspectRatio={1}
            scaleToX={200}
            scaleToY={200}
          />

          <div className="o-layout__item u-1/4 u-mb-small">
            <Label submodel="initiator" attribute="name" />
          </div>
          <Input className="c-input o-layout__item u-3/4 u-mb-small" submodel='initiator' attribute='name'
            noLabel />

          <div className="o-layout__item u-1/4 u-mb-small">
            <Label submodel="initiator" attribute="email" />
          </div>
          <Input
            className="c-input o-layout__item u-3/4 u-mb-small" submodel='initiator' attribute='email'
            type='email' noLabel
          />

          <div className="o-layout__item u-1/4">
            <Label submodel="initiator" attribute="password" />
          </div>
          <Input
            className="c-input o-layout__item u-3/4" submodel='initiator' attribute='password'
            type='password' noLabel
          />
        </div>
      </div>
    )
  }
  renderLoginPrompt(onLinkClick) {
    return (
      <p className="u-mb-small">
        Sie haben bereits ein Nutzerkonto?
        {' '}
        <a href="#" onClick={onLinkClick}>
          Bitte loggen Sie sich ein, um Ihre Daten zu übernehmen.
        </a>
      </p>
    )
  }
}
