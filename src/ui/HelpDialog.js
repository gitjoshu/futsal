import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitleClose from './elements/DialogTitleClose';
// Main tools icons
import CursorDefault from 'mdi-material-ui/CursorDefault';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LinkIcon from '@mui/icons-material/Link';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
// Drawer menu icons
import OpenInNew from '@mui/icons-material/OpenInNew';
import MovieCreation from '@mui/icons-material/MovieCreation';
import Delete from '@mui/icons-material/Delete';
import Save from '@mui/icons-material/Save';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Palette from '@mui/icons-material/Palette';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
// Draw tools
import VectorLine from 'mdi-material-ui/VectorLine';
import ShapeSquarePlus from 'mdi-material-ui/ShapeSquarePlus';
import ShapeOvalPlus from 'mdi-material-ui/ShapeOvalPlus';
import ArrowLeft from 'mdi-material-ui/ArrowLeft';
import ArrowRight from 'mdi-material-ui/ArrowRight';
import Minus from 'mdi-material-ui/Minus';
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal';
import TextFields from '@mui/icons-material/TextFields';
import SportsSoccer from '@mui/icons-material/SportsSoccer';
// Animation tool
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Add from '@mui/icons-material/Add';


class HelpDialog extends Component {
	constructor(props, context) {
		super(props, context);
		this.Show = this.Show.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			open: false
		}
	}

	Show() {
		this.setState({open: true});
	}
	
	handleClose() {
		this.setState({open: false});
	}
	
	render() {
		return (
			<Dialog open={this.state.open} onClose={this.handleClose} scroll='paper' fullWidth={true} maxWidth="xl">
				<DialogTitleClose id="help-dialog-title" onClick={this.handleClose}>Ayuda del tablero de tácticas de fútbol sala</DialogTitleClose>
				<DialogContent dividers={true}>
					<h1>Ayuda</h1>
					<p>El tablero de tácticas de fútbol sala es una herramienta para visualizar ejercicios de práctica o tácticas de juego, incluye opción para hacer visualización estática o animada.</p>
					<p>La pista es una versión escalada de una pista de fútbol sala real.</p>
					<p><b>Para utilizar las opciones de guardado y carga es necesario ser usuario registrado.</b></p>
					<h2><MenuIcon />Menú principal</h2>
					<p>Ubicado en la esquina superior izquierda tiene las siguientes opciones</p>
					<ul>
						<li><OpenInNew/> <b>Nuevo</b> visualización al estado predeterminado, y crear nueva</li>
						<li><MovieCreation/> <b>Añadir animación</b> agrega animación, disponible cuando la visualización no la tiene.</li>
						<li><Delete/> <b>Eliminar animación</b> elimina la animación de la visualización dejando solo el primer cuadro para la visualización estática</li>
						<li><CloudDownloadIcon/> <b>Explorar mis animaciones</b> abre el cuadro de diálogo para cargar/eliminar visualizaciones ya guardadas</li>
						<li><Save/> <b>Guardar</b> guarda la visualización en su cuenta de usuario, disponible solo cuando está conectado</li>
						<li><PhotoCamera /> <b>Captura de pantalla</b> guarda la captura de pantalla</li>
						<li><Palette/> <b>Paleta de color</b> abre el editor de colores para jugadores, balones y elementos adicionales</li>
					</ul>
					<h2>Herramientas de la aplicación</h2>
					<p>En la esquina superior derecha de una pantalla se encuentran las herramientas principales, los íconos de izquierda a derecha son:</p>
					<ul>
						<li><CursorDefault/> Modo de dibujo actual</li>
						<li><HelpCenterIcon/> Ayuda</li>
						<li><LinkIcon/> Herramienta para compartir, activa una vez que se guarda la visualización</li>
						<li><FullscreenIcon/> Entrar / Salir de pantalla completa</li>
						<li><Avatar>GL</Avatar> Usuario activa actual</li>
					</ul>
					<h3><CursorDefault/> Modo de dibujo</h3>
					<p>Este menú tiene todas las herramientas de dibujo y edición disponibles.</p>
					<ul>
						<li><CursorDefault/> <b>Seleccionar / Mover</b> para seleccionar y mover elementos en el terreno de juego</li>
						<li><Delete/> <b>Eliminar</b> elimina solo un elemento y vuelve a cambiar a la herramienta Seleccionar/Mover</li>
						<li><b>Superposición de tono</b> es un rectángulo que muestra diferentes tamaños en la parte superior de la pista de fútbol sala,<br /> las opciones disponibles son
							<ul>
								<li><b>Ninguno</b> ninguna superposición seleccionada</li>
								<li><b>Ejercicio</b> campo de ejercicio más pequeño</li>
								<li><b>Baloncesto</b> corte</li>
								<li><b>Vóleibol</b> corte</li>
							</ul>
						</li>
						<li><SportsSoccer/> <b>Extras</b> son elementos opcionales que se pueden colocar en la cancha
							<ul>
								<li>Portería</li>
								<li>Portería pequeña</li>
								<li>Escalera</li>
								<li>Cono</li>
								<li>Bandera</li>
							</ul>
						</li>
						<li><Palette/> <b>Color</b> color de dibujo seleccionado actualmente</li>
						<li><VectorLine/> <b>Dibujar linea</b> es para dibujar líneas y curvas, cada línea se puede modificar para que sea curva,<br />
							Las líneas y curvas pueden tener flechas:<br />
							<ul>
								<li><ArrowRight/> Al final</li>
								<li><ArrowLeft/> Al principio</li>
							</ul>
							El patrón de línea puede ser:
							<ul>
								<li><Minus /> Continua</li>
								<li><DotsHorizontal /> Discontinua</li>
							</ul>
						</li>
						<li><ShapeSquarePlus/> <b>Dibujar cuadrado</b> dibuja un cuadrado, al mantener presionada la tecla shift dibuja un cuadrado del mismo ancho y alto</li>
						<li><ShapeOvalPlus/> <b>Dibujar elipse</b> dibuja una elipse, cuando se mantiene presionada la tecla Mayús, se dibuja un círculo</li>
						<li><TextFields /> <b>Escribir texto</b> permite agregar etiquetas de texto, que pueden ser de diferentes tamaños:
							<ul>
								<li>Extra pequeña</li>
								<li>Pequeña</li>
								<li>Normal</li>
								<li>Grande</li>
								<li>Extra grande</li>
							</ul>
						</li>
					</ul>
					<p>Cada elemento se puede modificar usando la herramienta seleccionar/mover, use el botón derecho del mouse para seleccionar editar en el elemento, las opciones son:</p>
					<ul>
						<li>Movido</li>
						<li>Redimensionado</li>
						<li>Girado</li>
					</ul>
					<p><b>NOTA:</b> Algunos elementos como porterías, porterías pequeñas o conos no se pueden redimensionar porque tienen un tamaño fijo.</p>

					<h2>Jugadores y balones</h2>
					<p>Ubicados en la esquina inferior izquierda de una pantalla, de izquierda a derecha, se encuentran:</p>
					<ul>
						<li>Jugadores</li>
						<li>Balones (justo al lado de los jugadores)</li>
					</ul>
					<p>Los jugadores y las pelotas se pueden arrastrar a la ubicación deseada en el campo. Simplemente haga clic en un jugador o una pelota con el botón izquierdo del mouse y arrástrelo a la ubicación deseada.<br/>
					<b>NOTA:</b> Los jugadores y las pelotas son los únicos elementos que se pueden animar.</p>
					<p>Al hacer clic con el botón derecho en el jugador colocado en el campo, se abre un cuadro de diálogo para:</p>
					<ul>
						<li>Asignar nombre de jugador</li>
						<li>Asignar número de jugador</li>
						<li>Retirar a la jugadora de la pista</li>
					</ul>
					<p>El clic derecho en la pelota colocada en el campo permite quitar la pelota del campo.</p>

					<h2>Animación</h2>
					<p>Como ya se dijo, solo los jugadores y los balones son elementos animados, todos los demás elementos son estáticos.</p>
					<p>La animación consta de fotogramas clave, cada fotograma clave tiene la posición de los balones y los jugadores.</p>
					<p>Cuando el jugador o la pelota tienen una posición diferente en dos fotogramas clave, se muestra la ruta entre las posiciones.<br/>
					Durante la reproducción, el jugador o la pelota se mueven a lo largo de la ruta mostrada.<br />
					Al editar la animación, las posiciones anteriores del cuadro clave del jugador o la pelota se muestran con transparencia para tener una ligera distinción en el cuadro clave actualmente activo.
					</p>
					<p>La herramienta de animación se muestra cuando la animación se crea desde el menú principal y consta de:</p>
					<ul>
						<li>Navegación de fotogramas clave <ArrowLeft/> fotograma clave actualmente visiblee <ArrowRight/></li>
						<li>Fotograma clave <Add/> agregar y <Delete/> eliminar iconos</li>
						<li>Fotograma clave selección de duración en segundos, es decir para cada cuadro clave en animación</li>
						<li><PlayCircleOutlineIcon /> Botón de inicio de reproducción que abre el control de reproducción</li>
					</ul>
					<p>La herramienta de reproducción de animación es simple y se explica por sí misma.</p>
				</DialogContent>
				{/* <DialogActions>
					<Button onClick={this.handleClose}>Close</Button>
				</DialogActions> */}
			</Dialog>
	  	);
	}
}

export default HelpDialog;