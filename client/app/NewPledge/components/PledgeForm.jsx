import React, { PropTypes  } from 'react'
import Select from 'react-select'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import BasePledgeFormObject from '../../lib/form_objects/base_pledge_form'
import PledgeWithInitiatorFormObject from '../../lib/form_objects/pledge_with_initiator_form'
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'
import ImageUploadComponent from '../../lib/Form/components/ImageUploadComponent'

export default class PledgeForm extends ChildComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    availableTags: PropTypes.array.isRequired,
    onLinkClick: PropTypes.func.isRequired,
    currentUser: PropTypes.object,
  }

  render() {
    const { onLinkClick, currentUser, onSaveDraftClick } = this.props

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
            <Input className="c-input" attribute='requirement' />
          </div>

          <Input className="c-input" attribute='location' />
          <Input className="c-input" type='date' attribute='deadline' />
          <Input className="c-textarea" attribute='description' type='textarea' />

          <Input type='multiselect' attribute='tag_ids'
            options={this.props.availableTags} />
        </div>

        {initiatorForm}

        <div className="o-layout u-mt u-mb-huge">
          <div className="o-layout__item u-1/3">
            <button
              className="c-new-pledge__save-draft o-btn o-btn--small u-mb-small"
              type="submit" name='commit' value='save_draft'
            >
              <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" fill="#fff"/></svg>
              {` ${this.t('.save_draft')}`}
            </button>
            <p>
              Speichert Entwurf in Ihrem Nutzerkonto.
            </p>
          </div>
          <div className="o-layout__item u-2/3">
            <button
              className="c-new-pledge__preview o-btn o-btn--small u-mb-small"
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z" fill="#fff"/></svg>
              {' '}
              Zur Vorschau
            </button>
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

        <ImageUploadComponent />
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
