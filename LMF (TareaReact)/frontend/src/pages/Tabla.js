import React from 'react';
import '../styles/components/pages/Tabla.css';
import boca from '../../src/imagenes/Teams/Boca_Juniors.png';
import nuevez from '../../src/imagenes/Teams/9z.png';
import ebro from '../../src/imagenes/Teams/EBRO_Gaming.png';
import kru from '../../src/imagenes/Teams/KRU.png';
import maycam from '../../src/imagenes/Teams/Maycam_Evolve_Gaming.png';
import malvinas from '../../src/imagenes/Teams/Malvinas.png';
import river from '../../src/imagenes/Teams/River_Plate_Gaming.png';
import leviatan from '../../src/imagenes/Teams/Leviatan.png';
import stone from '../../src/imagenes/Teams/Stone_Movistar.png';
import uala from '../../src/imagenes/Teams/Uala.png';
import undead from '../../src/imagenes/Teams/Undead_Gaming.png';
import wap from '../../src/imagenes/Teams/WAP_Esports.png';


const Tabla = (props) => {
    return (
        <article>
            <div className="banner">
                <p className="cartelbanner">Tabla de Posiciones</p>
            </div>
            <div className="tablapadre">
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={nuevez} alt="Logo 9z" />
                    </div>
                    <div className="nombreequipo">
                        <p>9z Team </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={boca} alt="Logo boca" />
                    </div>
                    <div className="nombreequipo">
                        <p>Boca Juniors</p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={ebro} alt="Logo ebro" />
                    </div>
                    <div className="nombreequipo">
                        <p>EBRO Gaming </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={kru} alt="Logo kru" />
                    </div>
                    <div className="nombreequipo">
                        <p>Krü Esports </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={leviatan} alt="Logo leviatan" />
                    </div>
                    <div className="nombreequipo">
                        <p>Leviatan Esports </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={malvinas} alt="Logo malvinas" />
                    </div>
                    <div className="nombreequipo">
                        <p>Malvina Gaming </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={maycam} alt="Logo maycam" />
                    </div>
                    <div className="nombreequipo">
                        <p>Maycam Evolve </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={river} alt="Logo river" />
                    </div>
                    <div className="nombreequipo">
                        <p>River Plate </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={stone} alt="Logo stone" />
                    </div>
                    <div className="nombreequipo">
                        <p>Stone Movistar </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={uala} alt="Logo uala" />
                    </div>
                    <div className="nombreequipo">
                        <p>Uala Pampas </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={undead} alt="Logo undead" />
                    </div>
                    <div className="nombreequipo">
                        <p>Undead Gaming </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div className="loses">
                        <p>0 L</p>
                    </div>
                </div>
                <div className="posicion">
                    <div className="circulo"></div>
                    <div className="logoequipo">
                        <img src={wap} alt="Logo wap" />
                    </div>
                    <div className="nombreequipo">
                        <p>Wap Esports </p>
                    </div>
                    <div className="wins">
                        <p>0 W</p>
                    </div>
                    <div class="loses">
                        <p>0 L</p>
                    </div>
                </div>
            </div>

        </article>
    );
}
export default Tabla;