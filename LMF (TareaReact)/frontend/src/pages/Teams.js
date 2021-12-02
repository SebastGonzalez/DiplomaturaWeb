import React from 'react';
import '../styles/components/pages/Teams.css';
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

const Teams = (props) => {
    return (
        <article>
            <div className="banner">
                <p className="cartelbanner">Equipos</p>
            </div>
            <div className="contenedorpadre">
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/Boca_Juniors_Gaming">
                    <div className="contequipo">
                        <img src={boca} alt="Logo Boca"/>
                        <p>Boca Juniors</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/CASLA_Esports">
                    <div className="contequipo">
                        <img src={casla} alt="Logo CASLA"/>
                        <p>San Lorenzo de Almagro</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/EBRO_Gaming">
                    <div className="contequipo">
                        <img src={ebro} alt="Logo Ebro"/>
                        <p>Ebro Gaming</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/Globant_Emerald">
                    <div className="contequipo">
                        <img src={globant} alt="Logo Globant_Emerald"/>
                        <p>Globant Emerald</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/Maycam_Evolve_Gaming">
                    <div className="contequipo">
                        <img src={globant} alt="Logo MayCam"/>
                        <p>MayCam Evolve Gaming</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/Naguara_Team">
                    <div className="contequipo">
                        <img src={naguara} alt="Logo Naguara"/>
                        <p>Naguara Team</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/River_Plate_Gaming">
                    <div className="contequipo">
                        <img src={river} alt="Logo River"/>
                        <p>River Plate</p>
                    </div>
                </a>
                <a className="negrita" target="_blank" href="https://lol.fandom.com/wiki/Savage_Esports">
                    <div className="contequipo">
                        <img src={savage} alt="Logo savage"/>
                        <p>Savage Esports</p>
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
                        <p>Uala New Pampas</p>
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