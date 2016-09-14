import React, { PropTypes } from 'react'
import { FormButton } from 'rform'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import localPath from '../../lib/browser/localPath'

export default class LoggedIn extends ChildComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    onLinkClick: PropTypes.func.isRequired
  }

  render() {
    const { currentUser, onLinkClick } = this.props

    return(
      <div>
        <p>
          <b>
            {this.t('.welcome')}<br />
            { currentUser.name }
          </b>
        </p>

        <hr className="c-ruler" />

        <nav>
          <ul className="o-list-bare">
            <li className="u-mb-small">
              <a className="c-session__link" href={localPath('/users/profile')}
                onClick={onLinkClick}
                >
                {this.t('.my_data')}
              </a>
            </li>
            <li>
              <a className="c-session__link" href={localPath('/users/profile#your_pledges')}
                onClick={onLinkClick}
                >
                {this.t('.my_pledges')}
              </a>
            </li>
          </ul>
        </nav>

        <FormButton
          className="c-session__submit o-btn o-btn--full c-btn c-btn--primary u-mt"
          action={localPath('/users/sign_out')}
          method="DELETE"
        >
          <FontAwesome name="sign-out" />
          {' '}
          {this.t('.logout')}
        </FormButton>
      </div>
    )
  }
}
