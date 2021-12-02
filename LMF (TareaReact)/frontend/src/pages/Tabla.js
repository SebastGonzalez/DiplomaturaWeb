import React from 'react';
import '../styles/components/pages/Tabla.css';
import boca from '../imagenes/Teams/Boca_Juniors.png';
import casla from '../imagenes/Teams/CASLA_Esports.png';
import ebro from '../imagenes/Teams/EBRO_Gaming.png';
import globant from '../imagenes/Teams/Globant_Emerald.png';
import maycam from '../imagenes/Teams/Maycam_Evolve_Gaming.png';
import naguara from '../imagenes/Teams/Naguara_Team.png';
import river from '../imagenes/Teams/River_Plate_Gaming.png';
import savage from '../imagenes/Teams/Savage_Esports.png';
import stone from '../imagenes/Teams/Stone_Movistar.png';
import uala from '../imagenes/Teams/Uala_New_Pampas.png';
import undead from '../imagenes/Teams/Undead_Gaming.png';
import wap from '../imagenes/Teams/WAP_Esports.png';

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
                        <img src={boca} alt="Logo CASLA" />
                    </div>
                    <div className="nombreequipo">
                        <p>Boca Juniors </p>
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
                        <img src={casla} alt="Logo CASLA" />
                    </div>
                    <div className="nombreequipo">
                        <p>San Lorenzo</p>
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
                        <img src={ebro} alt="Logo CASLA" />
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
                        <img src={globant} alt="Logo CASLA" />
                    </div>
                    <div className="nombreequipo">
                        <p>Globant Emerald </p>
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
                        <img src={maycam} alt="Logo CASLA" />
                    </div>
                    <div className="nombreequipo">
                        <p>Maycam Evolve Gaming </p>
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
                        <img src={naguara} alt="Logo CASLA" />
                    </div>
                    <div className="nombreequipo">
                        <p>Naguara Team </p>
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
                        <img src={river} alt="Logo CASLA" />
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
                        <img src={savage} alt="Logo CASLA" />
                    </div>
                    <div className="nombreequipo">
                        <p>Savage Esports </p>
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
                        <img src={stone} alt="Logo CASLA" />
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
                        <img src={uala} alt="Logo CASLA" />
                    </div>
                    <div className="nombreequipo">
                        <p>Uala New Pampas </p>
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
                        <img src={undead} alt="Logo CASLA" />
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
                        <img src={wap} alt="Logo CASLA" />
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