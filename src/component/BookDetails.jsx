import { Col, Container, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'

export default function BookDetails() {
    const asinparams = useParams()

    const findbook = fantasy.find((b) => b.asin === asinparams.asin)

    console.log(findbook)


    return (
        <>
            <Container>
                <Row>
                    <Col className='col-6'>
                        <h1>{findbook.title}</h1>
                        <img src={findbook.img} alt="" className='w-100'/>
                    </Col>
                    <Col className='col-6'>
                        <CommentArea />
                    </Col>
                </Row>

            </Container>
        </>
    )
}