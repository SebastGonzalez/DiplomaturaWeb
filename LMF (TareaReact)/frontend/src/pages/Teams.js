import React from 'react';
import '../styles/components/pages/Teams.css';
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

const Teams = (props) => {
    return (
        <article>
            <div className="banner">
                <p className="cartelbanner">Equipos</p>
            </div>
            <div className="contenedorpadre">
                <a className="negrita" target="_blank" href="">
                    <div className="contequipo">
                        <img src={nuevez} alt="Logo 9z"/>
                        <p>9z Team</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="">
                    <div className="contequipo">
                        <img src={boca} alt="Logo boca"/>
                        <p>Boca Juniors</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="">
                    <div className="contequipo">
                        <img src={ebro} alt="Logo Ebro"/>
                        <p>Ebro Gaming</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="">
                    <div className="contequipo">
                        <img src={kru} alt="Logo kru"/>
                        <p>Krü Esports</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="">
                    <div className="contequipo">
                        <img src={leviatan} alt="Logo Leviatan"/>
                        <p>Leviatan Esports</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="">
                    <div className="contequipo">
                        <img src={malvinas} alt="Logo Malvinas"/>
                        <p>Malvinas Gaming</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="">
                    <div className="contequipo">
                        <img src={maycam} alt="Logo Maycam"/>
                        <p>Maycam Evolve</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="">
                    <div className="contequipo">
                        <img src={river} alt="Logo River"/>
                        <p>River Plate</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/Stone_Movistar">
                    <div className="contequipo">
                        <img src={stone} alt="Logo Stone"/>
                        <p>Stone Movistar</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/Ual%C3%A1_Pampas">
                    <div className="contequipo">
                        <img src={uala} alt="Logo Uala"/>
                        <p>Uala Pampas</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/Undead_Gaming">
                    <div className="contequipo">
                        <img src={undead} alt="Logo Undead"/>
                        <p>Undead Gaming</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/WAP_Esports">
                    <div className="contequipo">
                        <img src={wap} alt="Logo Wap"/>
                        <p>Wap Esports</p>
                    </div>
                </a>
            </div>
        </article>
    );
}
export default Teams;