const CreateToDo = () =>{

    return (
        <div className="container mt-4">
            <form className="row g-3 " >
                <div className="col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Todo Title"
                     
                        
                    />
                </div>
                <div className="col-auto">
                    <select
                        className="form-select"
                      
                       
                    >
                        <option value="DONE">DONE</option>
                        <option value="INPROGRESS">IN PROGRESS</option>
                    </select>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default CreateToDo
