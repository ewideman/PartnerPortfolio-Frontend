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

                    <br/>
                    <hr/>

                    <Container className="mt-3">
                        <Row>
            
                            <Col sm={6}>
                                <h2>General Information</h2>
                                <Table>
                                    <tbody>
                                    <tr>
                                            <td>Name:</td>
                                            <td>{property.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td>{property.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Value:</td>
                                            <td>${property.price}</td>
                                        </tr>
                                        <tr>
                                            <td>IRR %:</td>
                                            <td>{property.irr}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col sm={6}>
                                <h2> Building Information </h2>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Property Type</td>
                                            <td>{property.propertyTypes}</td>
                                        </tr>
                                        <tr>
                                            <td>Year Built:</td>
                                            <td>{property.yearBuilt}</td>
                                        </tr>
                                        <tr>
                                            <td>Credit Rating:</td>
                                            <td>{property.bldgCredit}</td>
                                        </tr>
                                        <tr>
                                            <td>Size:</td>
                                            <td>{property.bSize}sqft</td>
                                        </tr>
                                        <tr>
                                            <td>Number of floors:</td>
                                            <td>{property.floorNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>Floor Plate:</td>
                                            <td>{property.floorPlate}sqft</td>
                                        </tr>
                                        <tr>
                                            <td>Opportunity Zone:</td>
                                            <td>{property.Opportunity ? '???' : '???'}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col sm={6}>
                                <h2>Tenant Information</h2>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Tenant Occupancy:</td>
                                            <td>{property.tenantOccupancy}%</td>
                                        </tr>
                                        <tr>
                                            <td>Single or Multi Tenant:</td>
                                            <td>{property.tenantSingleMulti}</td>
                                        </tr>
                                        <tr>
                                            <td>Years Left on Lease:</td>
                                            <td>{property.leaseYearsLeft}</td>
                                        </tr>
                                        <tr>
                                            <td>Lease End Date:</td>
                                            <td>{property.leaseEndDate}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col sm={6}>
                                <h2>Parking information</h2>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Parking Spaces:</td>
                                            <td>{property.parkingSpaces}</td>
                                        </tr>
                                        {/* <tr>
                                            <td>Single or Multi Tenant:</td>
                                            <td>{property.tenantSingleMulti}</td>
                                        </tr> */}
                                        <tr>
                                            <td>Parking Ratio:</td>
                                            <td>{property.parkingRatio}</td>
                                        </tr>
                                        <tr>
                                            <td>Parking Revenue:</td>
                                            <td>{property.parkingRevenue}</td>
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