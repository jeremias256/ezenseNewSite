import React from "react";
import axios from "axios";
import "../css/contacto.css";
import { useState } from "react";
/* ------------------------------------------- formik ------------------------------------------- */
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import BiselSmall from "./bisel/biselSmall";

export const Contacto = () => {
  const [stepContacto, setStepContacto] = useState(1);

  return (
    <div className="w-full px-3" id="contact">
      <div className="lg:gap-[60px]sm:flex max-w-[1440px] rounded-[24px] bg-custom-gradient px-4 pt-6 sm:m-[12px] sm:flex-col sm:gap-[30px] lg:m-auto lg:flex lg:flex-row lg:p-[60px] lg:items-start">
        {/* formulario */}
        <div className="">
          <div className="flex">
            <div className="rounded-tl-[24px] border-l-[2px] border-t-[2px] border-callToAction pl-6"></div>
            <div className="border-y-[2px] border-callToAction">
              <span className="text-lg-nunito-400 grey-black">hello</span>
            </div>
            <div className="flex flex-col">
              <div className="h-[34px] w-[45px]">
                <BiselSmall />
              </div>
              <div className="h-[24px] w-[45px] border-b-[2px] border-callToAction"></div>
            </div>
            <div className="mt-8 h-[26px] flex-1 border-y-[2px] border-callToAction"></div>
            <div className="mt-8 h-[26px] rounded-tr-[24px] border-r-[2px] border-t-[2px] border-callToAction pr-6"></div>
          </div>

          <div className="rounded-b-[24px] border-x-[2px] border-b-[2px] border-callToAction px-4 py-6">
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
        <div className="mt-[60px] flex flex-col justify-center lg:mt-0">
          <div className="flex flex-col items-center xl:flex-row">
            <div className="flex flex-col items-center sm:flex sm:items-center sm:justify-center lg:flex">
              <span className="text-md-lato-700 grey-black"> Argentina </span>
              <span className="text-sm-nunito-400 grey-black text-[16px] lg:text-center">
                Av Santa Fe 3778 - CABA - Buenos Aires
              </span>

              <span className="text-sm-nunito-400 call-to-action">
                bue@e-zense.com
              </span>
            </div>

            <div className="flex flex-col items-center sm:flex sm:items-center sm:justify-center lg:flex">
              <span className="text-md-lato-700 grey-black"> Chile </span>
              <span className="text-sm-nunito-400 grey-black text-[16px] lg:text-center">
                Dr Manuel Barros 71 - Santiago
              </span>

              <span className="text-sm-nunito-400 call-to-action">
                santiago@e-zense.com
              </span>
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
      <div className="">
        <span className="text-md-lato-700 grey-black"> contact Us: </span>
      </div>
      <div className="mt-6">
        <span className="contacto-subtitulo grey-black">
          We want to know you, contact us:
        </span>
      </div>
      <div className="mt-[40px]">
        <span className="text-md-lato-400 call-to-action">
          Initiate Your Digital Journey:
        </span>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          className="btn_gris text-sm-nunito-400"
          onClick={abirFormulario}
        >
          Let's talk!
        </button>
      </div>
    </>
  );
};

const Contacto_step2 = ({ setStepContacto }) => {
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (values) => {
    console.log("👀 - handleSubmit - values:", values);
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
    document.cookie =
      name + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
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
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(50, "El nombre es muy largo")
          .required("El nombre es obligatorio"),
        lastName: Yup.string()
          .max(50, "El apellido es muy largo")
          .required("El apellido es obligatorio"),
        email: Yup.string()
          .email("Correo electrónico inválido")
          .required("El email es obligatorio"),
        phone: Yup.string()
          .matches(/^[0-9]+$/, "El celular solo debe contener números")
          .min(10, "El celular debe tener al menos 10 dígitos")
          .required("El celular es obligatorio"),
        message: Yup.string().max(500, "El mensaje es muy largo"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="cont-form-st2-r2-r1">
            <span className="text-md-lato-700 grey-black">
              Are you poised to elevate your digital presence?
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
                <label htmlFor="input-name" className={`label-grey`}>
                  NAME
                </label>
                <Field
                  className={
                    errors.firstName && touched.firstName
                      ? " input-error"
                      : "input-grey"
                  }
                  name="firstName"
                  placeholder="Name"
                  type="text"
                />
                <ErrorMessage
                  className="text-callToAction"
                  name="firstName"
                  component="div"
                />
              </div>
              <div className="grupo-input">
                <label htmlFor="input-name" className={`label-grey`}>
                  LAST NAME
                </label>
                <Field
                  className={
                    errors.lastName && touched.lastName
                      ? " input-error"
                      : "input-grey"
                  }
                  name="lastName"
                  placeholder="Surname"
                  type="text"
                />
                <ErrorMessage
                  className="text-callToAction"
                  name="lastName"
                  component="div"
                />
              </div>
            </div>
            <div className="cont-form-st2-r2-r3-f2">
              <div className="grupo-input">
                <label htmlFor="input-name" className={`label-grey`}>
                  EMAIL
                </label>
                <Field
                  className={
                    errors.email && touched.email
                      ? " input-error"
                      : "input-grey"
                  }
                  name="email"
                  placeholder="email"
                  type="email"
                />
                <ErrorMessage
                  className="text-callToAction"
                  name="email"
                  component="div"
                />
              </div>
              <div className="grupo-input">
                <label htmlFor="input-name" className={`label-grey`}>
                  PHONE
                </label>
                <Field
                  className={
                    errors.phone && touched.phone
                      ? " input-error"
                      : "input-grey"
                  }
                  name="phone"
                  placeholder="Phone"
                  type="text"
                />
                <ErrorMessage
                  className="text-callToAction"
                  name="phone"
                  component="div"
                />
              </div>
            </div>
            <div className="cont-form-st2-r2-r3-f3">
              <div className="grupo-input">
                <label htmlFor="input-name" className={`label-grey`}>
                  MESSAGE
                </label>
                <Field
                  className="input-grey"
                  name="message"
                  as="textarea"
                  placeholder="Message"
                />
              </div>
            </div>
          </div>
          <div className="cont-form-st2-r2-r4">
            <button className="btn_gris" type="submit">
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
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
