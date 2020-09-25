import React from 'react';

const DlaczegoMy = () => {
    return (<section id="dlaczegoMy" className="dlaczegoMy">
        <h2>Dlaczego <span className="blue">my</span>?</h2>
        <div className="dlaczegoMyInner">
            <div className="text text1">
                <img className="photo photo1" src={require("../../static/img/ubezpieczenie.png")} alt="ubezpieczenie" />
                <h3>Bezpieczeństwo</h3>
                <p>Jesteśmy ubezpieczeni na kwotę <span className="bold">200&nbsp;000 zł</span> i kontrolujemy pracowników. Minimalizujemy Twoje ryzyko. Zatrudnij nas i śpij spokojnie.</p>
            </div>
            <div className="text text2">
                <img className="photo photo2" src={require("../../static/img/czas.png")} alt="czas" />
                <h3>Niezawodność</h3>
                <p>Rozpoczynamy pracę w umówionym czasie. Twoje zlecenie będzie wykonane <span className="bold">terminowo</span>.</p>
            </div>
            <div className="text text3">
                <img className="photo photo3" src={require("../../static/img/reka.png")} alt="fachowo" />
                <h3>Komfort</h3>
                <p>Dopasowujemy usługę do <span className="bold">Twoich potrzeb</span> i realizujemy ją tak, abyś czuł, że "działamy w tle".</p>
            </div>
        </div>
    </section>);
};

export default DlaczegoMy;
