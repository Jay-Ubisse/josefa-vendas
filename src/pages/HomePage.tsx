import { Link } from "react-router-dom"

import { Header } from "../components/Header"
import { WhatsappButton } from "../components/WhatsappButton"
import { products } from "../data/products"

export const HomePage = () => {

  return (
    <div>
      <Header />
      <main className="relative min-h-screen bg-slate-100">
        <section className="bg-home-background bg-cover">
          <div className="bg-yellow-200/90 w-full h-full p-5">
            <h1 className="text-green-700 font-bold mobile:text-2xl w-3/4">
              Seu estilo, sua beleza, nossa missão.
            </h1>
            <hr className="bg-green-700 h-1 w-[30%] rounded-lg mt-2 mb-5" />
            <p className="font-medium text-slate-800">
              Buscando os melhores produtos da <span className="text-green-700 underline underline-offset-2">Tupperware</span> e cosméticos <span className="text-green-700 underline underline-offset-2">Avon</span> para cuidar da sua pele e confiança? <br />
              Então você precisa visitar a nossa loja.
            </p>
            <Link to="/loja" className="flex border-2 border-green-700 p-2 text-green-700 w-fit hover:bg-green-700 hover:text-white mt-5">
              <h1 className="font-semibold mobile:text-lg">
                Ver produtos
              </h1>
            </Link>
          </div>
        </section>
        <section className="mt-10">
          <h1 className="text-green-700 font-bold mobile:text-2xl text-center">
            Nossos Produtos
          </h1>
          <hr className="bg-green-700 h-1 w-[30%] rounded-lg mt-2 mb-8 mx-auto" />
          <h2 className="text-green-700 font-semibold mobile:text-lg ml-2">Tupperware</h2>
          <hr className="bg-green-700 h-[2px] w-[30%] rounded-lg mt-2 mb-5 ml-2" />
          {products.map((product) => {
            if (product.brand === "Tupperware") {
              return (
                <>
                  <div
                    key={product.id}
                    className="card w-[96%] mx-auto glass my-5 shadow-lg shadow-slate-400"
                  >
                    <figure>
                      <img src={product.imageUrl} alt="Product Image" />
                    </figure>
                    <div className="card-body px-4 bg-slate-200">
                      <h2 className="card-title flex flex-row items-start">
                        <span>{product.name}</span>
                        <span className="bg-green-400 px-2 py-2 text-slate-700 font-medium text-xs rounded-lg">{product.category}</span>
                      </h2>
                      <p>{product.price}</p>
                      <div className="card-actions justify-end mt-5">
                        <button className="btn btn-primary bg-green-700 border-none text-white">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}

          <h2 className="text-green-700 font-semibold mobile:text-lg ml-2 mt-10">Avon</h2>
          <hr className="bg-green-700 h-[2px] w-[30%] rounded-lg mt-2 mb-5 ml-2" />
          {products.map((product) => {
            if (product.brand === "Avon") {
              return (
                <>
                  <div
                    key={product.id}
                    className="card w-[96%] mx-auto glass my-5 shadow-lg shadow-slate-400"
                  >
                    <figure>
                      <img src={product.imageUrl} alt="Product Image" />
                    </figure>
                    <div className="card-body px-4 bg-slate-200">
                      <h2 className="card-title flex flex-row items-start">
                        <span>{product.name}</span>
                        <span className="bg-green-400 px-2 py-2 text-slate-700 font-medium text-xs rounded-lg">{product.category}</span>
                      </h2>
                      <p>{product.price}</p>
                      <div className="card-actions justify-end mt-5">
                        <button className="btn btn-primary bg-green-700 border-none text-white">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </section>
        <WhatsappButton />
      </main>
    </div>
  )
}
