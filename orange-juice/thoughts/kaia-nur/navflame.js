//const navtemplate = document.createElement('template');
console.log('well, at least this is working!')
/*navtemplate.innerHTML = `
    <!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <style>
        .navbar {
            --bs-navbar-padding-x: 2%
        }
        </style>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="http://aathreyakadambi.rf.gd/">AK</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/blog/">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/notes/">Notes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/lib/">Nalanda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Resume.pdf">Resume</a>
        </li>
      </ul>
      <!--<form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>-->
    </div>
  </nav>`;*/

class NavFlame extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        //const shadow = this.attachShadow({ mode: 'open' });
        //shadow.appendChild(navtemplate.content)
        this.innerHTML = `
        <!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <style>
            .navbar {
                --bs-navbar-padding-x: 2%;
                opacity: 0.8; 
                filter:(opacity=80);
            }

            .navbar-brand {
              font-family: 'Arima', sans-serif;
            }

            a {
              font-family: 'Arima', sans-serif;
            }

            h1 {
              padding: 0;
              margin: 0;
            }

            h2 {
              padding: 0;
              margin: 0;
            }

            h2 {
              font-size: 18px;
            }

            #theme-toggler {
                background: url('http://aathreyakadambi.rf.gd/res/inverted-flame.png');
                background-size: cover;
                aspect-ratio: 1 / 1;
                background-color: #ffffff;
                border: none;
                display: inline-block;
                border-radius: 50%;
                box-shadow: 0px 0px 2px 2px #aaaaaa;
                padding: 12px 12px;
            }

            #theme-toggler:active {
                box-shadow: inset 2px 2px 10px #aaaaaa;
            }
            </style>
                <nav class="navbar sticky-top navbar-expand-md bg-body-tertiary transparent">
        <a class="navbar-brand" href="https://www.ocf.berkeley.edu/~aathreyak/orange-juice/thoughts/kaia-nur/"><h1>Kaia Nür</h1></a>
      
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" id="nav-photos" href="https://www.ocf.berkeley.edu/~aathreyak/orange-juice/thoughts/kaia-nur/photos"><h2>Photos</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-scenes" href="https://www.ocf.berkeley.edu/~aathreyak/orange-juice/thoughts/kaia-nur/scenes"><h2>Scenes</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-proj" href="https://www.ocf.berkeley.edu/~aathreyak/orange-juice/thoughts/kaia-nur/about"><h2>About</h2></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-oj" href="https://www.ocf.berkeley.edu/~aathreyak/orange-juice/"><h2>🧃</h2></a>
            </li>
          </ul>
          <!--<form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>-->
        </div>

        <button type="button" id="theme-toggler" onclick="modeSwitch()"></button>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
      </nav>`;
    }
}

customElements.define('nav-flame', NavFlame);

let modeSwitch = function() {
    if (parseInt(sessionStorage.getItem("light-theme"))) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        $('#theme-toggler').css('background', 'url(http://aathreyakadambi.rf.gd/res/BlueFlame-compressed.jpg)'); // Flame.jpg OR dark-2.svg
        $('#theme-toggler').css('background-color', '#000000');
        $('#theme-toggler').css('background-size', 'cover');
        sessionStorage.setItem("light-theme", 0);
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        $('#theme-toggler').css('background', 'url(http://aathreyakadambi.rf.gd/res/inverted-flame.png)'); // inverted-flame.png OR light.svg
        $('#theme-toggler').css('background-color', '#ffffff');
        $('#theme-toggler').css('background-size', 'cover');
        sessionStorage.setItem("light-theme", 1);
    }
};

window.addEventListener('DOMContentLoaded', () => {
  const theme = sessionStorage.getItem('light-theme') == 0 ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', theme)
  if (theme === 'dark') {
    $('#theme-toggler').css('background', 'url(http://aathreyakadambi.rf.gd/res/BlueFlame-compressed.jpg)'); // Flame.jpg OR dark-2.svg
    $('#theme-toggler').css('background-color', '#000000');
    $('#theme-toggler').css('background-size', 'cover');
  }
  else {
    $('#theme-toggler').css('background', 'url(http://aathreyakadambi.rf.gd/res/inverted-flame.png)'); // inverted-flame.png OR light.svg
    $('#theme-toggler').css('background-color', '#ffffff');
    $('#theme-toggler').css('background-size', 'cover');
  }
  console.log('[navflame] DOMContentLoaded script successfully ran.')
})