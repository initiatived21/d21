import React, { PropTypes  } from 'react'
import Select from 'react-select'
import FontAwesome from 'react-fontawesome'

import ChildComponent from '../../lib/Base/components/ChildComponent'
import BasePledgeFormObject from '../../lib/form_objects/base_pledge_form'
import PledgeWithInitiatorFormObject from '../../lib/form_objects/pledge_with_initiator_form'
import FormFor from '../../lib/Form/containers/FormFor'
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

          <Input className="c-input" attribute="title" />

          <div className='PledgeForm-Sentence'>
            {this.t('.promise.part1')}
            <Input className="c-input" attribute='content' />
            {this.t('.promise.part2')}
            <Input className="c-input" attribute='amount' type='number' />
            <Input className="c-input" attribute='who' />
            <Input className="c-input" attribute='requirement' />
          </div>

          <Input className="c-input" attribute='location' />
          <Input className="c-input" type='date' attribute='deadline' />

          <ImageInput
            className="c-image-input--pledge-image"
            attribute="image"
            previewArea={300000}
            aspectRatio={3/2}
            scaleToX={1200}
            scaleToY={800}
          />

          <Input className="c-textarea" attribute='description' type='textarea' />

          <Input type='multiselect' attribute='tag_ids'
            options={this.props.availableTags} />
        </div>

        {initiatorForm}

        <div className="o-layout u-mt u-mb-huge">
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
    return (
      <div className='c-new-pledge__user-data'>
        <h2>Ihre Daten für Ihr Nutzerkonto</h2>

        <p className="u-mb">Über Ihr Nutzerkonto verwalten Sie das Versprechen.</p>

        <ImageInput
          className="c-image-input--avatar"
          submodel="initiator"
          attribute="avatar"
          aspectRatio={1}
          scaleToX={200}
          scaleToY={200}
        />
        <Input className="c-input" submodel='initiator' attribute='name' />
        <Input
          className="c-input" submodel='initiator' attribute='email'
          type='email'
        />
        <Input
          className="c-input" submodel='initiator' attribute='password'
          type='password'
        />
      </div>
    )
  }
  renderLoginPrompt(onLinkClick) {
    return (
      <p>
        Sie haben bereits ein Nutzerkonto?
        {' '}
        <a href="#" onClick={onLinkClick}>
          Bitte loggen Sie sich ein, um Ihre Daten zu übernehmen.
        </a>
      </p>
    )
  }
}
