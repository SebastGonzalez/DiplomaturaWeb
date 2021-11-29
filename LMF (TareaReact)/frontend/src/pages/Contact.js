import React from 'react';
import '../styles/components/pages/Contact.css';

const Home = (props) => {
    return (
        <article>
        <div className="banner">
            <p className="cartelbanner">Dejanos tu mensaje!</p>
        </div>
        <div className="padrecontacto">
            <div className="formu">
            <form action="" className="formulario">
                <p className="item">
                    <label for="nombre">Nombre: </label>
                    <input type="text"/>
                </p>
                <p className="item">
                    <label for="apellido">Apellido: </label>
                    <input type="text"/>
                </p>
                <p className="item">
                    <label for="nombre">Usuario: </label>
                    <input type="text"/>
                </p>
                <p className="item">
                    <label for="email">Mail: </label>
                    <input type="text"/>
                </p>
                <p className="item">
                    <label for="region">Region: </label>
                    <select name="">
                        <option value="">-</option>
                        <option value="">LAS</option>
                        <option value="">LAN</option>
                        <option value="">OTROS</option>
                    </select>
                </p>
                <p className="item">
                    <label for="">Mensaje:</label>
                    <textarea name=""></textarea>
                </p>
                <p className="item">
                    <input type="submit" value="Enviar" class="boton"/>
                </p>
            </form>
        </div>
        </div>
    </article>
    );
}
export default Home;