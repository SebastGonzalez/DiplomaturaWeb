import React from 'react';
import '../styles/components/pages/Home.css';

const Home = (props) => {
    return (
        <article>
            <div className="banner">
                <p className="cartelbanner">Bienvenido</p>
            </div>
            <div className="indexgeneral">
                <div className="cuerpoindex">
                    <div className="info1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis ab iure delectus, eligendi
                            inventore voluptates ea veritatis repellendus laudantium at obcaecati tenetur blanditiis! Est
                            quaerat error doloremque quas ducimus.</p>
                    </div>
                    <div className="info2">
                        <div className="padreformato">
                            <p>Formato</p>
                            <div className="formatito">
                                <ul>
                                    <li>Participan 12 equipos.</li>
                                    <li>Todos las partidas son al mejor de 1</li>
                                    <li>Los mejores 8 equipos clasifican a los PlayOffs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cuerpoindex2">
                    <div className="ultcamp">
                        <p>Ultimo Campeon:</p>
                        <div className="cuadrocamp">
                            <img src="imagenes/Teams/Globant_Emerald.png" alt="Logo Globant_Emerald"/>
                            <p>Globant Emerald</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default Home;