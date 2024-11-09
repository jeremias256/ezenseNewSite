import axios from 'axios';
/* ------------------------------------------- formik ------------------------------------------- */
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
/* ------------------------------------------- context ------------------------------------------ */
import useEzense from "hooks/useEzenseProvider";

export const Step2 = ({ setStepContacto }) => {
    const { setLoaderForm } = useEzense();
    const handleSubmit = async (values, { setSubmitting }) => {
        setLoaderForm(true);

        console.log("👀 - handleSubmit - setSubmitting:", setSubmitting);
        console.log("👀 - handleSubmit - values:", values);

        let fData = new FormData();
        fData.append("firstName", values.firstName);
        fData.append("lastName", values.lastName);
        fData.append("email", values.email);
        fData.append("phone", values.phone);
        fData.append("message", values.message);

        try {
            const response = await axios.post('resend.php', fData);
            console.log('Response:', response.data);
            setStepContacto(3)

        } catch (error) {
            console.error('Error:', error);
        } finally {
            console.log("FINALIZO")
            setLoaderForm(false);
        }
    };

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
                    .min(1, "El nombre es muy corto")
                    .required("El nombre es obligatorio"),
                lastName: Yup.string()
                    .max(50, "El apellido es muy largo")
                    .min(1, "El apellido es muy corto")
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
            onSubmit={handleSubmit}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <div className="">
                        <span className="text-md-lato-700 grey-black">
                            Are you poised to elevate your digital presence?
                        </span>
                    </div>
                    <div className="">
                        <span className="text-sm-nunito-400 call-to-action">
                            Every inquiry sparks the beginning of a new digital success story.
                            Lets connect and craft a future that excites!!
                        </span>
                    </div>
                    <div className="mt-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:w-full">
                            <div className="h-[44px] lg:basis-[50%]">
                                <label htmlFor="input-name" className='label-grey'>
                                    NAME
                                </label>
                                <Field
                                    autocomplete="off"
                                    className={
                                        errors.firstName && touched.firstName
                                            ? " input-error"
                                            : "input-grey"
                                    }
                                    name="firstName"
                                    placeholder="Name"
                                    type="text"
                                />

                            </div>
                            <div className="h-[44px] lg:basis-[50%]">
                                <label htmlFor="input-name" className='label-grey'>
                                    LAST NAME
                                </label>
                                <Field
                                    autocomplete="off"
                                    className={
                                        errors.lastName && touched.lastName
                                            ? " input-error"
                                            : "input-grey"
                                    }
                                    name="lastName"
                                    placeholder="Surname"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-4 lg:flex-row lg:w-full">
                            <div className="h-[44px] lg:basis-[50%]">
                                <label htmlFor="input-name" className={`label-grey`}>
                                    EMAIL
                                </label>
                                <Field
                                    autocomplete="off"
                                    className={
                                        errors.email && touched.email
                                            ? " input-error"
                                            : "input-grey"
                                    }
                                    name="email"
                                    placeholder="email"
                                    type="email"
                                />
                            </div>
                            <div className="h-[44px] lg:basis-[50%]">
                                <label htmlFor="input-name" className={`label-grey`}>
                                    PHONE
                                </label>
                                <Field
                                    autocomplete="off"
                                    className={
                                        errors.phone && touched.phone
                                            ? " input-error"
                                            : "input-grey"
                                    }
                                    name="phone"
                                    placeholder="Phone"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="h-[44px]">
                                <label htmlFor="input-name" className='label-grey'>
                                    MESSAGE
                                </label>
                                <Field
                                    autocomplete="off"
                                    className="input-grey"
                                    name="message"
                                    as="textarea"
                                    placeholder="Message"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="btn_gris" disabled={isSubmitting} type="submit">
                            Send
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};