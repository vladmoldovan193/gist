import axios from 'axios';
import * as Config from '../utils/Config'

const getListGistsForUser = async (username) =>{

    return new Promise((resolve,reject)=>{

        axios.get(Config.api+"/users/"+username+"/gists",{
            headers: {
                'Accept': 'application/vnd.github+json'
            }
        })
            .then(result=>{
                resolve(result);
            })
            .catch(err=>{
                reject(err);
            })

    })

}

const getForksForGist = async (id) =>{

    return new Promise((resolve,reject)=>{

        axios.get(Config.api+"/gists/"+id+"/forks",{
            headers: {
                'Accept': 'application/vnd.github+json'
            }
        })
            .then(result=>{
                resolve(result);
            })
            .catch(err=>{
                reject(err);
            })

    })

}

const getGistById = async (id) =>{
    return new Promise((resolve,reject)=>{

        axios.get(Config.api+"/gists/"+id,{
            headers: {
                'Accept': 'application/vnd.github+json'
            }
        })
            .then(result=>{
                resolve(result);
            })
            .catch(err=>{
                reject(err);
            })

    })
}

export{
    getListGistsForUser,
    getForksForGist,
    getGistById
}