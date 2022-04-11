import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './PokemonPage.css'
import Next from '../../assets/next.png'
import Prev from '../../assets/prev.png'
import {Link} from "react-router-dom";
import Back from '../../assets/back.png'

const PokemonPage = () => {
   const {id} = useParams()
   const [pokemonOnly, setPokemonOnly] = React.useState([])

   const getPokemonList = async () => {
    let pokemonArray = [];
        pokemonArray.push(await getPokemonData(id));
    setPokemonOnly(pokemonArray)
}

    const getPokemonData = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json());        
        return res;
    }
    React.useEffect(() => {
        getPokemonList();
    }, [])


  return (
    <div className='container mt-5'>
        {
            pokemonOnly.map(item => (
              <div key={item.id}>
                <div className="titulo">
                  <Link to={`/`}>
                        <button type="button" className="btn btn-primary"><img src={Back} className="img-back" alt="..." /></button>
                            </Link>
                <h1 className='pl-2'>{item.name}</h1>
                </div>
                  
                <div className="row" >
                <div className="col-lg-6" key={item.id}>
                <div id="carouselPokemon" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselPokemon" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselPokemon" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselPokemon" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselPokemon" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={item.sprites.front_default} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Vista frontal</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={item.sprites.back_default} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Vista trasera</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={item.sprites.front_shiny} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Vista frontal shiny</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={item.sprites.back_shiny} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Vista trasera shiny</h5>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselPokemon" data-bs-slide="prev">
                    <span className="" aria-hidden="true"><img src={Prev} className="img-contro" alt="..." /></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselPokemon" data-bs-slide="next">
                  <span className="" aria-hidden="true"><img src={Next} className="img-contro" alt="..." /></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                </div>
                <div className="col-lg-6">
                  <div className="row contentPokemon">
                        <div><h5>Estadisticas de juego</h5>
                                <table className="table">
                                  <thead className="table-dark">
                                    <tr>
                                    <th>Estadísticas básicas</th>
                                    <th>Esfuerzo</th>
                                    <th>Nombre</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                    <td>{item.stats[0].base_stat}</td>
                                    <td>{item.stats[0].effort}</td>
                                    <td>{item.stats[0].stat.name}</td>
                                    </tr>
                                    <tr>
                                    <td>{item.stats[1].base_stat}</td>
                                    <td>{item.stats[1].effort}</td>
                                    <td>{item.stats[1].stat.name}</td>
                                    </tr>
                                    <tr>
                                    <td>{item.stats[2].base_stat}</td>
                                    <td>{item.stats[2].effort}</td>
                                    <td>{item.stats[2].stat.name}</td>
                                    </tr>
                                    <tr>
                                    <td>{item.stats[3].base_stat}</td>
                                    <td>{item.stats[3].effort}</td>
                                    <td>{item.stats[3].stat.name}</td>
                                    </tr>
                                    <tr>
                                    <td>{item.stats[4].base_stat}</td>
                                    <td>{item.stats[4].effort}</td>
                                    <td>{item.stats[4].stat.name}</td>
                                    </tr>
                                    <tr>
                                    <td>{item.stats[5].base_stat}</td>
                                    <td>{item.stats[5].effort}</td>
                                    <td>{item.stats[5].stat.name}</td>
                                    </tr>
                                  </tbody>
                                </table></div>
                        <h5 className='pt-3'>Otros atributos</h5>
                        <div className="row">
                          <div className="col">
                              <div><p className='p-page'><b className="b-page">Especie: </b>{item.species.name}</p></div>
                              <div><p className='p-page'><b className="b-page">Peso: </b>{item.weight} kg</p></div>
                              <div><p className='p-page'><b className="b-page">Altura:  </b>{item.height} m</p></div>
                              <div><p className='p-page'><b className="b-page">Tipo: </b>{item.types[0].type.name}</p></div></div>
                          <div className="col">
                              <div><p className='p-page'><b className="b-page">XP: </b>{item.base_experience}</p></div>
                              <div><p className='p-page'><b className="b-page">Habilidades </b></p></div>
                              <div><p className='p-page'><b className="b-page pl-2">1. </b>{item.abilities[0].ability.name}</p></div>
                              <div><p className='p-page'><b className="b-page pl-2">2. </b>{item.abilities[1].ability.name}</p></div>
                          </div>
                        </div>
                    </div>
                </div>
             </div> 
             </div>
            ))
        }
    </div>
  )
}

export default PokemonPage