/**
 *  Gets the full days from current date to given date string
 */

function daysTill(dateStr) {
  const date = Date.parse(dateStr),
    now = Date.now()

  let days = Math.floor((date - now) / 1000 / 60 / 60 / 24)
  if (days < 0) {
    days = 0
  }

  return days
}

export default daysTill
