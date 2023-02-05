export function students(state=[],action){
    if(action.type === "STUDENTS_LIST"){
        return action.payload
    }
    return state;
}