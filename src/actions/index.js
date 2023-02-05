import axios from 'axios'
const fakeURL = "http://localhost:3005/students";
const RealURL = "https://www.test.com/api/students";
export function fakeStudentsService(){
    let data = axios.get(fakeURL)
    .then((response)=>{
        return response.data;
    })
    .catch((err)=>{
        console.log(err)
    })
    return {
        type:'STUDENTS_LIST',
        payload:data
    }
}
export function studentsService(){
    let data = axios.get(RealURL)
    .then((response)=>{
        return response.data;
    })
    .catch((err)=>{
        console.log("err",err)
    })
    return {
        type:'STUDENTS_LIST',
        payload:data
    }
}

export function studentsList(){
    
    return {
        type:'STUDENTS_LIST',
        payload:[
            {
                Name:"Hossam Mokhtar Saad",
                Status:"Intial Acceptance",
                Major:"Medcine"
            },
            {
                Name:"Mohamed Samy Abdelaad",
                Status:"Intial Acceptance",
                Major:"Medcine"
            },
            {
                Name:"Zakaria Hassan Abdellatif",
                Status:"Conditional Acceptance",
                Major:"Medcine"
            },
            {
                Name:"Zakaria Mohamed Zakaria",
                Status:"Intial Acceptance",
                Major:"Medcine"
            },
            {
                Name:"Omr Mukhtar Ismael",
                Status:"Intial Acceptance",
                Major:"Medcine"
            }
        ]
    }
}