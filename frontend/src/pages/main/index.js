import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

export default class Main extends Component {
    state = {
       details: [],
       detailsInfo: {},
       page: 1
   }

    componentDidMount(){
        this.loadDetails()
    }

    prevPage = () => {
        
        const { page } = this.state

        if(page === 1) return

        const pageNumber = page - 1

        this.loadDetails(pageNumber)

    }

    nextPage = () => {
        const { page, detailsInfo } = this.state

        if(page === detailsInfo.pages) return 

        const pageNumber = page + 1

        this.loadDetails(pageNumber)

    }


    loadDetails = async (page = 1) => { 
        const response = await api.get(`/projects?page=${page}`) 

        console.log(response)
       
        const { docs, ...detailsInfo } = response.data;

       this.setState({ details: docs, detailsInfo, page })

    }

    render(){
        const { details, page, detailsInfo } = this.state

        return(
           
            <div className='details-list'>
            {details.map(detail =>(
            <div className='project-div' key={detail._id}>
                <img src={detail.img}/> 
                <strong>{detail.name}</strong>
                <p>{detail.description}</p>
                <Link className='buttons-div' to={`projects/${detail._id}`}>
                    Detalhes
                </Link> 
            </div>
                    ))}
                <div className='actions'>
                    <button 
                    disabled={page === 1} 
                    onClick={this.prevPage}>
                       <FiArrowLeft size={16} color="white"/>
                    </button>
                    <Link className="button-cadastro" to='/register'>
                        Cadastro
                    </Link> 
                    <button 
                    disabled={page === detailsInfo.pages} 
                    onClick={this.nextPage}>
                        <FiArrowRight size={16} color="white"/>
                    </button>
                </div>
            </div>
        )
    }
}