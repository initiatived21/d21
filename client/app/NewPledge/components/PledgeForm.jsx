import React, { PropTypes  } from 'react'
import Select from 'react-select'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import NewPledgeFormObject from '../../lib/form_objects/new_pledge_form';
import FormFor from '../../lib/Form/containers/FormFor'
import Input from '../../lib/Form/containers/Input'

export default class PledgeForm extends ChildComponent {
  static propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    availableTags: PropTypes.array.isRequired,
    // newPledge: PropTypes.object.isRequired,
  }

  // componentWillMount() {
  //   this.props.ensurePledgeObjectExistence(
  //     this.props.newPledge, this.props.editedPledge,
  //     this.props.existingAttributes
  //   )
  // }

  render() {
    return(
      <section>
        <div className='o-wrapper'>
          <h2>Ein Versprechen abgeben</h2>
          <FormFor multipart
            object={NewPledgeFormObject}
            formData={this.props.formData}>

            <div className='PledgeForm-PledgeData'>

              <div className='PledgeForm-Sentence'>
                {this.t('.promise.part1')}
                <Input attribute='content' />
                {this.t('.promise.part2')}
                <Input attribute='amount' type='number' />
                <Input attribute='who' />
                <Input attribute='requirement' />
              </div>

              <Input attribute='location' />
              <Input type='date' attribute='deadline' />
              <Input attribute='description' type='textarea' />

              <Input type='multiselect' attribute='tag_ids'
                options={this.props.availableTags} />

              <button type='button' disabled='true' >
                Entwurf speichern
              </button>
            </div>

            <div className='PledgeForm-UserData'>
              <Input submodel='initiator' attribute='avatar' type='file' />
              <Input submodel='initiator' attribute='name' />
              <Input submodel='initiator' attribute='email' type='email' />
              <Input submodel='initiator' attribute='password' type='password' />
            </div>

            <button type='submit'>
              {this.t('.submit')}
            </button>
          </FormFor>
        </div>
      </section>
    )
  }
}
