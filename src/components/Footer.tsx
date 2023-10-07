import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo, TwitterLogo, Phone, EnvelopeSimple } from "@phosphor-icons/react"

export const Footer = () => {
    const date = new Date();
    return (
        <footer id="contact" className="py-5 bg-slate-100 text-center text-slate-800 text-xs">
            <div>
                <Link to="/" className="flex border-2 border-green-700 p-2 text-green-700 w-fit mx-auto">
                    <h1 className="font-bold mobile:text-2xl">
                        LOGOTIPO
                    </h1>
                </Link>
            </div>
            <nav className="flex flex-row gap-7 text-slate-800 w-fit mx-auto my-5">
                <InstagramLogo 
                    size={24}
                    weight="fill"
                />
                <FacebookLogo 
                    size={24}
                    weight="fill"
                />
                <TwitterLogo 
                    size={24}
                    weight="fill"
                />
            </nav>
            <div className="w-3/4 mx-auto mb-5 flex flex-col items-center">
                <p className="flex gap-2 items-center">
                    <span><Phone size={20} weight="fill"/></span>
                    <span>+258 86 906 1357 / 84 906 1356</span>
                </p>
                <p className="flex gap-2 items-center">
                    <span><EnvelopeSimple size={20} weight="fill"/></span>
                    <span>vendas@nomedaempresa.com</span>
                </p>
            </div>
            <p>&copy; {date.getFullYear()} Josefa Pita. Todos os direitos reservados.</p>
            <p>Desenvolvido e mantido pela <span className="underline underline-offset-2 font-medium">Binario</span></p>
        </footer>
    );
}