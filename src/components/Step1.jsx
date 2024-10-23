
export const Step1 = ({ setStepContacto }) => {

    const abirFormulario = async () => {
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