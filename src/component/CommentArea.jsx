import { useEffect, useState } from "react"
import BookSelected from "../context/context"
import { useContext } from "react"
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap"
import fantasy from '../data/fantasy.json'
import styles from './commentArea/styles.module.scss'

const APIallcomments = 'https://striveschool-api.herokuapp.com/api/comments/'

// {
//     "_id": "653a8aaef6e3dd001495e521",
//     "comment": "Bellissimo, divorato in una notte!",
//     "rate": 5,
//     "elementId": "0345540700",
//     "author": "stefano.casasola@epicode.com",
//     "createdAt": "2023-10-26T15:50:06.755Z",
//     "updatedAt": "2023-10-26T15:50:06.755Z",
//     "__v": 0
// }


export default function CommentArea() {
    const { selected } = useContext(BookSelected)

    const [com, setCom] = useState({
        comment: "",
        rate: 1,
        elementId: selected
    })
    

    const insertRec = async () => {

        try {
            const r = await fetch(APIallcomments, {
                method: 'POST',
                body: JSON.stringify(
                    com
                ),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjlkMzc3Y2RhYTAwMTQ2ZGYzODIiLCJpYXQiOjE2OTkzODExMzQsImV4cCI6MTcwMDU5MDczNH0.H_zPPOH4m7uay3_NjftzDD1rYyJtD3zLEIjrRXRdY1g"
                },
            })
            if (r.ok) {
                console.log("OK,commento inserito")
            }

        } catch (error) {
            console.error(error)
        }

        // console.log(selected)

    }

    const [comments, setComments] = useState([])
    const findbook = fantasy.find((b) => b.asin === selected)

    const controlfindbook = true ? findbook : false

    useEffect(() => {
        if (selected) {
            fetch(APIallcomments + selected, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjlkMzc3Y2RhYTAwMTQ2ZGYzODIiLCJpYXQiOjE2OTkzODExMzQsImV4cCI6MTcwMDU5MDczNH0.H_zPPOH4m7uay3_NjftzDD1rYyJtD3zLEIjrRXRdY1g"
                },
            })
                .then((r) => r.json())
                .then(setComments)
                .catch(console.error('Errore Caricamento'))
        }
    }, [selected])

    // console.table(selected)
    return (
        <>
            <Container>
                <Row>
                    <Col>

                        {controlfindbook && <h1 className="small">{findbook.title}</h1>}
                        {comments.map((comment) => (
                            <>
                                <span>{comment.comment}</span>
                                <br />
                                <span>Rate: {comment.rate}</span>
                                <hr />
                            </>
                        )
                        )}
                        <Form>
                            <Form.Label>La tua recensione</Form.Label>
                            <FormControl type="text" placeholder="Scrivi qui"
                                onChange={(e) => setCom({comment:e.target.value})}
                            />
                            <Form.Select aria-label="Default select example"
                                onChange={(e) =>
                                    setCom({
                                        rate: e.target.value,
                                    })
                                }
                            >
                                <option>Rate</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                            </Form.Select>
                            <Button
                                class={styles.space}
                                onClick={insertRec}
                                variant="primary">
                                Inserisci commento
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}