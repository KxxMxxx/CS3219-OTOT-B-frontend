import React from 'react';
import './Switches.css'

const Switches = ({item, remove}) => {

    return(
        <div className="card">
            <div className="card-body">
                <div className="name">
                    <h5 class="card-title">{item.name}</h5>
                    <button onClick={() => {
                        remove(item); 
                        // one more time incase lag
                        remove(item);
                    }} className="btn btn-danger">Delete</button>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{item.name}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{item.type}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{item.actuation}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{item.travel}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{item.bottom}</h6>
            </div>
        </div>
    );
}

export default Switches