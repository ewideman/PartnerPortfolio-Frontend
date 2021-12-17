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
                <h2>General Information</h2>
                    <hr/>
                    <br/>
                    <p>Name</p>
                <input
                    onChange={handleChange}
                    value={property.name}
                    name="name"
                    className="form-control"
                    placeholder="The White House"
                    type="text"
                />
                    <br/>
                    <p>Address</p>
                <input
                    name="address"
                    onChange={handleChange}
                    value={property.address}
                    className="form-control"
                    placeholder="1600 Pennsylvania Avenue NW, Washington, DC 20500"
                    type="text"
                />
                    <br/>
                    <p>Price</p>
                <input
                    name="price"
                    onChange={handleChange}
                    value={property.price}
                    className="form-control"
                    placeholder="10000000"
                    type="number"
                />
                    <br/>
                    <p>Internal Rate of Return Percentage</p>
                 <input
                    onChange={handleChange}
                    value={property.irr}
                    name="irr"
                    className="form-control"
                    placeholder="2"
                    type="number"
                />
                    <br/>
                    <p>Image URL</p>
                 <input
                    name="imageUrl"
                    onChange={handleChange}
                    value={property.imageUrl}
                    className="form-control"
                    placeholder="www.image.url.com"
                    type="text"
                />        
                <br/>
                <br/>

                <h2>Property Information</h2>
                <hr/>
                <br/>
                    <p>Property Type</p>
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
                <br/>
                <p>Year Built</p>
               <input
                    onChange={handleChange}
                    value={property.yearBuilt}
                    name="yearBuilt"
                    className="form-control"
                    placeholder="1792"
                    type="number"
                />
                <br/>
                <p>Building Rating</p>

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
                <br/>
                <p>Building Credit</p>
                <input
                    onChange={handleChange}
                    value={property.bldgCredit}
                    name="bldgCredit"
                    className="form-control"
                    placeholder="AAA"
                />		
                <br/>
                <p>Square Footage</p>	
                <input
                    onChange={handleChange}
                    value={property.bSize}
                    name="bSize"
                    className="form-control"
                    placeholder="54900"
                    type="number"
                />
                <br/>
                <p>Number of Floors</p>
                <input
                    onChange={handleChange}
                    value={property.floorNumber}
                    name="floorNumber"
                    className="form-control"
                    placeholder="3"
                    type="number"
                />
                <br/>
                <p>Floor Plate</p>
                 <input
                    onChange={handleChange}
                    value={property.floorPlate}
                    name="floorPlate"
                    className="form-control"
                    placeholder="20000"
                    type="number"
                />
                <div class="checkbox">
                <label>
                    <br/>
                <input 
                        type="checkbox" 
                        name="opportunity" 
                        onChange={(e)=>{
                            setProperty({
                                ...property,
                                opportunity: e.target.value == "on" ? true:false,
                            })
                        }}
                    />
                    Opportunity Zone
                </label>
                </div>    
                <br></br>    
                <br/>
                <h2>Tenant Information</h2>
                <hr/>
                <br/>
                <p>Tenant Occupancy Percentage</p>
            <input
							name="tenantOccupancy"
							onChange={handleChange}
							value={property.tenantOccupancy}
							className="form-control"
							placeholder="100"
							type="number"
						/>
                <br/>
                <p>Single or Multi Tenant</p>

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
                        <br/>
                        <p>Years of Lease Remaining</p>
						<input
							name="leaseYearsLeft"
							onChange={handleChange}
							value={property.leaseYearsLeft}
							className="form-control"
							placeholder="3"
							type="text"
						/> 
                        <br/>
                        <p>Lease End Date</p>
						<input
							name="leaseEndDate"
							onChange={handleChange}
							value={property.leaseEndDate}
							className="form-control"
							placeholder="01/24/2024"
							type="text"
						/> 
                <br/>
                <br/>
                <h2>Parking Information</h2>
                <hr/>
                <br/>
                <p>Parking Spaces</p>
                <input
                    name="parkingSpaces"
                    onChange={handleChange}
                    value={property.parkingSpaces}
                    className="form-control"
                    placeholder="100"
                    type="Number of Parking Spaces"
                /> 
                <br/>
                <p>Parking Ratio</p>

                <input
                    name="Parking Ratio"
                    onChange={handleChange}
                    value={property.mPartner}
                    className="form-control"
                    placeholder="1:5"
                    type="string"
                /> 
                <br/>
                <p>Parking Revenue</p>
                <input
                    name="parkingRevenue"
                    onChange={handleChange}
                    value={property.hPhone}
                    className="form-control"
                    placeholder="Parking Revenue"
                    type="string"
                /> 
                <br/>
                <br/>
                <h2>Ownership Information</h2>
                <hr/>
                <br/>
                <p>Holding Company/LCC</p>
                <input
                    name="holder"
                    onChange={handleChange}
                    value={property.holder}
                    className="form-control"
                    placeholder="The Business Factory"
                    type="text"
                /> 
                <br/>
                <p>Managing Parnter</p>
                <input
                    name="mPartner"
                    onChange={handleChange}
                    value={property.mPartner}
                    className="form-control"
                    placeholder="Vincent Adultman"
                    type="string"
                /> 
                <br/>
                <p>Phone Number</p>
                <input
                    name="hPhone"
                    onChange={handleChange}
                    value={property.hPhone}
                    className="form-control"
                    placeholder="555 555 5555"
                    type="string"
                /> 
                <br/>
                <p>Email</p>
                <input
                    name="hEmail"
                    onChange={handleChange}
                    value={property.hEmail}
                    className="form-control"
                    placeholder="fake@gmail.com"
                    type="string"
                /> 
                <br/>
                <br/>
                {/* Carousel */}
                <h2>Carousel</h2>
                {(property.carousel || []).map((slide, index) => (
                    <div key={slide.title}>
                        <hr />
                        <h3>Slide {index + 1}</h3>
                        <br/>
                        <label>URL</label>
                        <input
                            name={`carousel.${index}.url`}
                            onChange={handleChange}
                            value={slide.url}
                            className="form-control"
                            placeholder="URL"
                            type="string"
                        />
                        <br/>
                        <label>Title</label>
                        <input
                            name={`carousel.${index}.title`}
                            onChange={handleChange}
                            value={slide.title}
                            className="form-control"
                            placeholder="Title"
                            type="string"
                        />
                        <br/>
                        <label>Label</label>
                        <input
                            name={`carousel.${index}.label`}
                            onChange={handleChange}
                            value={slide.label}
                            className="form-control"
                            placeholder="Label"
                            type="string"
                        />
                        <br/>
                        <label>Text</label>
                        <input
                            name={`carousel.${index}.text`}
                            onChange={handleChange}
                            value={slide.text}
                            className="form-control"
                            placeholder="Text"
                            type="string"
                        />
                        <br/>
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
