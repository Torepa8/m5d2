import { Card, Col, Form } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'

import { useState } from 'react'

// const AllGenres = {
//     fantasy,
//     history,
//     horror,
//     romance,
//     scifi
// }


function SingleBook({ libro }) {
    const [selected, setSelected] = useState(false)

    return (
        <Col className='col-6 col-md-4 col-lg-3'>
            <Card
                onClick={() => setSelected(!selected)}
                className="my-2"
                style={{
                    outline: selected ? "3px solid red" : "3px solid transparent",
                }}>
                <Card.Img className='hfix' variant="top" src={libro.img} />
                <Card.Body>
                    <Card.Title className='text-truncate'>{libro.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

function FormInput() {
    const [userSearch, setUserch] = useState("")
    return (
        <Form.Group>
            <Form.Label>Search</Form.Label>
            <Form.Control
                type="text"
                value={userSearch}        //per tenere in memoria il testo che scrive l'utente
                onChange={(event) => setUserch(event.target.value)}
            />
        </Form.Group>
    )
}

export default function AllTheBooks() {

    // const [userSearch, setUserch] = useState("")

    return (
        <>

            <FormInput />

            {fantasy.map((book) => (
                <SingleBook libro={book} key={book.asin} />
            ))}

        </>
    )
}