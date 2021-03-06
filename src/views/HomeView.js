import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from '../components/PropertyCard';
import useAuth from "../useAuth";

const HomeView = () => {
  const [auth, setAuth] = useAuth();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [properties, setProperties] = useState([]);

  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    console.log('auth', auth)
    getProperties();
    const _isAdmin = localStorage.getItem('isAdmin');
    setAdmin(_isAdmin)
  }, []);

  async function getProperties() {
    const response = await axios.get(`${apiUrl}/properties`);
    setProperties(response.data);
  }

  return (
    <>
      <div className="container mt-5">

        <h2>Property List</h2>
        <div className="conatiner property-list-container">
          <div className="row">
            {properties.map((property) => (
              <div className="my-3 col-lg-4 col-sm-6">
                <PropertyCard key={property._id} obj={property} isAdmin={isAdmin} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="py-4 bg-dark text-white">
        <Container>
          <Row>
            <Col>
              Copyright
            </Col>
            <Col className="text-end">
              <a href="#">Link 1</a> <a href="#">Link 2</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>

  );
};


export default HomeView;