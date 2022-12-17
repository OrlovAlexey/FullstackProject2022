import React, { Component } from 'react'
import axios from 'axios'

class CreateNote extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        description: '',
        priority: ''
      }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const newNote = {
            name: this.state.name,
            description: this.state.description,
            priority: this.state.priority
        }
        axios.post('http://localhost:8080/easynote', newNote)
            .then((res)=>{
                alert("Success")
            }).catch((err)=>{
                alert("Error")
            })
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Note</h5>
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group mt-5">
                                    <input type="text" onChange={(event)=>this.changeHandler(event, "name")} className="form-control form-control-lg " placeholder="Note Name" />
                                </div>
                                <div className="form-group mt-2">
                                    <textarea onChange={(event)=>this.changeHandler(event, "description")} className="form-control form-control-lg" placeholder="Note Body"></textarea>
                                </div>
                                <div className="form-group mt-2">
                                    <select className="form-control form-control-lg" onChange={(event)=>this.changeHandler(event, "priority")} >
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreateNote