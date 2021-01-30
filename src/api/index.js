// import { reject, resolve } from "core-js/fn/promise"

const activities = {
    '123224': {
        id: "123224",
        title: 'Learn Vue.js',
        notes: 'I started today and it was noot good.',
        progress: 100,
        category:'',
        createdAt: 188878983,
        updatedAt: 8979798965   
    } ,
    '1232R24':{
        id: "1232R24",
        title: 'Read Witcher Books',
        notes: 'I started today and it was noot good.',
        progress: 50,
        category:'',
        createdAt: 188878983,
        updatedAt: 8979798965         
    }
}
const CanContinue = () => {
    const rndNumber = Math.floor(Math.random() * 10)
    if(rndNumber > 5) {
        return true
    }
    return false
}
export const fetchActivities = () => {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        if(CanContinue()){
              resolve(activities)
        }else {
             reject('Cannot fetch activities')
        }
    }, 1000)
    })

  
}


const generateUid = () => Math.floor(new Date() * Math.random())

export const createActivityAPI = (activity) => {
    activity.id = generateUid()
    activity.progress = 0
    activity.createdAt = new Date()
    activity.updatedAt = new Date()
    return new Promise((resolve, reject) => {
        resolve(activity)
    })
 
}

export const fetchCategories = () => {
    return {
            '13322': {
                id:'078',
                text: 'books'
            },
            '3877': {
                id:'78543',
                text:'movies'
            }
        }
    
}

export const fetchUsers = () => {
    return {
        user: {
            name: 'Leroy Philip',
            "id": '-AJJSK',
        },
    }
}