import React from 'react'
import './Card.css'
import fondo from '../../assets/Fondo.svg'
import grass from '../../assets/hierba.png'
import fuego from '../../assets/fuego.png'
import agua from '../../assets/agua.png'
import bug from '../../assets/bug.png'
import normal from '../../assets/circulo.png'
import poison from '../../assets/poison.png'
import electric from '../../assets/electric.png'
import tierra from '../../assets/tierra.png'
import peleador from '../../assets/peleador.png'
import psychic from '../../assets/psychic.png'
import rock from '../../assets/rock.png'
import ice from '../../assets/ice.png'
import dragon from '../../assets/dragon.png'
import all from '../../assets/all.png'
import {Link} from "react-router-dom";

const Card = () => {
    const [pokemon, setPokemon] = React.useState([]);
    const [pokemonArray, setPokemonArray] = React.useState([]);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 151; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        setPokemon(pokemonArray)
        setPokemonArray(pokemonArray)
    }

    const getPokemonData = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json());        
        return res;
    }

    const filterGrass = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "grass")
        setPokemon(arrayFiltrado)
    }

    const filterFire = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "fire")
        setPokemon(arrayFiltrado)
    }

    const filterWater = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "water")
        setPokemon(arrayFiltrado)
    }

    const filterBug = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "bug")
        setPokemon(arrayFiltrado)
    }

    const filterNormal = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "normal")
        setPokemon(arrayFiltrado)
    }

    const filterPoison = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "poison")
        setPokemon(arrayFiltrado)
    }

    const filterElectric = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "electric")
        setPokemon(arrayFiltrado)
    }

    const filterGround = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "ground")
        setPokemon(arrayFiltrado)
    }


    const filterFighting = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "fighting")
        setPokemon(arrayFiltrado)
    }

    const filterPsychic = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "psychic")
        setPokemon(arrayFiltrado)
        
    }

    const filterRock = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "rock")
        setPokemon(arrayFiltrado)
    }

    const filterIce = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "ice")
        setPokemon(arrayFiltrado)
    }

    const filterDragon = ()=>{
        const arrayFiltrado = pokemonArray.filter(item => item.types[0].type.name === "dragon")
        setPokemon(arrayFiltrado)
    }

    const filterAll = ()=>{
        getPokemonList();
    }
    
    React.useEffect(() => {
        getPokemonList();
    }, [])

  return (
    <div className=''>
        <h3>Categorias</h3>
        <div className='row botones'>
                <button type="button" className="btn btn-light" onClick={()=> filterGrass()}><img src={grass} className="imgIcon" alt="..."/> <br /> Grass</button>
                <button type="button" className="btn btn-light" onClick={()=> filterFire()}><img src={fuego} className="imgIcon" alt="..."/> <br /> Fire</button>
                <button type="button" className="btn btn-light" onClick={()=> filterWater()}><img src={agua} className="imgIcon" alt="..."/> <br /> Water</button>
                <button type="button" className="btn btn-light" onClick={()=> filterBug()}><img src={bug} className="imgIcon" alt="..."/> <br /> Bug</button>
                <button type="button" className="btn btn-light" onClick={()=> filterNormal()}><img src={normal} className="imgIcon" alt="..."/> <br /> Normal</button>
                <button type="button" className="btn btn-light" onClick={()=> filterPoison()}><img src={poison} className="imgIcon" alt="..."/> <br /> Poison</button>
                <button type="button" className="btn btn-light" onClick={()=> filterElectric()}><img src={electric} className="imgIcon" alt="..."/> <br /> Electric</button>
                <button type="button" className="btn btn-light" onClick={()=> filterGround()}><img src={tierra} className="imgIcon" alt="..."/> <br /> Ground</button>
                <button type="button" className="btn btn-light" onClick={()=> filterFighting()}><img src={peleador} className="imgIcon" alt="..."/> <br /> Fighting</button>
                <button type="button" className="btn btn-light" onClick={()=> filterPsychic()}><img src={psychic} className="imgIcon" alt="..."/> <br /> Psychic</button>
                <button type="button" className="btn btn-light" onClick={()=> filterRock()}><img src={rock} className="imgIcon" alt="..."/> <br /> Rock</button>
                <button type="button" className="btn btn-light" onClick={()=> filterIce()}><img src={ice} className="imgIcon" alt="..."/> <br /> Ice</button>
                <button type="button" className="btn btn-light" onClick={()=> filterDragon()}><img src={dragon} className="imgIcon" alt="..."/> <br /> Dragon</button> 
                <button type="button" className="btn btn-light" onClick={()=> filterAll()}><img src={all} className="imgIcon" alt="..."/> <br /> Todos</button> 
        </div>
    <h3>Pokemons</h3>
    <div className='row pokemonsCard'>
        {
            pokemon.map(item => (
               <div className="col-12 col-md-4 col-lg-2" key={item.id}>
                <div className="card">
                <div className="img"><img src={fondo} className={`${item.types[0].type.name}`} alt="..."/></div>
                 <div className="img"><img src={item.sprites.front_default} className="imgRedonda" alt="..."/></div>
                  <div className="card-body">
                    <h5 className="card-title h5-card">{item.name} <br /> <span className='experience'>XP {item.base_experience}</span></h5>
                    <div className="row content">
                        <div className="col"> <p className='p-card'><b className="b-card">{item.species.name}</b>  <br/> <span>Especie</span> </p>  </div>
                        <div className="col"> <p className='p-card'><b className="b-card">{item.weight} kg</b>  <br /> <span>Peso</span> </p>  </div>
                        <div className="col"> <p className='p-card'><b className="b-card">{item.height} m</b><br /> <span>Altura</span> </p> </div>
                        <div className="col"><p className='p-card'><b className="b-card">{item.types[0].type.name}</b><br/><span>Tipo</span></p></div>
                        <Link to={`pokemons/${item.id}`}>
                        <button type="button" className="btn btn-primary">Más informacíon</button>
                            </Link>
                    </div>
                  </div>
                  <div className={`${item.types[0].type.name} tipo`} ></div>
                </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Card