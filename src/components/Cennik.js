import React from "react";

const Cennik = (props) => {
    return <section className="cennik">
        <p className="opis mobileOnly">{props.opis}</p>
        <div className="cennikInner">
            <div className="buttonDiv">
                <button className="messengerBtn">
                    <a href="https://m.me/burskisprzatanie" target="_blank">
                        <img src={require("../../static/img/messenger.png")} alt="messenger" />
                        <h3>Napisz na messengerze</h3>
                    </a>
                </button>

                <button className="phoneBtn">
                    <a href="tel:+48728879491">
                        <img src={require("../../static/img/whatsapp.png")} alt="telefon" />
                        <h3>Zadzwoń do nas</h3>
                    </a>
                </button>
            </div>
            <h3>Kliknij w wybrany przycisk i skontaktuj się z nami. Odpowiemy najszybciej jak to możliwe!</h3>
        </div>
    </section>
};

export default Cennik;
