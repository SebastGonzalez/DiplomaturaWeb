import React from 'react';
import '../styles/components/pages/Noticias.css';

const Noticias = (props) => {
    return (
        <article>
            <div className="banner">
                <p className="cartelbanner">Noticias</p>
            </div>
            <div className="padrenoticia">
                <div className="noticia">
                    <div className="imagnot">
                        <img src="imagenes/Teams/Globant_Emerald.png" alt="foto noticia"/>
                    </div>
                    <div className="contenido">
                        <h2> Titulo de la noticia</h2>
                        <p className="textnot"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error impedit enim ratione
                            numquam nesciunt dolor et, facere nisi, sint reprehenderit deleniti esse minus incidunt. Beatae
                            voluptates soluta ex fuga.</p>
                        <p className="fechanot"> 20/10/21</p>
                    </div>
                </div>
                <div className="noticia">
                    <div className="imagnot">

                    </div>
                    <div className="contenido">
                        <h2> Titulo de la noticia 2</h2>
                        <p className="textnot"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error impedit enim ratione
                            numquam nesciunt dolor et, facere nisi, sint reprehenderit deleniti esse minus incidunt. Beatae
                            voluptates soluta ex fuga.</p>
                        <p className="fechanot"> 20/10/21</p>
                    </div>
                </div>
                <div className="noticia">
                    <div className="imagnot">
                        <img src="imagenes/Teams/Globant_Emerald.png" alt="foto noticia"/>
                    </div>
                    <div className="contenido">
                        <h2> Titulo de la noticia 3</h2>
                        <p className="textnot"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error impedit enim ratione
                            numquam nesciunt dolor et, facere nisi, sint reprehenderit deleniti esse minus incidunt. Beatae
                            voluptates soluta ex fuga.</p>
                        <p className="fechanot"> 20/10/21</p>
                    </div>
                </div>
                <div className="noticia">
                    <div className="imagnot">

                    </div>
                    <div className="contenido">
                        <h2> Titulo de la noticia 4</h2>
                        <p className="textnot"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error impedit enim ratione
                            numquam nesciunt dolor et, facere nisi, sint reprehenderit deleniti esse minus incidunt. Beatae
                            voluptates soluta ex fuga.</p>
                        <p className="fechanot"> 20/10/21</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default Noticias;