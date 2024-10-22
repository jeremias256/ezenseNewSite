// import { Template_email } from "components/email/template_email";
// import { Resend } from "resend";
// import { RESEND_API_KEY } from "env";

// function fpost() {
//     try {
//         const { data, error } = await resend.emails.send({
//             from: "Acme <onboarding@resend.dev>",
//             to: ["gab.menacho@gmail.com"],
//             subject: "Hello world",
//             react: Template_email(),
//         });

//         if (error) {
//             return Response.json({ error }, { status: 500 });
//         }

//         return Response.json(data);
//     } catch (error) {
//         return Response.json({ error }, { status: 500 });
//     }
// }

export const Step1 = ({ setStepContacto }) => {
    // const resend = new Resend(RESEND_API_KEY);

    const abirFormulario = async () => {
        try {
            const response = await fetch('/api/send', { method: 'POST' });
            console.log("👀 - abirFormulario - response:", response);
        } catch (err) {
            console.log("👀 - abirFormulario - err:", err);
        } finally {
            console.log("FINALLY")
        }

        // setStepContacto(2);
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