import imgBannerEzenseMobile from 'assets/bannerEzenseMobile.png'
import imgBannerEzense from 'assets/bannerEzense.png'
export const Banner2 = () => {
    return (
        <div className="px-0 md:px-3 flex justify-center mt-4">
            <img className="mx-0 md:mx-auto hidden md:flex" src={imgBannerEzense} />
            <img className="mx-0 md:mx-auto md:hidden" src={imgBannerEzenseMobile} />
        </div>
    )
}

