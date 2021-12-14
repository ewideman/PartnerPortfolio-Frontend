import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PropertyCard = ({ obj, isAdmin }) => {
    const apiUrl = process.env.REACT_APP_API_URL;

    async function handlePostDelete(event) {
        event.preventDefault();
        const response = await axios.delete(`${apiUrl}/properties/property/${obj._id}`);
        window.location.reload();
    }

    async function handlePostUpdate(event) {
        event.preventDefault();
        const response = await axios.put(`${apiUrl}/properties/property/:id`)
    }

    return (
        <Card style={{ width: "18rem" }}>
            <img src={obj.imageUrl} />
            <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Text>
                    {obj.address}
                </Card.Text>
                <Card.Text>
                    Estimated Value: ${obj.price}
                </Card.Text>
                <Link className="btn btn-outline-primary" 
                //to={`${apiUrl}/property/properties`}
                to={`/property/${obj._id}`}
                >
                    View More
                </Link>
                {isAdmin =="true" &&   <button className="btn btn-outline-primary"
                    onClick={handlePostDelete}>
                    delete
                </button>}
                 {isAdmin =="true" && <Link className='btn btn-outline-primary' to={`/update/${obj._id}`}>
                    update
                </Link>}
              
            </Card.Body>
        </Card>

    );
};

export default PropertyCard;


