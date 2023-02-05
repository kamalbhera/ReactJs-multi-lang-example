import React ,{ useEffect }from 'react'
import {connect} from 'react-redux';
import * as actions from '../actions';
import Translate from 'react-translate-component'
  
const All = (props)=>{ 
     
    useEffect(() => { 
        props.fakeStudentsService();
        //props.studentsList();
        //props.studentsService();
    });
    const StudentList  = ({students})=>{
        if(Object.keys(students).length>0)
        {
            return students.map((student)=>{
                return(
                    <tr key={Math.random()}>  
                        <td>{student.Name}</td>
                        <td>{student.Status}</td>
                        <td>{student.Major}</td>
                    </tr>
                );
            })
        }
    }
    return(
        <div className="row justify-content-center mt-3">
            <div className="col-auto">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <Translate content="TableName" component="th" />
                            <Translate content="TableStatus" component="th"/>
                            <Translate content="TableMajor" component="th"/>
                        </tr>
                    </thead>
                    <tbody>
                    {StudentList (props)}
                    </tbody>
                </table>
            </div>
        </div>
    )    
}

const mapStateToProps = (state)=>{
    return{
        students:state.students
    }
}
export default connect(mapStateToProps,actions)(All);