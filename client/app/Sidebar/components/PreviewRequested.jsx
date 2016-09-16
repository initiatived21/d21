import React from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import localPath from '../../lib/browser/localPath'

export default class PreviewRequested extends ChildComponent {
  render() {
    return (
      <div className="c-preview c-preview--requested">
        <p>{this.t('.explanation')}</p>

        <p><b>{this.t('.next_steps.question')}</b></p>
        <p>{this.t('.next_steps.editorial_staff')}</p>
        <p>
          {this.t('.next_steps.part1')}
          <a href={localPath('/users/profile')}>
            {this.t('.next_steps.user_account')}
          </a>
          {this.t('.next_steps.part2')}
        </p>

        <p><b>{this.t('.improve_success.title')}</b></p>
        <p>{this.t('.improve_success.post_updates')}</p>
        <p>{this.t('.improve_success.social_media')}</p>
      </div>
    )
  }
}
