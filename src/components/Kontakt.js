import React from 'react';

import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';

import Modal from 'react-modal';

export default class Kontakt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sprzatanieMieszkania: false,
            hoteleIApartamenty: false,
            biura: false,
            pranie: false,
            wnetrzeAuta: false,
            groby: false,
            lokaleUzytkowe: false,
            poRemoncie: false,
            mycieOkien: false,
            mycieCisnieniowe: false,
            firma: false,
            osobaPrywatna: false,
            jednorazowo: false,
            cyklicznie: false,
            politykaPrywatnosci: false,
            email: "",
            phoneNumber: "",
            emailError: false,
            phoneError: false,
            politykaError: false,
            msg: "",
            status: "",
            isVerified: false,
            send: false,
            uslugiOpen: false,
            topOffset: 0,
            phoneFormOpen: false,
            phoneNumberModal: "",
            politykaModal: false,
            politykaModalError: false,
            modalPhoneError: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeRatio = this.handleChangeRatio.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.handleModalSubmit = this.handleModalSubmit.bind(this);
    }

    componentDidMount() {
        loadReCaptcha("6LdZVs8ZAAAAALyZPpx4JXLGSz7bJ8uMgGIH_DTM");

        if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
            this.setState({
                topOffset: window.pageYOffset
            });
            window.addEventListener("scroll", () => {
               this.setState({
                   topOffset: window.pageYOffset
               }, () => {
                   let el = document.querySelector(".rightDownBtn");
                  if(this.state.topOffset > 200) {
                      el.style.display = "block";
                  }
                  else if(this.state.topOffset < 200) {
                      el.style.display = "none";
                  }
               });
            });
        }
    }

    verifyCallback(res) {
        if(res) {
            this.setState({
                isVerified: true
            });
        }
    }

    handleChange(e) {
        e.preventDefault();
        let name = e.target.id;
        switch(name) {
            case "sprzatanieMieszkania":
                this.setState(prevState => {
                    return ({
                       [name]: !prevState.sprzatanieMieszkania
                    });
                });
                break;
            case "hoteleIApartamenty":
                this.setState(prevState => {
                    return ({
                        [name]: !prevState.hoteleIApartamenty
                    });
                });
                break;
            case "biura":
                this.setState(prevState => {
                    return ({
                        [name]: !prevState.biura
                    });
                });
                break;
            case "pranie":
                this.setState(prevState => {
                    return ({
                        [name]: !prevState.pranie
                    });
                });
                break;
            case "wnetrzeAuta":
                this.setState(prevState => {
                    return ({
                        [name]: !prevState.wnetrzeAuta
                    });
                });
                break;
            case "groby":
                this.setState(prevState => {
                    return ({
                        [name]: !prevState.groby
                    });
                });
                break;
            case "lokaleUzytkowe":
                this.setState(prevState => {
                    return ({
                        [name]: !prevState.lokaleUzytkowe
                    });
                });
                break;
            case "poRemoncie":
                this.setState(prevState => {
                    return ({
                        [name]: !prevState.poRemoncie
                    });
                });
                break;
            case "mycieOkien":
                this.setState(prevState => {
                    return ({
                        [name]: !prevState.mycieOkien
                    });
                });
                break;
            case "mycieCisnieniowe":
                this.setState(prevState => {
                    return ({
                        [name]: !prevState.mycieCisnieniowe
                    });
                });
                break;
            default:
                break;

        }
    };

    handleChangeRatio(e) {
        e.preventDefault();
        let name = e.target.id;

        if(name === "firma") {
            this.setState({
                osobaPrywatna: false,
                firma: true
            });
        }
        else if(name === "osobaPrywatna") {
            this.setState({
                osobaPrywatna: true,
                firma: false
            });
        }
        else if(name === "jednorazowo") {
            this.setState({
                jednorazowo: true,
                cyklicznie: false
            });
            if(typeof document !== 'undefined') {
                let div = document.createElement("div");

            }
        }
        else if(name === "cyklicznie") {
            this.setState({
                jednorazowo: false,
                cyklicznie: true
            }, () => {
                this.forceUpdate(() => {
                    console.log("Force update, State: " + this.state.cyklicznie);
                })
            });
        }
        else if(name === "politykaPrywatnosci") {
            this.setState((prevState) => {
                return ({
                    politykaPrywatnosci: !prevState.politykaPrywatnosci
                });
            })
        }
        else if(name === "politykaModal") {
            this.setState((prevState) => {
                return ({
                    politykaModal: !prevState.politykaModal
                });
            });
        }
    }

    handleChangeInput(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let isValid = true;

        /* Email validation */
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if((!re.test(String(this.state.email).toLowerCase()))&&(this.state.email !== "")) {
           this.setState({
               emailError: true
           });
           isValid = false;
        }
        else {
            this.setState({
                emailError: false
            });
        }

        /* Phone number validation */
        if((isNaN(this.state.phoneNumber))||(this.state.phoneNumber.length > 11)||((this.state.phoneNumber.length < 9)&&(this.state.phoneNumber.length !== 0))) {
            this.setState({
                phoneError: true
            });
            isValid = false;
        }
        else {
            this.setState({
                phoneError: false
            });
        }

        /* Any contact validation */
        if((this.state.email === "")&&(this.state.phoneNumber === "")) {
            this.setState({
                emailError: true
            });
            isValid = false;
        }
        else {
            this.setState({
                emailError: false
            });
        }

        /* Polityka prywatności validation */
        if(!this.state.politykaPrywatnosci) {
            this.setState({
                politykaError: true
            });
            isValid = false;
            if(typeof document !== 'undefined') {
                document.querySelector(".politykaPrywatnosci>label>button").classList.add("redBorder");
            }
        }
        else {
            this.setState({
                politykaError: false
            });
        }

        if((isValid)&&(this.state.isVerified)) {
            const form = e.target;

            let uslugi = new Array();
            if(this.state.sprzatanieMieszkania) uslugi.push("sprzątanie mieszkania");
            if(this.state.hoteleIApartamenty) uslugi.push("hotele i apartamenty");
            if(this.state.biura) uslugi.push("biura");
            if(this.state.pranie) uslugi.push("pranie");
            if(this.state.wnetrzeAuta) uslugi.push("wnętrze auta");
            if(this.state.groby) uslugi.push("groby");
            if(this.state.lokaleUzytkowe) uslugi.push("lokale użytkowe");
            if(this.state.poRemoncie) uslugi.push("sprzątanie po remoncie");
            if(this.state.mycieOkien) uslugi.push("mycie okien");
            if(this.state.mycieCisnieniowe) uslugi.push("mycie ciśnieniowe");

            const data = {
                telefon: this.state.phoneNumber,
                email: this.state.email,
                wiadomosc: this.state.msg,
                uslugi: uslugi,
                firma: this.state.firma,
                osobaPrywatna: this.state.osobaPrywatna,
                cyklicznie: this.state.cyklicznie,
                jednorazowo: this.state.jednorazowo
            };

            const xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    this.setState({ status: "SUCCESS" });
                } else {
                    this.setState({ status: "ERROR" });
                }
            };
            xhr.send(JSON.stringify(data));
            this.setState({
                send: true,
                sprzatanieMieszkania: false,
                hoteleIApartamenty: false,
                biura: false,
                pranie: false,
                wnetrzeAuta: false,
                groby: false,
                lokaleUzytkowe: false,
                poRemoncie: false,
                mycieOkien: false,
                mycieCisnieniowe: false,
                firma: false,
                osobaPrywatna: false,
                jednorazowo: false,
                cyklicznie: false,
                politykaPrywatnosci: false,
                email: "",
                phoneNumber: "",
                msg: ""
            });
        }
    }

    handleModalSubmit(e) {
        e.preventDefault();

        let isValid = true;

        /* Phone number validation */
        if((isNaN(this.state.phoneNumberModal))||(this.state.phoneNumberModal.length > 11)||((this.state.phoneNumberModal.length < 9))) {
            this.setState({
                modalPhoneError: true
            });
            isValid = false;
        }
        else {
            this.setState({
                modalPhoneError: false
            });
        }

        /* Polityka prywatności validation */
        if(!this.state.politykaModal) {
            this.setState({
                politykaModalError: true
            });
            isValid = false;
            if(typeof document !== 'undefined') {
                document.querySelector("#politykaModal>button").classList.add("redBorder");
            }
        }
        else {
            this.setState({
                politykaModalError: false
            });
        }

        if((isValid)&&(this.state.isVerified)) {
            const form = e.target;
            const data = {
                numerTelefonu: this.state.phoneNumberModal
            };
            const xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    this.setState({ status: "SUCCESS" });
                } else {
                    this.setState({ status: "ERROR" });
                }
            };
            xhr.send(JSON.stringify(data));
            this.setState({
                phoneFormOpen: false,
                phoneNumberModal: "",
                politykaModal: false,
                send: true
            });
        }
    }

    render() {
        return (<section id="kontakt" className="kontakt">
            <h2>Kontakt</h2>
            <h3>Czego potrzebujesz?</h3>
            <form action="https://formspree.io/xwkwkjao" method="POST" onSubmit={e => this.handleSubmit(e)}>
                <div className="row row1 desktopOnly">
                    <label id="sprzatanieMieszkania" onClick={e => this.handleChange(e)}>
                        <button className={this.state.sprzatanieMieszkania ? "checked" : ""} id="sprzatanieMieszkania" name="sprzatanie-mieszkania" aria-label="sprzatanie-mieszkania" />
                        Sprzątanie mieszkania
                    </label>
                    <label id="hoteleIApartamenty" onClick={e => this.handleChange(e)}>
                        <button className={this.state.hoteleIApartamenty ? "checked" : ""} id="hoteleIApartamenty" name="hotele-i-apartamenty" aria-label="hotele-i-apartamenty" />
                        Hotele i apartamenty
                    </label>
                    <label id="biura" onClick={e => this.handleChange(e)}>
                        <button className={this.state.biura ? "checked" : ""} id="biura" name="biura" aria-label="biura" />
                        Biura
                    </label>
                    <label id="pranie" onClick={e => this.handleChange(e)}>
                        <button className={this.state.pranie ? "checked" : ""} id="pranie" name="pranie" aria-label="pranie" />
                        Pranie ekstrakcyjne
                    </label>
                    <label id="wnetrzeAuta" onClick={e => this.handleChange(e)}>
                        <button className={this.state.wnetrzeAuta ? "checked" : ""} id="wnetrzeAuta" name="wnetrze-auta" aria-label="wnetrze-auta" />
                        Detailing wnętrza auta
                    </label>
                </div>
                <div className="row row2 desktopOnly">
                    <label id="groby" onClick={e => this.handleChange(e)}>
                        <button className={this.state.groby ? "checked" : ""} id="groby" name="groby" aria-label="groby" />
                        Opieka nad grobami
                    </label>
                    <label id="lokaleUzytkowe" onClick={e => this.handleChange(e)}>
                        <button className={this.state.lokaleUzytkowe ? "checked" : ""} id="lokaleUzytkowe" name="lokale-uzytkowe" aria-label="lokale-uzytkowe" />
                        Lokale użytkowe
                    </label>
                    <label id="poRemoncie" onClick={e => this.handleChange(e)}>
                        <button className={this.state.poRemoncie ? "checked" : ""} id="poRemoncie" name="po-remoncie" aria-label="po-remoncie" />
                        Po remoncie
                    </label>
                    <label id="mycieOkien" onClick={e => this.handleChange(e)}>
                        <button className={this.state.mycieOkien ? "checked" : ""} id="mycieOkien" name="mycie-okien" aria-label="mycie-okien" />
                        Mycie okien
                    </label>
                    <label id="mycieCisnieniowe" onClick={e => this.handleChange(e)}>
                        <button className={this.state.mycieCisnieniowe ? "checked" : ""} id="mycieCisnieniowe" name="mycie-cisnieniowe" aria-label="mycie-cisnieniowe" />
                        Mycie ciśnieniowe
                    </label>
                </div>

                <div className="mobileOnly uslugiBtn" onClick={() => { this.setState({ uslugiOpen: true }) }}>
                    <h3>Naciśnij i rozwiń listę usług</h3>
                    <div className="blueArea" />
                </div>

                <Modal isOpen={this.state.uslugiOpen} closeTimeoutMS={500} onRequestClose={() => { this.setState({uslugiOpen: false}) }} portalClassName="uslugiMenu">
                    <label id="sprzatanieMieszkania" onClick={e => this.handleChange(e)}>
                        <button className={this.state.sprzatanieMieszkania ? "checked" : ""} id="sprzatanieMieszkania" name="sprzatanie-mieszkania" aria-label="sprzatanie-mieszkania" />
                        Sprzątanie mieszkania
                    </label>
                    <label id="hoteleIApartamenty" onClick={e => this.handleChange(e)}>
                        <button className={this.state.hoteleIApartamenty ? "checked" : ""} id="hoteleIApartamenty" name="hotele-i-apartamenty" aria-label="hotele-i-apartamenty" />
                        Hotele i apartamenty
                    </label>
                    <label id="biura" onClick={e => this.handleChange(e)}>
                        <button className={this.state.biura ? "checked" : ""} id="biura" name="biura" onClick="" aria-label="biura" />
                        Biura
                    </label>
                    <label id="pranie" onClick={e => this.handleChange(e)}>
                        <button className={this.state.pranie ? "checked" : ""} id="pranie" name="pranie" onClick="" aria-label="pranie" />
                        Pranie ekstrakcyjne
                    </label>
                    <label id="wnetrzeAuta" onClick={e => this.handleChange(e)}>
                        <button className={this.state.wnetrzeAuta ? "checked" : ""} id="wnetrzeAuta" name="wnetrze-auta" onClick="" aria-label="wnetrze-auta" />
                        Wnętrze auta
                    </label>
                    <label id="groby" onClick={e => this.handleChange(e)}>
                        <button className={this.state.groby ? "checked" : ""} id="groby" name="groby" onClick="" aria-label="groby" />
                        Groby
                    </label>
                    <label id="lokaleUzytkowe" onClick={e => this.handleChange(e)}>
                        <button className={this.state.lokaleUzytkowe ? "checked" : ""} id="lokaleUzytkowe" name="lokale-uzytkowe" onClick="" aria-label="lokale-uzytkowe" />
                        Lokale użytkowe
                    </label>
                    <label id="poRemoncie" onClick={e => this.handleChange(e)}>
                        <button className={this.state.poRemoncie ? "checked" : ""} id="poRemoncie" name="po-remoncie" onClick="" aria-label="po-remoncie" />
                        Po remoncie
                    </label>
                    <label id="mycieOkien" onClick={e => this.handleChange(e)}>
                        <button className={this.state.mycieOkien ? "checked" : ""} id="mycieOkien" name="mycie-okien" onClick="" aria-label="mycie-okien" />
                        Mycie okien
                    </label>
                    <label id="mycieCisnieniowe" onClick={e => this.handleChange(e)}>
                        <button className={this.state.mycieCisnieniowe ? "checked" : ""} id="mycieCisnieniowe" name="mycie-cisnieniowe" onClick="" aria-label="mycie-cisnieniowe" />
                        Mycie ciśnieniowe
                    </label>
                </Modal>

                <div className="inputy">
                    <input id="name" className={this.state.emailError ? "redBorder" : ""} type="text" name="email" placeholder="Email" value={this.state.email} onChange={e => this.handleChangeInput(e)}/>
                    <p>lub</p>
                    <input id="phoneNumber" className={this.state.phoneError ? "redBorder" : ""} type="text" name="phoneNumber" placeholder="Numer telefonu" value={this.state.phoneNumber} onChange={e => this.handleChangeInput(e)}/>
                </div>
                <textarea id="msg" name="msg" placeholder="Dodatkowe uwagi" value={this.state.msg} onChange={e => this.handleChangeInput(e)} />
                <div className="usluga">
                    <h4>Zlecam usługę jako:</h4>
                    <label id="firma" onClick={e => this.handleChangeRatio(e)}>
                        <button className={this.state.firma ? "checked" : ""} id="firma" name="firma" onClick={() => {}} aria-label="firma" />
                        Firma
                    </label>
                    <label id="osobaPrywatna" onClick={e => this.handleChangeRatio(e)}>
                        <button className={this.state.osobaPrywatna ? "checked" : ""} id="osobaPrywatna" name="osoba-prywatna" onClick="" aria-label="osoba-prywatna" />
                        Osoba prywatna
                    </label>
                </div>
                <div className="usluga">
                    <h4>Usługa:</h4>
                    <label id="jednorazowo" onClick={e => this.handleChangeRatio(e)}>
                        <button id="jednorazowo" className={this.state.jednorazowo ? "checked" : ""} name="jednorazowo" aria-label="jednorazowo" onClick={e => this.handleChangeRatio(e)} />
                        Jednorazowa
                    </label>
                    <label id="cyklicznie" onClick={e => this.handleChangeRatio(e)}>
                        <button className={this.state.cyklicznie ? "checked" : ""} id="cyklicznie" name="cyklicznie" aria-label="cyklicznie" />
                        Cykliczna
                    </label>
                </div>
                <div className="politykaPrywatnosci">
                    <label id="politykaPrywatnosci" onClick={e => this.handleChangeRatio(e)}>
                        <button className={this.state.politykaPrywatnosci ? "checkedPolityka" : ""} id="politykaPrywatnosci" name="polityka-prywatnosci" aria-label="polityka-prywatnosci" />
                        Zapoznałem się i akceptuję politykę prywatności
                    </label>
                </div>

                <div className="recaptcha">
                    <ReCaptcha
                        sitekey="6LdZVs8ZAAAAALyZPpx4JXLGSz7bJ8uMgGIH_DTM"
                        render="implicit"
                        verifyCallback={this.verifyCallback}
                    />
                </div>

                <button type="submit">Wyślij</button>

                <Modal isOpen={this.state.send} closeTimeoutMS={500} onRequestClose={() => { this.setState({ send: false }) }} portalClassName="formSend">
                    <img className="modalExit" src={require("../../static/img/x.png")} alt="exit" onClick={() => this.setState({ send: false })} />
                    <div className="modalInner">
                        <img className="okejka" src={require("../../static/img/okejka.png")} alt="ok" />
                        <h2>Formularz wysłany!</h2>
                        <h3>Odezwę się do Ciebie jak najszybciej!</h3>
                    </div>
                </Modal>
            </form>

            <div className="rightDownBtn" onClick={() => { this.setState({ phoneFormOpen: true }) }}>
                <h5 className="desktopOnly">Hej!<br/>Zostaw do siebie numer -<br/><span className="bold white">ODDZWONIMY!</span></h5>
                <img src={require("../../static/img/info-popup-bg.png")} alt="zadzwoń do nas" className="info desktopOnly"/>
                <img src={require("../../static/img/popup-icon.png")} alt="telefon" className="telefon"/>
            </div>

            <Modal portalClassName="formSend phoneForm" isOpen={this.state.phoneFormOpen} closeTimeoutMS={500} onRequestClose={() => { this.setState({ phoneFormOpen: false }) }}>
                <img className="x" src={require("../../static/img/x.png")} alt="exit" onClick={() => { this.setState({ phoneFormOpen: false }) }}/>
                <img className="telefon" src={require("../../static/img/telefon-niebieski.png")} alt="telefon" />
                <h3>Zostaw do siebie numer, a my oddzwonimy do Ciebie jeszcze dzisiaj!</h3>
                <form action="https://formspree.io/xrgogvrk" method="POST" onSubmit={e => this.handleModalSubmit(e)}>
                    <input className={this.state.modalPhoneError ? "redBorder" : ""} type="text" name="phoneNumberModal" value={this.state.phoneNumberModal} onChange={e => this.handleChangeInput(e)}/>
                    <label id="politykaModal" onClick={e => this.handleChangeRatio(e)}>
                        <button className={this.state.politykaModal ? "checkedPolityka" : ""} id="politykaModal" name="polityka-prywatnosci" />
                        Zapoznałem się i akceptuję politykę prywatności
                    </label>
                    <ReCaptcha
                        sitekey="6LdZVs8ZAAAAALyZPpx4JXLGSz7bJ8uMgGIH_DTM"
                        render="implicit"
                        verifyCallback={this.verifyCallback}
                    />
                    <button type="submit">Zatwierdź</button>
                </form>
            </Modal>

        </section>);
    }
}
