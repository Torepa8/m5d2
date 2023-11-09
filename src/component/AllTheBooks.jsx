import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import { useContext } from 'react'
import BookSelected from '../context/context'
import { useNavigate } from 'react-router-dom'
import styles from './allbooks/styles.module.scss'

function SingleBook({ libro }) {
    const { selected, setSelected } = useContext(BookSelected)
    const navigate = useNavigate()

    return (
        <Col className='col-12 col-lg-4 col-md-6'>
            <Card
                onClick={() => setSelected(libro.asin)}
                className={styles.hfix}
                style={{
                    outline: (selected === libro.asin) ? "3px solid black" : "3px solid transparent",
                }}>
                <Card.Img className='hfix' variant="top" src={libro.img} />
                <Card.Body>
                    <Card.Title className='text-truncate'>{libro.title}</Card.Title>
                </Card.Body>
                <Button
                    onClick={() => navigate(`/bookdetails/${libro.asin}`)}
                >
                    Book Details
                </Button>
            </Card>
        </Col >
    )
}

export default function AllTheBooks({ userSearch }) {

    return (
        <>
            <Container>
                <Row>
                    {fantasy.filter((bf) => bf.title.toLowerCase().includes(userSearch.toLowerCase()))
                        .map((b) => {
                            return (
                                <SingleBook libro={b} key={b.asin} />
                            )
                        }
                        )}
                </Row>
            </Container>
        </>
    )
}