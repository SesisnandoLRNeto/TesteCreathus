import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

export default class Register extends Component {
    state ={
        name: "",
        description: "",
        img: "",
        url: ""
    }

    handleNewProject = async (e) => {
        e.preventDefault()

        const { history } = this.props
         
            const response = await api.post('/projects', this.state)
            
            return history.push('/')
    }

    render(){
       
        return ( 
          
            <div className="content">
               <section>
           
                   <h1>Cadastrar novo Projeto</h1>
                   <p></p>
               
                   <Link className='button-back' to='/'>
                    <FiArrowLeft size={16} color="#E02041"/>
                     Voltar
                   </Link>

               </section>
               <form onSubmit={this.handleNewProject}>
                   <input  
                       placeholder="Título do Projeto"
                       value={this.state.name}
                       onChange={e => this.setState({name: e.target.value})}
                   />
       
                   <textarea   
                       placeholder="Descrição"
                       value={this.state.description}
                       onChange={e => this.setState({description: e.target.value})}
                   />
                     <textarea   
                       placeholder="Link da Imagem "
                       value={this.state.img}
                       onChange={e => this.setState({img: e.target.value})}
                   />
                   <input  
                       placeholder="Link do Contato Projeto"
                       value={this.state.url}
                       onChange={e => this.setState({url: e.target.value})}
                   />
              
                   <button className="button" type="submit">Cadastrar</button>
               </form>
          </div>
       
        )}
}
