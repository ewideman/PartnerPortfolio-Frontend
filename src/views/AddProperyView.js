import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    PropertyTypes,
    YearsBuilt,
    Ratings,
    SingleMultiOptions
} from "../constant/options";


const AddPropertyView = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [property, setProperty] = useState({
        address: "",
        bSize: "",
        bldgCredit: "",
        bldgRating: "A",
        hEmail: "",
        hPhone: "",
        holder: "",
        imageUrl: "",
        irr: "",
        leaseEndDate: "",
        leaseYearsLeft: "",
        mPartner: "",
        name: "",
        price: "",
        tenantOccupancy: "",
        opportunity: false,
        propertyType: 'Office',
        yearBuilt: '',

    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        console.log("property", {
            ...property,
            [event.target.name]: event.target.value
        })
        setProperty({
            ...property,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        var raw = JSON.stringify({
            "name": "A",
            "address": "A",
            "price": 100,
            "irr": 1,
            "imageUrl": "A",
            "holder": "a",
            "mPartner": "a",
            "hPhone": 100,
            "hEmail": "A",
            "propertyType": "type1",
            "yearBuilt": "2020",
            "bldgRating": "5",
            "opportunity": true,
            "bSize": 10
        });

        const response = await axios.post(`${apiUrl}/properties/property`, property);
        alert("Created Building")
        console.log(response)
        navigate('/');
        setProperty({
            //Bldg Info
            name: "",
            address: "",
            price: "",
            irr: "",
            opportunity: "",
            bldgRating: "",
            yearBuilt: "",
            propertyTypes: "",
            bSize: "",
            imageUrl: "",


            //Tenant Info
            tenantOccupancy: "",
            //occupancy: dropdown
            tenantSingleMulti: "",
            //single/multi dropdown
            leaseYearsLeft: "",
            //years number
            leaseEndDate: "",

            //Parking Information
            parkingSpaces: "",
            parkingRatio: "",
            parkingRevenue: "",

            //OwnerInfo
            holder: "",
            mPartner: "",
            hPhone: "",
            hEmail: "",
            //
        })
    }

    return (
        <div className="container mt-5">
            <form className="form">
                <h2>General Information</h2>
                <hr />
                <br />
                <p>Name</p>
                <input
                    onChange={handleChange}
                    value={property.name}
                    name="name"
                    className="form-control"
                    placeholder="The White House"
                    type="text"
                />
                <br />
                <p>Address</p>
                <input
                    name="address"
                    onChange={handleChange}
                    value={property.address}
                    className="form-control"
                    placeholder="1600 Pennsylvania Avenue NW, Washington, DC 20500"
                    type="text"
                />
                <br />
                <p>Price</p>
                <input
                    name="price"
                    onChange={handleChange}
                    value={property.price}
                    className="form-control"
                    placeholder="10000000"
                    type="number"
                />
                <br />
                <p>Internal Rate of Return Percentage</p>
                <input
                    onChange={handleChange}
                    value={property.irr}
                    name="irr"
                    className="form-control"
                    placeholder="2"
                    type="number"
                />
                <br />
                <p>Image URL</p>
                <input
                    name="imageUrl"
                    onChange={handleChange}
                    value={property.imageUrl}
                    className="form-control"
                    placeholder="www.image.url.com"
                    type="text"
                />
                <br />
                <br />

                <h2>Property Information</h2>
                <hr />
                <br />
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
                <br />
                <p>Year Built</p>
                <input
                    onChange={handleChange}
                    value={property.yearBuilt}
                    name="yearBuilt"
                    className="form-control"
                    placeholder="1792"
                    type="number"
                />
                <br />
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
                <br />
                <p>Building Credit</p>
                <input
                    onChange={handleChange}
                    value={property.bldgCredit}
                    name="bldgCredit"
                    className="form-control"
                    placeholder="AAA"
                />
                <br />
                <p>Square Footage</p>
                <input
                    onChange={handleChange}
                    value={property.bSize}
                    name="bSize"
                    className="form-control"
                    placeholder="54900"
                    type="number"
                />
                <br />
                <p>Number of Floors</p>
                <input
                    onChange={handleChange}
                    value={property.floorNumber}
                    name="floorNumber"
                    className="form-control"
                    placeholder="3"
                    type="number"
                />
                <br />
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
                        <br />
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
                <br />
                <h2>Tenant Information</h2>
                <hr />
                <br />
                <p>Tenant Occupancy Percentage</p>
                <input
                    name="tenantOccupancy"
                    onChange={handleChange}
                    value={property.tenantOccupancy}
                    className="form-control"
                    placeholder="100"
                    type="number"
                />
                <br />
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
                <br />
                <p>Years of Lease Remaining</p>
                <input
                    name="leaseYearsLeft"
                    onChange={handleChange}
                    value={property.leaseYearsLeft}
                    className="form-control"
                    placeholder="3"
                    type="text"
                />
                <br />
                <p>Lease End Date</p>
                <input
                    name="leaseEndDate"
                    onChange={handleChange}
                    value={property.leaseEndDate}
                    className="form-control"
                    placeholder="01/24/2024"
                    type="text"
                />
                <br />
                <br />
                <h2>Parking Information</h2>
                <hr />
                <br />
                <p>Parking Spaces</p>
                <input
                    name="parkingSpaces"
                    onChange={handleChange}
                    value={property.parkingSpaces}
                    className="form-control"
                    placeholder="100"
                    type="Number of Parking Spaces"
                />
                <br />
                <p>Parking Ratio</p>

                <input
                    name="parkingRatio"
                    onChange={handleChange}
                    value={property.parkingRatio}
                    className="form-control"
                    placeholder="1:5"
                    type="string"
                />
                <br />
                <p>Parking Revenue</p>
                <input
                    name="parkingRevenue"
                    onChange={handleChange}
                    value={property.parkingRevenue}
                    className="form-control"
                    placeholder="Parking Revenue"
                    type="string"
                />
                <br />
                <br />
                <h2>Ownership Information</h2>
                <hr />
                <br />
                <p>Holding Company/LCC</p>
                <input
                    name="holder"
                    onChange={handleChange}
                    value={property.holder}
                    className="form-control"
                    placeholder="The Business Factory"
                    type="text"
                />
                <br />
                <p>Managing Parnter</p>
                <input
                    name="mPartner"
                    onChange={handleChange}
                    value={property.mPartner}
                    className="form-control"
                    placeholder="Vincent Adultman"
                    type="string"
                />
                <br />
                <p>Phone Number</p>
                <input
                    name="hPhone"
                    onChange={handleChange}
                    value={property.hPhone}
                    className="form-control"
                    placeholder="555 555 5555"
                    type="string"
                />
                <br />
                <p>Email</p>
                <input
                    name="hEmail"
                    onChange={handleChange}
                    value={property.hEmail}
                    className="form-control"
                    placeholder="fake@gmail.com"
                    type="string"
                />
                <br />
                <br />
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
