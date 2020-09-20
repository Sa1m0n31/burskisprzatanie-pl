import React from 'react';

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
            msg: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeRatio = this.handleChangeRatio.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
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

        console.log("HI!");

        /* Email validation */
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if((!re.test(String(this.state.email).toLowerCase()))&&(this.state.email !== "")) {
           this.setState({
               emailError: true
           });
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
        }
        else {
            this.setState({
                phoneError: false
            })
        }

        /* Any contact validation */
        if((this.state.email === "")&&(this.state.phoneNumber === "")) {
            this.setState({
                emailError: true
            });
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
        }
        else {
            this.setState({
                politykaError: false
            });
        }
    }


    render() {
        return (<section className="kontakt">
            <h2>Kontakt</h2>
            <h3>Zaznacz w formularzu czego potrzebujesz,<br/>a my odezwiemy się do Ciebie</h3>
            <form action="#" method="POST" onSubmit={e => this.handleSubmit(e)}>
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
                <button type="submit">Wyślij</button>
            </form>
        </section>);
    }
}
