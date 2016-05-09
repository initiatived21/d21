import React, { PropTypes  } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';
import FormFor from '../../lib/Form/containers/FormFor';
import Input from '../../lib/Form/containers/Input';

export default class PledgeForm extends ChildComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.newPledge = new this.props.formObject(this.props.editedPledge);
    this.props.ensurePledgeObjectExistence(
      this.newPledge, this.props.editedPledge);
  }

  render() {
    return(
      <FormFor
        object={this.newPledge}
        formData={this.props.formData}
        onSubmit={this.props.onSubmit}>

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

          <div>[Bild]</div>
          <div>[Themenbereiche]</div>

          <button type='button' disabled='true' >
            Entwurf speichern
          </button>
        </div>

        <div className='PledgeForm-UserData'>
          <Input submodel='initiator' attribute='name' />
          <Input submodel='initiator' attribute='email' type='email' />
          <Input submodel='initiator' attribute='password' type='password' />
        </div>

        <button type='submit'>
          {this.t('.submit')}
        </button>
      </FormFor>
    )
  }
};
