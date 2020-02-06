// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeGlyphs = document.getElementsByClassName('like-glyph')
const error = document.querySelector('#modal')

function makeErrorHidden () {
  error.classList.add('hidden') 
}

function addListenersToLike() {
  for (const glyph of likeGlyphs) {
    glyph.addEventListener('click', (e) => {
      e.preventDefault 
      if (glyph.innerHTML === EMPTY_HEART) {
        mimicServerCall()
        .then((response) => {
          e.target.innerHTML = FULL_HEART
          e.target.classList.add('activated-heart')
        })
        .catch((message) => {
          error.classList.remove('hidden')
          error.innerText = message
          setTimeout(makeErrorHidden, 5000)
        })
      } else if (e.target.innerHTML === FULL_HEART) {
        e.target.innerHTML = EMPTY_HEART
        e.target.classList.remove('activated-heart')
      }
    })
  }
}
makeErrorHidden()
addListenersToLike()

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
