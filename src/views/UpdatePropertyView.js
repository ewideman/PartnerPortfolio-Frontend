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
console.log("id",location.pathname.split('/').pop())
    useEffect(() => {
        const ID = location.pathname.split('/').pop();
        axios.get(`${apiUrl}/properties/property/${ID}`).then(res => {
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
        const url = `${apiUrl}/properties/property/${id}`;
        const response = await axios.put(url, property);
        navigate('/');
        setProperty({
            name: "",
            address: "",
            irr: "",
            price: "",
            imageUrl: "",
            holder:"",
            mPartner:"",
            hPhone: "",
            hEmail: "",
        })
    }

    return (
        <div className="container mt-5">
            <form className="form">
                <h2>Property Information</h2>
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
                    onChange={handleChange}
                    value={property.Irr}
                    name="IRR"
                    className="form-control"
                    placeholder="Internal Rate of Return Percentage"
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
                <br></br>    
                <h2>Ownership Information</h2>
                <input
                    name="holder"
                    onChange={handleChange}
                    value={property.holder}
                    className="form-control"
                    placeholder="Holding Company/ LCC"
                    type="text"
                /> 
                <input
                    name="mPartner"
                    onChange={handleChange}
                    value={property.mPartner}
                    className="form-control"
                    placeholder="Managing Parnter"
                    type="string"
                /> 
                
                <input
                    name="hPhone"
                    onChange={handleChange}
                    value={property.hPhone}
                    className="form-control"
                    placeholder="Phone Number"
                    type="string"
                /> 
                <input
                    name="hEmail"
                    onChange={handleChange}
                    value={property.hEmail}
                    className="form-control"
                    placeholder="Email"
                    type="string"
                /> 
                <button
                    onClick={handleSubmit}
                    className="btn btn-outline-dark form-control">
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdatePropertyView;
