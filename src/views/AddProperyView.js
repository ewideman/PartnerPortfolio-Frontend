import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const AddPropertyView = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [property, setProperty] = useState({
        name: "",
        address: "",
        price: "",
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setProperty({
            ...property,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${apiUrl}/properties/property`, property);
        console.log(response)
        navigate('/');
        setProperty({
            name: "",
            address: "",
            price: "",
        })
    }
    
    return (
        <div className="container mt-5">
            <form className="form">
                <h2>Add Property</h2>
                <input
                    onChange={handleChange}
                    value={property.name}
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    type="text"
                />
                <input
                    name="address"
                    onChange={handleChange}
                    value={property.address}
                    className="form-control"
                    placeholder="Address"
                    type="text"
                />
                <input
                    name="price"
                    onChange={handleChange}
                    value={property.price}
                    className="form-control"
                    placeholder="Price"
                    type="number"
                />
                <input
                    name="imageUrl"
                    onChange={handleChange}
                    value={property.imageUrl}
                    className="form-control"
                    placeholder="imgUrl"
                    type="text"
                />
                <button
                    onClick={handleSubmit}
                    className="btn btn-outline-dark form-control">
                    Create
                </button>
            </form>
        </div>
    );
};

export default AddPropertyView;
