import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PropertyDetailsView = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [property, setProperty] = useState({});
    const { id } = useParams();
    console.log('param', useParams())
    
    useEffect(() => {
        getProperty();
    }, []);

    const getProperty = async () => {
        const response = await axios.get(`${apiUrl}/properties/property/${id}`);
        console.log("res1", response)
        setProperty(response.data);
    }

    return (
        <div className="container mt-5">
           <h2> What Up Bitches?</h2>
            {
                property && <>
                    <h2>name: {property.name}</h2>
                    <h3>address: {property.address}</h3>
                    <h3>price: {property.price}</h3>
                    <img style={{height: 400}} src={property.image} alt="" />
                    </>
            }
           {/* <p>
                {property.address?.map((g, i) => (
                    <>
                        <span key={i}>{g}</span>
                        <br />
                    </>
                ))}
            </p> */}
        </div>
    )
}

export default PropertyDetailsView;