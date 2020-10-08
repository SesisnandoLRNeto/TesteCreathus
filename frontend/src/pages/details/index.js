import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiMail, FiTrash } from 'react-icons/fi'
import { toast } from 'react-toastify'

import api from '../../services/api'

import './styles.css'

export default class Details extends Component {
    state ={
        details: {},
        toast: toast.success()
    }

    async componentDidMount(){

        const { id } = this.props.match.params

        const response = await api.get(`/projects/${id}`)
 
        this.setState({ details: response.data })

    }

    deleteDetails = async (e) => {

        const { history } = this.props

        e.preventDefault()

        const { id } = this.props.match.params

        try{
        await api.delete(`/projects/${id}`)
        .then(() => {
        history.push('/')
        })
    }
        catch(err){
            alert('Erro ao deletar projeto, tente novamente.')
        }    
      
    }

    render(){
        const { details } = this.state

        return ( 
        <div className='details-info'>
            <p className='title'>Detalhes do Projeto</p>
            <img src={details.img}/>
            <h1>{details.name}</h1>
            <p>{details.description}</p>
            
            <div className='buttons'>
                <a href={details.url}><FiMail size={28} color='#da552f'/></a>
                <div></div>
                <button className='button-delete' onClick={this.deleteDetails}>
                    <FiTrash size={28} color='#da552f'/>
                    </button>
                <Link className='button-back' to='/'>Voltar</Link>
            </div>
        </div> 
        )}
}

