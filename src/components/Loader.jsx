import imgLoader from '../assets/loaderEzense.png';

export const Loader = () => {
    return (
        <div className="min-w-[294px] min-h-[279px] rounded-b-[24px] border-x-[2px] border-b-[2px] border-callToAction px-4 py-6 flex flex-col">
            <p className="text-lg-nunito-400 grey-black text-left">Sending ...</p>
            <img alt="Loader" className="max-w-[164px] max-h-[153px] mx-auto" src={imgLoader} />
        </div>
    )
}
