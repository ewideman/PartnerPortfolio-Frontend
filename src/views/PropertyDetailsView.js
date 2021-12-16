import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from '../components/Map';
import Carousel from '../components/PropCarousel';
import { Container, Row, Col, Table } from 'react-bootstrap';

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

                    <Carousel slides={property.carousel || []} />

                    

                    <Container className="mt-3">
                        <Row>
                            <Col sm={6}>
                                <h2>{property.name}</h2>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>IRR %:</td>
                                            <td>{property.irr}</td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td>{property.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Value:</td>
                                            <td>${property.price}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col sm={6}>
                                <h2>Ownership Information</h2>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Holding Company:</td>
                                            <td>{property.hodler}</td>
                                        </tr>
                                        <tr>
                                            <td>Managing Partner:</td>
                                            <td>{property.mPartner}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td>{property.hPhone}</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>{property.hEmail}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                    <div className="map-container">
                        <Map address={property.address} />
                    </div>
                </>
            }
         
        </div>
    )
}

export default PropertyDetailsView;