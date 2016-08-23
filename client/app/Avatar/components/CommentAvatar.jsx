import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class CommentAvatar extends ChildComponent {
  static propTypes = {
    name: PropTypes.string,
    imagePath: PropTypes.string,
    large: PropTypes.bool,
    className: PropTypes.string,
  }

  render() {
    const { imagePath, name, large, className } = this.props

    let avatarName
    if (name) {
      avatarName = `Avatar ${name}`
    }
    else {
      avatarName = this.t('.title')
    }

    let combinedClassName = 'c-avatar c-avatar--comment'
    if (large) {
      combinedClassName += ' c-avatar--large'
    }
    if (className) {
      combinedClassName += ` ${className}`
    }

    const avatar = imagePath ?
      (<img className={combinedClassName} src={imagePath} width="43" height="43" alt={avatarName} />)
      :
      (<svg className={combinedClassName} width="43" height="43" viewBox="0 0 43 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>{avatarName}</title>
        <defs>
        <path d="M21.5,43 C33.3741221,43 43,33.3741221 43,21.5 C43,16.527185 41.3117299,11.9486866 38.4770901,8.30640523 C34.5431573,3.25162186 28.4013071,0 21.5,0 C9.62587788,0 0,9.62587788 0,21.5 C0,33.3741221 9.62587788,43 21.5,43 Z" id="path-1"></path>
        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="43" height="43" fill="white">
            <use xlinkHref="#path-1"></use>
        </mask>
        </defs>
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Avatar-Anonym">
            <g>
                <g id="Page-1" transform="translate(5.000000, 4.000000)" fill="#B3B3B3">
                    <path d="M16.4215941,38.1310871 C12.4750311,38.2457077 8.64389823,37.1333239 5.26399188,35.1810153 C3.27973978,34.0357486 1.51013033,32.5898376 0,30.8949556 C0.571426447,29.620036 1.58453978,28.9163406 2.79226246,28.5659021 C5.07510634,27.9054242 7.26732333,27.0344954 9.49388314,26.2377881 C9.91362878,26.087466 10.1196857,26.0301557 10.4115997,25.5942215 C10.9715786,24.7589942 10.8647342,23.9359805 10.8990771,23.0782049 L8.6534379,18.3223885 C7.83111804,17.8009586 7.85687516,16.7975584 7.40946447,16.1511733 C6.86761101,15.3676192 7.43999142,14.5117225 6.897184,13.9141921 C5.87548496,12.7877156 6.96109981,12.0774436 7.56496115,11.6875455 C8.1392495,11.3173773 7.8292101,11.3324095 7.77006413,10.9058705 C7.35318039,7.92291572 7.42091208,4.98129955 9.83349552,2.69452416 C10.6911122,1.88184515 10.3839347,1.20915363 9.55302912,0 C11.3045132,0.340103817 12.4931565,0.732820379 13.6903856,0.758187239 C14.8904765,0.783554098 16.0934293,0.327890144 17.302106,0.289370099 C19.1880994,0.228301734 20.2937476,1.52295107 21.3307101,2.85142289 C21.5110099,3.08254316 21.6913098,3.42922357 21.9278937,3.48371534 C23.8902045,3.93374222 24.7420974,5.12692412 24.6323911,7.0886279 C24.5713372,8.16531015 24.578015,9.25138753 24.6409769,10.3280698 C24.6695959,10.8156772 24.8813766,11.3023451 25.0626304,11.7692832 C25.278227,12.323596 25.3764857,13.5233545 25.163751,14.5164201 C24.9519702,15.5047881 25.0073003,16.8125906 24.3824517,17.3969679 C22.8952166,18.7893266 22.6242899,20.6824459 21.7571335,22.3106225 C20.7955344,24.1154276 21.188569,25.2325089 22.9305134,26.2049052 C24.2632058,26.9489997 25.7246838,27.3905709 27.1813919,27.8312027 C29.254363,28.4587976 31.3321039,29.0732393 32.43966,31.0227294 C28.115326,35.7043242 22.7196866,37.947882 16.4215941,38.1310871" id="Fill-1"></path>
                </g>
                <use id="Oval-3" stroke="#999999" mask="url(#mask-2)" strokeWidth="2" xlinkHref="#path-1"></use>
            </g>
          </g>
        </g>
      </svg>)

    return avatar
  }
}
