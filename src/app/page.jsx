"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import CardPokemon from "../components/CardPokemon/CardPokemon";
import DetalhePokemon from "../components/DetalhePokemon/DetalhePokemon";
import Loading from "../components/Loading/Loading";
import styles from "./page.module.css";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelecionado, setPokemonSelecionado] = useState(null);
  const [carregandoLista, setCarregandoLista] = useState(true);
  const [carregandoDetalhe, setCarregandoDetalhe] = useState(false);

  // Busca a lista de pokémons (leitura de lista)
  useEffect(() => {
    async function buscarLista() {
      try {
        const resposta = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const dados = await resposta.json();
        setPokemons(dados.results);
      } catch (erro) {
        console.error("Erro ao buscar lista:", erro);
      } finally {
        setCarregandoLista(false);
      }
    }

    buscarLista();
  }, []);

  // Busca as informações de um registro único
  async function buscarDetalhe(nome) {
    setCarregandoDetalhe(true);
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome}`
      );
      const dados = await resposta.json();
      setPokemonSelecionado(dados);
    } catch (erro) {
      console.error("Erro ao buscar detalhe:", erro);
    } finally {
      setCarregandoDetalhe(false);
    }
  }

  function fecharDetalhe() {
    setPokemonSelecionado(null);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.subtitulo}>Lista de Pokémons</h2>
        <p className={styles.instrucao}>
          Clique em um card para ver os detalhes.
        </p>

        {carregandoLista ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {pokemons.map((pokemon) => (
              // Dados passados via props para o componente CardPokemon
              <CardPokemon
                key={pokemon.name}
                nome={pokemon.name}
                onClick={buscarDetalhe}
              />
            ))}
          </div>
        )}

        {carregandoDetalhe && <Loading />}

      
        <DetalhePokemon
          pokemon={pokemonSelecionado}
          onFechar={fecharDetalhe}
        />
      </main>
    </>
  );
}
