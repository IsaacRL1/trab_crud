import React, { useState, useEffect } from 'react';
import { supabase } from './createClient';
import './App.css'

const App = () => {

  const [usuarios, setUsuarios] = useState([])

  const [usuario, setUsuario] = useState({
    nome: '', idade: ''
  })

  const [usuario2, setUsuario2] = useState({
    id: '', nome: '', idade: ''
  })

  console.log(usuario2)

  useEffect(() => {
    fetchUsuarios()
  }, [])

  async function fetchUsuarios() {
    const { data } = await supabase
      .from('usuarios')
      .select('*')
    setUsuarios(data)


  }

  function handleChange(event) {

    setUsuario(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleChange2(event) {

    setUsuario2(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  async function criarUsuario() {
    await supabase
      .from('usuarios')
      .insert({ nome: usuario.nome, idade: usuario.idade })
    fetchUsuarios()

  }

  async function deletarUsuario(usarioId) {

    const { data, error } = await supabase
      .from('usuarios')
      .delete()
      .eq('id', usarioId)
    fetchUsuarios()

    if (error) {
      console.log(error)
    }

    if (data) {
      console.log(data)
    }

  }

  function selecionarUsuario(usarioId) {
    usuarios.map((usuario) => {

      if (usuario.id == usarioId) {
        setUsuario2({ id: usuario.id, nome: usuario.nome, idade: usuario.idade })
      }

    })


  }

  async function atualizarUsuario(usarioId) {

    const { data, error } = await supabase
      .from('usuarios')
      .update({ id: usuario2.id, nome: usuario2.nome, idade: usuario2.idade })
      .eq('id', usarioId)
      fetchUsuarios()

      if (error) {
        console.log(error)
      }
  
      if (data) {
        console.log(data)
      }
  }


  return (
    <div>


      {/*Formulario 1*/}
      <form onSubmit={criarUsuario}>
        <input
          type="text"
          placeholder='Nome'
          name='nome'
          onChange={handleChange}

        />
        <input
          type="number"
          placeholder='Idade'
          name='idade'
          onChange={handleChange}
        />
        <button type='submit'>Criar</button>
      </form>

      {/*Formulario 2*/}
      <form onSubmit={()=>atualizarUsuario(usuario2.id)}>
        <input
          type="text"
          name='nome'
          onChange={handleChange2}
          defaultValue={usuario2.nome}

        />
        <input
          type="number"
          name='idade'
          onChange={handleChange2}
          defaultValue={usuario2.idade}
        />
        <button type='submit'>Salvar mudancas</button>
      </form>



      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Editar/Deletar</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) =>
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.idade}</td>
              <td>
                <button onClick={() => { selecionarUsuario(usuario.id) }}>Editar</button>
                <button onClick={() => { deletarUsuario(usuario.id) }}>Deletar</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App;