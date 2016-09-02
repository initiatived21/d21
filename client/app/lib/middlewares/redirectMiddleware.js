/* eslint no-console: 0 */
export default store => next => action => {
  let redirect = action.redirect || (action.meta && action.meta.redirect)
  if ( !redirect || typeof global.window == 'undefined' ) {
    return next(action)
  }

  // history.replaceState(null, redirect)
  global.window.location = redirect
}
