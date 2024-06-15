import React from "react";
import "../css/contacto.css";
import { useState } from "react";

import BiselSmall from "./bisel/biselSmall";

const Contacto = () => {
  const [stepContacto, setStepContacto] = useState(1);

  return (
    <div className="contacto_content">
      <div className="rounded-[24px] lg:m-auto sm:m-[12px] max-w-[1440px] 
                      lg:flex lg:flex-row lg:gap-[60px]
                      sm:flex sm:flex-col sm:gap-[30px]
                      lg:p-[60px] sm:p-[30px] "
        style={{
          backgroundColor: 'rgba(236, 234, 229, 0.9)',
          background: 'linear-gradient(180deg, #fff 10.97%, rgba(255, 255, 255, 0) 53.45%)',
        }}
      >
        {/* formulario */}
        <div className="cont-form ">
          <div className="cont-form-r1">
            <div className="cont-form-r1-c1"></div>
            <div className="cont-form-r1-c2">
              {" "}
              <span className="text-lg-nunito-400 grey-black">
                {" "}
                hello{" "}
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

          <div className="cont-form-r2 sm:h-[550px] lg:h-[406px]">
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
        <div className="cont-datos">
          <div className="cont-datos-data lg:flex lg:flex-row sm:flex sm:flex-col sm:gap-[30px]">

            <div className="cont-dato-data-pais lg:flex sm:flex sm:justify-center sm:items-center">
              <span className="text-md-lato-700 grey-black"> Argentina </span>
              <span className="text-sm-nunito-400 grey-black">
                {" "}
                Av Dorrego 2133{" "}
              </span>
              <span className="text-sm-nunito-400 grey-black">
                {" "}
                CABA - Buenos Aires{" "}
              </span>
              <span className="text-sm-nunito-400 call-to-action">
                {" "}
                bue@e-zense.com{" "}
              </span>
            </div>

            <div className="cont-dato-data-pais lg:flex sm:flex sm:justify-center sm:items-center">
              <span className="text-md-lato-700 grey-black"> Chile </span>
              <span className="text-sm-nunito-400 grey-black">
                {" "}
                Dr Manuel Barros 71{" "}
              </span>
              <span className="text-sm-nunito-400 grey-black">
                {" "}
                Providencia - Santiago{" "}
              </span>
              <span className="text-sm-nunito-400 call-to-action">
                {" "}
                santiago@e-zense.com{" "}
              </span>
            </div>

          </div>

          <div className="cont-datos-jobs">
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
          </div>
        </div>

      </div>
    </div>
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
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setInputName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setInputLastName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setInputEmail(value);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setInputPhone(value);
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    setInputMessage(value);
  };

  const enviarMensaje = () => {
    setStepContacto(3);
  };

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
              for="input-name"
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
              for="input-name"
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
              for="input-name"
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
              for="input-name"
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
              for="input-name"
              className={`label-grey ${inputMessage ? "label-greyVisible" : ""}`}
            >
              {" "}
              MESSAGE{" "}
            </label>
            <input
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
