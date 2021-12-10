import logo from './logo.svg';
import react from 'react';
import './App.css';
import navBar from './components/navBar'

function App() {
 return (
  <div className="App">

         <navBar/>
         <body>
	<header>
		<nav class="navegacion">
			<ul class="menu">
				<li><a href="#">Inicio</a></li>
				<li><a href="#">Nosotros</a></li>
				<li><a href="#">Servicios</a>
					<ul class="submenu">
						<li><a href="#">Servicio #1</a></li>
						<li><a href="#">Servicio #2</a></li>
						<li><a href="#">Servicio #3</a></li>
					</ul>
				</li>
				<li><a href="#">Contacto</a></li>
			</ul>
		</nav>
	</header>
</body>
      
  </div>
  );
  }

export default App;
