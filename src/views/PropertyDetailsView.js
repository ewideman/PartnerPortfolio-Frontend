import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Map from '../components/Map';

const PropertyDetailsView = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [property, setProperty] = useState();
    const { id } = useParams();
    console.log('param', useParams())
    
    useEffect(() => {
        const getProperty = async () => {
            const response = await axios.get(`${apiUrl}/properties/property/${id}`);
            console.log("res1", response)
            setProperty(response.data);
        }

        getProperty();
    }, []);

    if (!property) return null;

    return (
        <div className="container mt-5">
           <h2> </h2>
            {
                property && <>
                    <Map address={property.address} />                    
                    <h2>{property.name}</h2>
                        <h3>IRR %:{property.irr}</h3>
                        <h3>Address: {property.address}</h3>
                        <h3>Estimated Value: ${property.price}</h3>
                    <br></br>
                    <h2>Ownership Information</h2>
                        <h3>Holding Company: {property.hodler}</h3>
                        <h3>Managing Partner: {property.mPartner}</h3>
                        <h3>Phone: {property.hPhone}</h3>
                        <h3>Email: {property.hEmail}</h3>
                    {/* <img style={{height: 400}} src={property.image} alt="" /> */}
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