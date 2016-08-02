/**
 *  Redirects to specified path
 */

function redirectTo(url) {
  if (typeof window !== 'undefined') {
    window.location = url
  }
  else
  {
    throw new Error('Redirection not possible in server environment')
  }
}

export default redirectTo
