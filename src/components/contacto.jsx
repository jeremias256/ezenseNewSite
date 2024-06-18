import React from "react";
import axios from "axios";
import "../css/contacto.css";
import { useState } from "react";

import BiselSmall from "./bisel/biselSmall";

const Contacto = () => {
  const [stepContacto, setStepContacto] = useState(1);

  return (
    <div className="contacto_content px-3 w-full" id="contact" >
      <div className="rounded-[24px] lg:m-auto sm:m-[12px] max-w-[1440px] 
                      lg:flex lg:flex-row lg:gap-[60px]
                      sm:flex sm:flex-col sm:gap-[30px]
                      lg:p-[60px]"
        style={{
          backgroundColor: 'rgba(236, 234, 229, 0.9)',
          background: 'linear-gradient(180deg, #fff 10.97%, rgba(255, 255, 255, 0) 53.45%)',
        }}
      >
        {/* formulario */}
        <div className="cont-form " >
          <div className="cont-form-r1">
            <div className="cont-form-r1-c1"></div>
            <div className="cont-form-r1-c2" >
              <span className="text-lg-nunito-400 grey-black">
                hello
              </span>
            </div>
            <div className="cont-form-r1-c3">
              <div className="cont-form-r1-c3-f1">
                <BiselSmall />
              </div>
              <div className="cont-form-r1-c3-f2"></div>
            </div>
            <div className="cont-form-r1-c4"></div>
            <div className="cont-form-r1-c5"></div>
          </div>

          <div className="cont-form-r2">
            {stepContacto === 1 ? (
              <Contacto_step1 setStepContacto={setStepContacto} />
            ) : stepContacto === 2 ? (
              <Contacto_step2 setStepContacto={setStepContacto} />
            ) : (
              <Contacto_step3 />
            )}
          </div>
        </div>

        {/* datos */}
        <div className="cont-datos mb-8">
          <div className="cont-datos-data flex flex-col items-center">

            <div className="cont-dato-data-pais lg:flex sm:flex sm:justify-center sm:items-center">
              <span className="text-md-lato-700 grey-black"> Argentina </span>
              <span className="text-sm-nunito-400 grey-black text-[16px]">
                Av Dorrego 2133 - CABA - Buenos Aires{" "}
              </span>

              <span className="text-sm-nunito-400 call-to-action">
                {" "}
                bue@e-zense.com{" "}
              </span>
            </div>

            <div className="cont-dato-data-pais lg:flex sm:flex sm:justify-center sm:items-center">
              <span className="text-md-lato-700 grey-black"> Chile </span>
              <span className="text-sm-nunito-400 grey-black text-[16px]">
                {" "}
                Dr Manuel Barros 71 - Santiago{" "}
              </span>

              <span className="text-sm-nunito-400 call-to-action">
                {" "}
                santiago@e-zense.com{" "}
              </span>
            </div>

          </div>

          {/* <div className="cont-datos-jobs">
            <div className="cont-form">
              <div className="cont-form-r1">
                <div className="cont-form-r1-c1"></div>
                <div className="cont-form-r1-c2">
                  {" "}
                  <span className="text-lg-nunito-400 grey-black">
                    {" "}
                    jobs{" "}
                  </span>{" "}
                </div>
                <div className="cont-form-r1-c3">
                  <div className="cont-form-r1-c3-f1">
                    <BiselSmall />
                  </div>
                  <div className="cont-form-r1-c3-f2"></div>
                </div>
                <div className="cont-form-r1-c4"></div>
                <div className="cont-form-r1-c5"></div>
              </div>
              <div className="cont-form-r2-jobs">
                <span className="text-md-lato-700 grey-black">
                  {" "}
                  Work whit Us:{" "}
                </span>
                <span className="cv-subtitulo grey-black"> Submit CV </span>
                <div className="content_btn_submitCv">
                  <button className="btn_gris"> Submit CV </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>

      </div>
    </div >
  );
};

const Contacto_step1 = ({ setStepContacto }) => {
  const abirFormulario = () => {
    setStepContacto(2);
  };

  return (
    <>
      <div className="cont-form-r2-r1">
        <span className="text-md-lato-700 grey-black"> contact Us: </span>
      </div>
      <div className="cont-form-r2-r2">
        <span className="contacto-subtitulo grey-black">
          {" "}
          We want to know you, contact us from here
        </span>
      </div>
      <div className="cont-form-r2-r3">
        <span className="text-md-lato-400 call-to-action">
          {" "}
          Initiate Your Digital Journey:{" "}
        </span>
      </div>
      <div className="cont-form-r2-r4">
        <button className="btn_gris" onClick={abirFormulario}>
          {" "}
          Let's talk!{" "}
        </button>
      </div>
    </>
  );
};

const Contacto_step2 = ({ setStepContacto }) => {
  const [cargando, setCargando] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    let regex = /^[a-zA-Z]*$/;
    let filteredValue = value.replace(/[^a-zA-Z]/g, "").slice(0, 30);
    if (regex.test(filteredValue)) {
      setInputName(filteredValue);
    }
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    let regex = /^[a-zA-Z]*$/;
    let filteredValue = value.replace(/[^a-zA-Z]/g, "").slice(0, 30);
    if (regex.test(filteredValue)) {
      setInputLastName(filteredValue);
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    console.log("👀 - handleEmailChange - value:", value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setInputEmail(value);

    if (emailRegex.test(value)) {
      console.log("HOLA")
      // setIsValidEmail(true); // Marcar como válido si la validación pasa
    } else {
      // setIsValidEmail(false); // Marcar como inválido si la validación falla
    }
  };


  const handlePhoneChange = (event) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 10);
    setInputPhone(value);
  };

  const handleMessageChange = (event) => {
    let value = event.target.value;
    const maxLength = 200; // Máximo de 200 caracteres

    // Filtrar solo letras y números, y limitar a 200 caracteres
    value = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, maxLength);

    // Validar que el valor no esté vacío y sea válido
    if (value.length > 0) {
      setInputMessage(value);
      // setIsValidMessage(true); // Marcar como válido si la validación pasa
    } else {
      setInputMessage(''); // Limpiar el input si no es válido
      // setIsValidMessage(false); // Marcar como inválido si la validación falla
    }
  };

  const enviarMensaje = async () => {
    setCargando(true);
    const url = "sendMail.php?sent=OK";
    let fData = new FormData();
    try {
      const response = await axios.post(url, fData);
      console.log("👀 - enviarMensaje - response:", response);

      // if (response.request.responseURL.includes("?error_validation")) {
      //   setExpireCookie("carritoErrorLogin", "error");
      // } else {
      //   delete_cookie("carritoErrorLogin");
      // }
    } catch (error) {
      console.log(
        "🚀 - file: FormularioLogin.jsx:47 - handleSubmit - error:",
        error,
      );
    } finally {
      setCargando(false);
    }
    setStepContacto(3);
  };
  function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  }
  function delete_cookie(name) {
    document.cookie = name + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  function setExpireCookie(name, value, expire) {
    var expires = "";
    if (expire) {
      let date = new Date();
      date.setTime(date.getTime() + expire);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  return (
    <>
      <div className="cont-form-st2-r2-r1">
        <span className="text-md-lato-700 grey-black">
          {" "}
          Are you poised to elevate your digital presence?{" "}
        </span>
      </div>
      <div className="cont-form-st2-r2-r2">
        <span className="text-sm-nunito-400 call-to-action">
          Every inquiry sparks the beginning of a new digital success story.
          Lets connect and craft a future that excites!!
        </span>
      </div>
      <div className="cont-form-st2-r2-r3">
        <div className="cont-form-st2-r2-r3-f1">
          <div className="grupo-input">
            <label
              htmlFor="input-name"
              className={`label-grey ${inputName ? "label-greyVisible" : ""}`}
            >
              {" "}
              NAME{" "}
            </label>
            <input
              type="text"
              className="input-grey"
              id="input-name"
              placeholder="Name"
              value={inputName}
              onChange={handleNameChange}
            />
          </div>
          <div className="grupo-input">
            <label
              htmlFor="input-name"
              className={`label-grey ${inputLastName ? "label-greyVisible" : ""}`}
            >
              {" "}
              LAST NAME{" "}
            </label>
            <input
              type="text"
              className="input-grey"
              placeholder="Last Name"
              value={inputLastName}
              onChange={handleLastNameChange}
            />
          </div>
        </div>
        <div className="cont-form-st2-r2-r3-f2">
          <div className="grupo-input">
            <label
              htmlFor="input-name"
              className={`label-grey ${inputEmail ? "label-greyVisible" : ""}`}
            >
              {" "}
              EMAIL{" "}
            </label>
            <input
              type="text"
              className="input-grey"
              placeholder="Email"
              value={inputEmail}
              onChange={handleEmailChange}
            />
          </div>
          <div className="grupo-input">
            <label
              htmlFor="input-name"
              className={`label-grey ${inputPhone ? "label-greyVisible" : ""}`}
            >
              {" "}
              PHONE
            </label>
            <input
              type="text"
              className="input-grey"
              placeholder="Phone"
              value={inputPhone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div className="cont-form-st2-r2-r3-f3">
          <div className="grupo-input">
            <label
              htmlFor="input-name"
              className={`label-grey ${inputMessage ? "label-greyVisible" : ""}`}
            >
              {" "}
              MESSAGE{" "}
            </label>
            <textarea
              type="text"
              className="input-grey"
              placeholder="Message"
              value={inputMessage}
              onChange={handleMessageChange}
            />
          </div>
        </div>
      </div>
      <div className="cont-form-st2-r2-r4">
        <button className="btn_gris" onClick={enviarMensaje}>
          {" "}
          Send{" "}
        </button>
      </div>
    </>
  );
};

const Contacto_step3 = () => {
  return (
    <>
      <div className="cont-form-r2-r1">
        <span className="text-md-lato-700 grey-black"> Thank you! </span>
      </div>
      <div className="cont-form-r2-r2">
        <span className="contacto-subtitulo call-to-action"> Message sent</span>
      </div>
    </>
  );
};

export default Contacto;
