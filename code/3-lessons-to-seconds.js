// ####################################
// ## ----- Lessons to Seconds ----- #
// ####################################

function lessonsToSeconds() {
  alert('There are 60 minutes in a lesson, and 60 seconds in a minute.')
  let lessonsleft = prompt('How many lessons do you have left today?')
  let seconds = lessonsleft * 3600
  alert('You have ' + seconds + ' seconds left 😰')
}
