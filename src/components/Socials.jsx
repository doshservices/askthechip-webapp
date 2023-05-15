import facebookPrimary from './../assets/icons/facebookPrimary.svg'
import instagramPrimary from './../assets/icons/instagramPrimary.svg'
import youtubePrimary from './../assets/icons/youtubePrimary.svg'
import twitterPrimary from './../assets/icons/twitterPrimary.svg'

const socials = [
    {
      link: "",
      icon: facebookPrimary
    },
    {
      link: "",
      icon: instagramPrimary
    },
    {
      link: "",
      icon: twitterPrimary
    },
    {
      link: "",
      icon: youtubePrimary
    }
  ]

const Socials = () => {
    return (
        <ul className="flex">
            {socials.map(s =>
                <li className="mr-5 hover:scale-125 active:scale-100 cursor-pointer transition duration-300">
                    <img src={s.icon} alt="Facebook" />
                </li>
            )}
        </ul>
    )
}

export default Socials
