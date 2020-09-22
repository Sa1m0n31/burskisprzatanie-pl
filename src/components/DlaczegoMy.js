import React from 'react';

const DlaczegoMy = () => {
    return (<section className="dlaczegoMy">
        <h2>Dlaczego <span className="blue">my</span>?</h2>
        <div className="dlaczegoMyInner">
            <div className="number number1 desktopOnly">1</div>
            <img className="border border1 desktopOnly" src={require("../../static/img/border.png")} alt="border" />
            <div className="number number2 desktopOnly">2</div>
            <img className="border border2 desktopOnly" src={require("../../static/img/border.png")} alt="border" />
            <div className="number number3 desktopOnly">3</div>
            <img className="border border3 desktopOnly" src={require("../../static/img/border.png")} alt="border" />
            <div className="number number4 desktopOnly">4</div>

            <img className="photo photo1" src={require("../../static/img/ubezpieczenie.png")} alt="ubezpieczenie" />
            <img className="photo photo2" src={require("../../static/img/czas.png")} alt="czas" />
            <img className="photo photo3" src={require("../../static/img/reka.png")} alt="fachowo" />
            <img className="photo photo4" src={require("../../static/img/plyny.png")} alt="plyny" />

            <div className="text text1">
                <h3>Ubezpieczenie</h3>
                <p>Nasza firma posiada ubezpieczenie na kwotę <span className="bold">200&nbsp;000 zł</span></p>
            </div>
            <div className="text text2">
                <h3>Szybka realizacja</h3>
                <p>Dotrzymujemy ustalonych terminów a zlecenia realizujemy w <span className="bold">ekspresowym tempie</span></p>
            </div>
            <div className="text text3">
                <h3>100% dokładności</h3>
                <p>Skupiamy się maksymalnie na tym, aby pozostawić po sobie tylko <span className="bold">w 100% czyste miejsca</span></p>
            </div>
            <div className="text text4">
                <h3>Najlepsze środki</h3>
                <p>Połączenie wysokiej jakości usług oraz <span className="bold">najlepszych środków</span> to gwarancja zadowolenia</p>
            </div>

        </div>
    </section>);
};

export default DlaczegoMy;
