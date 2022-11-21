import React from 'react'
import Navbar from '../components/navbar'
import hero from '../css/Assets/mandaloriantt_s2.png'
const Home = () => {
    return (
        <>
            <Navbar />
            <section className='container'>
                <div className="hero">
                    <div className="title-hero">
                        <p>TV SERIES</p>
                        <p>IMDB <span>9.1</span></p>
                    </div>

                    <div className="img-hero">
                        <img src={hero} alt="" />
                    </div>

                    <div className="text-hero">
                        <p>Em The Mandalorian, acompanhamos a história de Din Djarin (Pedro Pascal), um guerreiro solitário que trabalha como caçador de recompensas. Ele embarca numa jornada pelos territórios esquecidos da galáxia, logo após a queda do Império e antes da criação da temida Primeira Ordem.</p>
                    </div>
                    <div className="container-buttons">
                        <div className="watch">
                            <button>Watch Now</button>
                        </div>

                        <div className="trailer">
                            <button>Trailer</button>
                        </div>

                    </div>
                </div>

            </section>


        </>
    )
}

export default Home