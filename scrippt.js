function closeNav() {
    document.getElementById('sidebar').style.width = "0px"
    document.querySelector('.header-one h1').style.color = '#ffffff'
    document.querySelector('.header-three i').style.color = '#ffffff'
}

function openNav() {
    document.getElementById('sidebar').style.width = "100%"
    document.querySelector('.header-one h1').style.color = '#0d0d2b'
    document.querySelector('.header-three i').style.color = '#0d0d2b'
}

function btnDisplay() {
  let actives = document.getElementById('actives')
  let acy = document.querySelector('#actives h1')
  let activess = document.getElementById('activess')
  let activesss = document.getElementById('activesss')
  let active = document.getElementById('active')

  let period = document.getElementById('period')
  let acc = document.getElementById('acc')
  let accy = document.getElementById('accy')


  actives.addEventListener('click', function() {
    actives.classList.add('man')
    activess.classList.remove('man')
    activesss.classList.remove('man')
    acc.innerHTML = `<button class="button"><i class="fa-solid fa-chevron-right"></i></button>`
    accy.innerHTML = `<button class="button"><i class="fa-solid fa-chevron-right"></i></button>`
    active.innerHTML = `<button class="mann">Start Mining<i class="fa-solid fa-chevron-right"></i></button>`
  })

  activess.addEventListener('click', function() {
    activess.classList.add('man')
    actives.classList.remove('man')
    activesss.classList.remove('man')
    active.innerHTML = `<button class="button"><i class="fa-solid fa-chevron-right"></i></button>`
    accy.innerHTML = `<button class="button"><i class="fa-solid fa-chevron-right"></i></button>`
    acc.innerHTML = `<button class="mann">Start Mining<i class="fa-solid fa-chevron-right"></i></button>`
  })

  activesss.addEventListener('click', function() {
    activesss.classList.add('man')
    activess.classList.remove('man')
    actives.classList.remove('man')
    active.innerHTML = `<button class="button"><i class="fa-solid fa-chevron-right"></i></button>`
    acc.innerHTML = `<button class="button"><i class="fa-solid fa-chevron-right"></i></button>`
    accy.innerHTML = `<button class="mann">Start Mining<i class="fa-solid fa-chevron-right"></i></button>`
  })
}



btnDisplay()


// let active = document.getElementById('active').innerHTML = 
// `<button class="mann">Start Mining<i class="fa-solid fa-chevron-right"></i></button>`

// let acc = document.getElementById('acc').innerHTML = 
// `<button class="mann">Start Mining<i class="fa-solid fa-chevron-right"></i></button>`

// let accy = document.getElementById('accy').innerHTML = 
// `<button class="mann">Start Mining<i class="fa-solid fa-chevron-right"></i></button>`