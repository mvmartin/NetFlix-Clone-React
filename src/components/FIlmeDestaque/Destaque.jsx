import react from "react";
import './style.css';

const Destaque = ({item}) =>{


    let data = new Date(item.first_air_date)


    return(

        <section className="filmes" style={{
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="filme--verifical">
                <div className="filme--horizontal">

                    <div className="filme-nome">{item.name}</div>

                    <div className="filme-info">

                        <div className="filme-votos">{item.vote_average} Pontos</div>
                        <div className="filme-ano">{data.getFullYear()}</div>
                        
                    </div>

                    <div className="filme-descricao">{item.overview}</div>
                    <div className="botoes">
                        <a href="#" className="assistir">► Assistir</a>
                        <a href="#" className="minha-lista">+ Minha Lista</a>
                    </div>
                </div>
            </div>
            


        </section>

    );

};

export default Destaque;