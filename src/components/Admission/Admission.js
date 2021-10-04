import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ServicesContext } from '../../App';
import { useHistory } from "react-router-dom";

const Admission = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const services = useContext(ServicesContext);
    const instrument = services.map(service => {
        const name = service.name.slice(5);
        return (
            <option key={service.id} value={name}>
                {name}
            </option>
        );
    });

    const history = useHistory();

    const handleAdmission = () => {
        if (name && email) {
            history.push("/success");
        };
    };

    const handleName = event => {
        setName(event.target.value);
    };

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    return (
        <Container className="py-5 mt-5">
            <h2 className="metal-font display-6 text-center pb-3">Admission</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        onChange={handleName}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="example@gmail.com"
                        onChange={handleEmail}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">
                        Which instrument you want to learn?
                    </label>

                    <select className="form-select">
                        <option >Choose Instrument</option>
                        {instrument}
                    </select>
                </div>

                <button type="submit" onClick={handleAdmission} className="btn btn-danger w-100">Submit</button>
            </form>
        </Container>
    );
};

export default Admission;