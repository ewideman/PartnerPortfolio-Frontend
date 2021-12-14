import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
// import property from "../../../portfolio-backend/models/property";

const UpdatePropertyView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const apiUrl = process.env.REACT_APP_API_URL;
    const [property, setProperty] = useState({
        name: "",
        address: "",
        price: "",
        imageUrl: "",
        id: ''
    });
    const id = location.pathname.split('/').pop();

    useEffect(() => {
        axios.get(`${apiUrl}/properties/property/${id}`).then(res => {
            setProperty(res.data);
        });
    }, []);

    console.log(location)

    // use useEffect Hook
    // inside of the useEffect 
    // call a getPropertyBy Id and setit to property

    const [name, SetName] = useState({

    })

    const handleChange = (event) => {
        setProperty({
            ...property,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // book.genre = book.genre.split(",");
        const url = `${apiUrl}/properties/property/${property.id}`;
        const response = await axios.put(url, property);
        navigate('/');
        setProperty({
            name: "",
            address: "",
            price: "",
            imageUrl: "",
        })
    }

    return (
        <div className="container mt-5">
            <form className="form">
                <h2>Update Property</h2>
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

export default UpdatePropertyView;
