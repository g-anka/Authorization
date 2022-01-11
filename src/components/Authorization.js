import React, {useState} from "react";
import "../styles/Authorization.css";

function Authorization() {

    //ВХОД
    //изменение значений в инпутах
    const [signInValue, setSignInValue] = useState({
        email: "",
        password: ""
    });

    function handleSignInChange(e) {
        setSignInValue ( {...signInValue, [e.target.name]: e.target.value})
        console.log("VALUE: ", signInValue)
    }

    //отправка данных на сервер
    let userSignIn = {
        email: signInValue.email,
        password: signInValue.password
    };
    console.log("USER Sign In: ", userSignIn);

    async function onSubmitSignIn(e) {
        e.preventDefault();
        await fetch('', {
            method: 'POST',
            body: JSON.stringify(userSignIn)
        })
            .then((response) => {
                console.log("RESPONSE: ", response);
            })
            .catch((error) => {
                console.log("ERROR: ", error);
                console.log("ERROR DATA: ", error.response.data)
            })
    }


    //РЕГИСТРАЦИЯ
    //изменение значений в инпутах
    const [signUpValue, setSignUpValue] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    function handleSignUpChange(e) {
        setSignUpValue ( {...signUpValue, [e.target.name]: e.target.value})
        console.log("VALUE: ", signUpValue)
    }

    //отправка данных на сервер
    let userSignUp = {
        name: signUpValue.name,
        email: signUpValue.email,
        password: signUpValue.password
    };
    console.log("USER Sign Up: ", userSignUp);

    async function onSubmitSignUp(e) {
        e.preventDefault();
        await fetch('', {
            method: 'POST',
            body: JSON.stringify(userSignUp)
        })
            .then((response) => {
                console.log("RESPONSE: ", response);
            })
            .catch((error) => {
                console.log("ERROR: ", error);
                console.log("ERROR DATA: ", error.response.data)
            })
    }

    //переключение блоков Вход и Регистрация
    const [signInShown, setSignInShown] = useState(true);
    const [signUpShown, setSignUpShown] = useState(false);

    function signInHandler() {
        setSignInShown(true);
        setSignUpShown(false);
    }

    function signUpHandler() {
        setSignInShown(false);
        setSignUpShown(true);
    }

    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__content-close">
                    <img src="" alt="закрыть" />
                </div>

                <div className="auth__content-header">
                    <p className="auth__content-header-signIn"
                       onClick={signInHandler}
                       style={signInShown ? {color:"blue"} : {color:"gray"}}>Вход</p>

                    <p className="auth__content-header-signUp"
                       onClick={signUpHandler}
                       style={signUpShown ? {color:"blue"} : {color:"gray"}}>Регистрация</p>
                </div>

                {/* Блок Вход*/}
                <div style={signInShown ? {display:"block"} : {display:"none"}}>
                    <div className="auth__content-signIn">Войдите в свой аккаунт</div>
                    <form>
                        <input name="email"
                               type="email"
                               className="form__input"
                               placeholder="E-mail"
                               value={signInValue.email}
                               onChange={handleSignInChange}
                        />
                        <input name="password"
                               type="password"
                               className="form__input"
                               placeholder="Пароль"
                               value={signInValue.password}
                               onChange={handleSignInChange}
                        />
                        <div className="form__password-forgotten">Забыли пароль?</div>

                        <div className="form__checkbox-btn">
                            <input name="checkbox-btn"
                                   id="checkbox-btn"
                                   type="checkbox"
                            />
                            <label htmlFor="checkbox-btn">Не выходить из системы</label>
                        </div>

                        <div className="form__btn-wrapper">
                            <button className="form__btn"
                                    type="submit"
                                    onClick={onSubmitSignIn}>Войти</button>
                        </div>
                    </form>
                    <div className="auth__content-bottom">У меня пока нет аккаунта. <span>Зарегистрироваться</span></div>
                </div>

                {/* Блок Регистрация*/}
                <div className="auth__content-signUp"
                     style={signUpShown ? {display:"block"} : {display:"none"}}>
                    <form>
                        <input name="name"
                               type="text"
                               className="form__input"
                               placeholder="Имя и фамилия"
                               value={signUpValue.name}
                               onChange={handleSignUpChange}
                        />
                        <input name="email"
                               type="email"
                               className="form__input"
                               placeholder="E-mail"
                               value={signUpValue.email}
                               onChange={handleSignUpChange}
                        />
                        <input name="password"
                               type="password"
                               className="form__input"
                               placeholder="Пароль"
                               value={signUpValue.password}
                               onChange={handleSignUpChange}
                        />
                        <input name="password2"
                               type="password"
                               className="form__input"
                               placeholder="Повторите пароль"
                               value={signUpValue.password2}
                               onChange={handleSignUpChange}
                        />

                        <div className="form__checkbox-btn">
                            <input name="checkbox-btn"
                                   id="checkbox-btn"
                                   type="checkbox"
                                   defaultChecked
                            />
                            <label htmlFor="checkbox-btn">Даю согласие на обработку персональных данных</label>
                        </div>

                        <div className="form__btn-wrapper">
                            <button className="form__btn"
                                    type="submit"
                                    onClick={onSubmitSignUp}>Зарегистрироваться</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
};

export default Authorization;
