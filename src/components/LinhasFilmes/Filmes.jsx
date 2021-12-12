import React from "react";
import './style.css';
import voltarIcon from '../imgs/esquerdo.png'
import avancarIcon from '../imgs/direito.png'
import { useState } from "react";

const LinhaFilmes  = ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);



    const handleLeftArrow = () =>{
    
        let x = scrollX + Math.round(window.innerWidth / 2);

        if(x > 0){
            x = 0
        }

        setScrollX(x)
    }

    const handleRightArrow = () =>{

        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if(window.innerWidth - listW > x){
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x)
        
    }




    return(


        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
               <img className="voltar-img" src={voltarIcon} alt="Voltar Lista" />
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <img className="avancar-img" src={avancarIcon} alt="Avançar Lista" />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>

                    {items.results.length > 0 && items.results.map((item, key) =>(

                        <div className="movieRow--item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                        
                    ))}

                </div>
            </div>
        </div>

    );

}

export default LinhaFilmes;