import { useEffect, useState } from "react"
import BookSelected from "../context/context"
import { useContext } from "react"

const APIallcomments = 'https://striveschool-api.herokuapp.com/api/comments/'


export default function CommentArea() {
    const { selected } = useContext(BookSelected)
    const [comments, setComments] = useState([])

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

    // console.table(comments)
    return (
        comments.map((comment) => (
            <h5>{comment.comment}</h5>
        )
        ))
}