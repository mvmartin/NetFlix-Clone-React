import react, { useEffect, useState } from 'react';
import './App.css';
import api from './components/Api/api';
import LinhaFilmes from './components/LinhasFilmes/Filmes';
import Destaque from './components/FIlmeDestaque/Destaque';
import Header from './components/Header/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [destaqueData, setDestaqueData] = useState(null);
  const [headerBlack, setHeaderBlack] = useState(false);


  useEffect(() => {
    //pegando a lista dos dados
    const loadAll = async () =>{

      let list  = await api.getHomeList();
      setMovieList(list);

        //pegando o destaque para renderizar
      let originals = list.filter( i => i.slug == 'originals')

      let numeroAleatorio = Math.floor(Math.random() * (originals[0].items.results.length -1))

      let filme = originals[0].items.results[numeroAleatorio];

      setDestaqueData(filme);
      console.log(filme)
    }

    loadAll();
  }, [])



  useEffect(()=>{
    const scrolListener = () =>{
      if(window.scrollY > 20){
        setHeaderBlack(true);
      }else{
        setHeaderBlack(false);
      }
    };

    window.addEventListener('scroll', scrolListener);
    
    return () =>{
      window.removeEventListener('scroll', scrolListener);
    }
     
    

  }, [])



  return (

    

    <div className='page'>

      <Header black={headerBlack}/>

      {destaqueData &&
        <Destaque item={destaqueData} />
      }
      
      <section className='lists'>
        {
         movieList.map((item, key) =>(
          <LinhaFilmes key={key} title={item.title} items={item.items} />
         ))
        }
      </section>


        <footer>

          <p>Direitor de imagens para Netflix</p>
          <p>Dados obtidos no site Thempviedb.org</p>

        </footer>

    </div>

  );
}

export default App;
