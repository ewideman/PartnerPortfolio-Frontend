import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropertyTypes,
	YearsBuilt,
	Ratings,
	SingleMultiOptions} from "../constant/options";


const AddPropertyView = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [property, setProperty] = useState({
			address: "8633 South Bay Dr.",
			bSize: "1",
			bldgCredit: "1",
			bldgRating: "3",
			hEmail: "1",
			hPhone: "1",
			holder: "1",
			imageUrl: "1",
			irr: "10",
			leaseEndDate: "1",
			leaseYearsLeft: "1",
			mPartner: "1",
			name: "1",
			price: "0",
			tenantOccupancy: "1",
			opportunity: false,
			propertyType: 'type1',
			yearBuilt: '2019',
			
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
            "bldggRating": "5",
            "opportunity": true,
            "bSize": 10
          });

        const response = await axios.post(`${apiUrl}/properties/property`, property);
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
            propertyType: "",
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
            holder:"",
            mPartner:"",
            hPhone: "",
            hEmail: "",
            //
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
                    Create
                </button>
            </form>
        </div>
    );
};

export default AddPropertyView;
