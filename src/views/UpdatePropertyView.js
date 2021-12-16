import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
// import property from "../../../portfolio-backend/models/property";
import {
    PropertyTypes,
    YearsBuilt,
    Ratings,
    SingleMultiOptions
} from "../constant/options";
const UpdatePropertyView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const apiUrl = process.env.REACT_APP_API_URL;
    const [property, setProperty] = useState({
        name: "",
        address: "",
        price: "",
        imageUrl: "",
        id: '',
        carousel: []
    });

    const id = location.pathname.split('/').pop();
    console.log("id", location.pathname.split('/').pop())
    useEffect(() => {
        const ID = location.pathname.split('/').pop();
        axios.get(`${apiUrl}/properties/property/${ID}`).then(res => {
            console.log('res.data', res.data)
            setProperty(res.data);
        });
    }, []);

    console.log('property', property)

    // use useEffect Hook
    // inside of the useEffect 
    // call a getPropertyBy Id and setit to property

    const [name, SetName] = useState({

    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        // carousel.${index}.url

        if (name.indexOf('.') !== -1) {
            const [prop, index, attr] = name.split('.');
            property[prop][index][attr] = value;
            setProperty({ ...property })
        } else {
            setProperty({
                ...property,
                [name]: value
            });
        }
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
            holder: "",
            mPartner: "",
            hPhone: "",
            hEmail: "",
        })
    }

    const addSlide = (event) => {
        event.preventDefault();

        setProperty(prop => ({
            ...prop,
            carousel: prop.carousel.concat({
                url: '',
                title: '',
                label: '',
                text: ''
            })
        }));
    };

    const removeSlide = (event, index) => {
        event.preventDefault();
        property.carousel.splice(index, 1);
        setProperty({...property});
    };

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
                    value={property.irr}
                    name="irr"
                    className="form-control"
                    placeholder="Internal Rate of Return Percentage"
                    type="number"
                />

                <select class="form-select"
                    name="propertyType"
                    onChange={handleChange}
                >
                    {
                        PropertyTypes.map(item => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                </select>
                <select class="form-select"
                    name="yearBuilt"
                    onChange={handleChange}
                >
                    {
                        YearsBuilt.map(item => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                </select>
                <select class="form-select"
                    name="bldgRating"
                    onChange={handleChange}
                >
                    {
                        Ratings.map(item => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                </select>

                <input
                    onChange={handleChange}
                    value={property.bldgCredit}
                    name="bldgCredit"
                    className="form-control"
                    placeholder="Property Square Feet"
                />

                <input
                    onChange={handleChange}
                    value={property.bSize}
                    name="bSize"
                    className="form-control"
                    placeholder="size"
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
                <div class="checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="opportunity"
                            onChange={(e) => {
                                setProperty({
                                    ...property,
                                    opportunity: e.target.value == "on" ? true : false,
                                })
                            }}
                        />
                        Opportunity Zone
                    </label>
                </div>
                <br></br>
                <h2>Tenant Information</h2>
                <input
                    name="tenantOccupancy"
                    onChange={handleChange}
                    value={property.tenantOccupancy}
                    className="form-control"
                    placeholder="tenantOccupancy"
                    type="number"
                />

                <select class="form-select"
                    name="tenantSingleMulti"
                    onChange={handleChange}
                >
                    {
                        SingleMultiOptions.map(item => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                </select>

                <input
                    name="leaseYearsLeft"
                    onChange={handleChange}
                    value={property.leaseYearsLeft}
                    className="form-control"
                    placeholder="leaseYearsLeft"
                    type="text"
                />
                <input
                    name="leaseEndDate"
                    onChange={handleChange}
                    value={property.leaseEndDate}
                    className="form-control"
                    placeholder="leaseEndDate"
                    type="text"
                />

                {/* Ownership */}
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

                {/* Carousel */}
                <h2>Carousel</h2>
                {(property.carousel || []).map((slide, index) => (
                    <div key={slide.title}>
                        <hr />
                        <h3>Slide {index + 1}</h3>

                        <label>URL</label>
                        <input
                            name={`carousel.${index}.url`}
                            onChange={handleChange}
                            value={slide.url}
                            className="form-control"
                            placeholder="URL"
                            type="string"
                        />
                        <label>Title</label>
                        <input
                            name={`carousel.${index}.title`}
                            onChange={handleChange}
                            value={slide.title}
                            className="form-control"
                            placeholder="Title"
                            type="string"
                        />
                        <label>Label</label>
                        <input
                            name={`carousel.${index}.label`}
                            onChange={handleChange}
                            value={slide.label}
                            className="form-control"
                            placeholder="Label"
                            type="string"
                        />
                        <label>Text</label>
                        <input
                            name={`carousel.${index}.text`}
                            onChange={handleChange}
                            value={slide.text}
                            className="form-control"
                            placeholder="Text"
                            type="string"
                        />
                        
                        <Button variant="danger" className="mt-2" onClick={(event) => removeSlide(event, index)}>Remove slide</Button>
                    </div>
                ))}
                
                <Button className="my-2" onClick={addSlide}>Add slide</Button>

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
