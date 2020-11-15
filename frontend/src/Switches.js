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
                <h6 className="card-subtitle mb-2 text-muted">name: {item.name}</h6>
                <h6 className="card-subtitle mb-2 text-muted">type: {item.type}</h6>
                <h6 className="card-subtitle mb-2 text-muted">actuation: {item.actuation}g</h6>
                <h6 className="card-subtitle mb-2 text-muted">bottom-out: {item.bottom}g</h6>
                <h6 className="card-subtitle mb-2 text-muted">travel: {item.travel}mm</h6>
            </div>
        </div>
    );
}

export default Switches