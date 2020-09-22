import React from 'react';

import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';

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
            isVerified: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeRatio = this.handleChangeRatio.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    componentDidMount() {
        loadReCaptcha("6LdZVs8ZAAAAALyZPpx4JXLGSz7bJ8uMgGIH_DTM");
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
        }
        else if(name === "cyklicznie") {
            this.setState({
                jednorazowo: false,
                cyklicznie: true
            });
        }
        else if(name === "politykaPrywatnosci") {
            this.setState((prevState) => {
                return ({
                    politykaPrywatnosci: !prevState.politykaPrywatnosci
                });
            })
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
        }
    }


    render() {
        return (<section className="kontakt">
            <h2>Kontakt</h2>
            <h3>Zaznacz w formularzu czego potrzebujesz,<br/>a my odezwiemy się do Ciebie</h3>
            <form action="https://formspree.io/moqpqlgw" method="POST" onSubmit={e => this.handleSubmit(e)}>
                <div className="row row1">
                    <label id="sprzatanieMieszkania" onClick={e => this.handleChange(e)}>
                        <button id="sprzatanieMieszkania" name="sprzatanie-mieszkania">
                            <div className={this.state.sprzatanieMieszkania ? "checked" : ""} />
                        </button>
                        Sprzątanie mieszkania
                    </label>
                    <label id="hoteleIApartamenty" onClick={e => this.handleChange(e)}>
                        <button id="hoteleIApartamenty" name="hotele-i-apartamenty">
                            <div className={this.state.hoteleIApartamenty ? "checked" : ""} />
                        </button>
                        Hotele i apartamenty
                    </label>
                    <label id="biura" onClick={e => this.handleChange(e)}>
                        <button id="biura" name="biura">
                            <div className={this.state.biura ? "checked" : ""} />
                        </button>
                        Biura
                    </label>
                    <label id="pranie" onClick={e => this.handleChange(e)}>
                        <button id="pranie" name="pranie">
                            <div className={this.state.pranie ? "checked" : ""} />
                        </button>
                        Pranie
                    </label>
                    <label id="wnetrzeAuta" onClick={e => this.handleChange(e)}>
                        <button id="wnetrzeAuta" name="wnetrze-auta">
                            <div className={this.state.wnetrzeAuta ? "checked" : ""} />
                        </button>
                        Wnętrze auta
                    </label>
                </div>
                <div className="row row2">
                    <label id="groby" onClick={e => this.handleChange(e)}>
                        <button id="groby" name="groby">
                            <div className={this.state.groby ? "checked" : ""} />
                        </button>
                        Groby
                    </label>
                    <label id="lokaleUzytkowe" onClick={e => this.handleChange(e)}>
                        <button id="lokaleUzytkowe" name="lokale-uzytkowe">
                            <div className={this.state.lokaleUzytkowe ? "checked" : ""} />
                        </button>
                        Lokale użytkowe
                    </label>
                    <label id="poRemoncie" onClick={e => this.handleChange(e)}>
                        <button id="poRemoncie" name="po-remoncie">
                            <div className={this.state.poRemoncie ? "checked" : ""} />
                        </button>
                        Po remoncie
                    </label>
                    <label id="mycieOkien" onClick={e => this.handleChange(e)}>
                        <button id="mycieOkien" name="mycie-okien">
                            <div className={this.state.mycieOkien ? "checked" : ""} />
                        </button>
                        Mycie okien
                    </label>
                    <label id="mycieCisnieniowe" onClick={e => this.handleChange(e)}>
                        <button id="mycieCisnieniowe" name="mycie-cisnieniowe">
                            <div className={this.state.mycieCisnieniowe ? "checked" : ""} />
                        </button>
                        Mycie ciśnieniowe
                    </label>
                </div>
                <div className="inputy">
                    <input className={this.state.emailError ? "redBorder" : ""} type="text" name="email" placeholder="Email" value={this.state.email} onChange={e => this.handleChangeInput(e)}/>
                    <p>lub</p>
                    <input className={this.state.phoneError ? "redBorder" : ""} type="text" name="phoneNumber" placeholder="Numer telefonu" value={this.state.phoneNumber} onChange={e => this.handleChangeInput(e)}/>
                </div>
                <textarea name="msg" placeholder="Dodatkowe uwagi" />
                <div className="usluga">
                    <h4>Zlecam usługę jako:</h4>
                    <label id="firma" onClick={e => this.handleChangeRatio(e)}>
                        <button id="firma" name="firma">
                            <div className={this.state.firma ? "checked" : ""} />
                        </button>
                        Firma
                    </label>
                    <label id="osobaPrywatna" onClick={e => this.handleChangeRatio(e)}>
                        <button id="osobaPrywatna" name="osoba-prywatna">
                            <div className={this.state.osobaPrywatna ? "checked" : ""} />
                        </button>
                        Osoba prywatna
                    </label>
                </div>
                <div className="usluga">
                    <h4>Usługa:</h4>
                    <label id="jednorazowo" onClick={e => this.handleChangeRatio(e)}>
                        <button id="jednorazowo" name="jednorazowo">
                            <div className={this.state.jednorazowo ? "checked" : ""} />
                        </button>
                        Jednorazowa
                    </label>
                    <label id="cyklicznie" onClick={e => this.handleChangeRatio(e)}>
                        <button id="cyklicznie" name="cyklicznie">
                            <div className={this.state.cyklicznie ? "checked" : ""} />
                        </button>
                        Cykliczna
                    </label>
                </div>
                <div className="politykaPrywatnosci">
                    <label id="politykaPrywatnosci" onClick={e => this.handleChangeRatio(e)}>
                        <button id="politykaPrywatnosci" name="polityka-prywatnosci" className={this.state.politykaError ? "redBorder" : ""}>
                            <div className={this.state.politykaPrywatnosci ? "checkedPolityka" : ""} />
                        </button>
                        Zapoznałem się i akceptuję politykę prywatności
                    </label>
                </div>

                <ReCaptcha
                    sitekey="6LdZVs8ZAAAAALyZPpx4JXLGSz7bJ8uMgGIH_DTM"
                    render="implicit"
                    verifyCallback={this.verifyCallback}
                />

                <button type="submit">Wyślij</button>
            </form>
        </section>);
    }
}
