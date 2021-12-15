import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


const PropertyTypes = ['type1', 'type2', 'type3', 'type4'];
const YearsBuilt  = ['2019', '2020', '2021'];
const Ratings = ['1', '2', '3', '4', '5'];

const AddPropertyView = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [property, setProperty] = useState({
        name: "",
        address: "",
        price: "",
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
            name: "",
            irr: "",
            address: "",
            price: "",
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
                    name="bldggRating"
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
