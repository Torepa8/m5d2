import { useEffect, useState } from "react"
import BookSelected from "../context/context"
import { useContext } from "react"

const APIallcomments = 'https://striveschool-api.herokuapp.com/api/comments/'


export default function CommentArea() {
    const { selected } = useContext(BookSelected)
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(APIallcomments + selected, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjlkMzc3Y2RhYTAwMTQ2ZGYzODIiLCJpYXQiOjE2OTgxNjcyNTIsImV4cCI6MTY5OTM3Njg1Mn0.F1WGzQ8_kui5LLDefDSgxqBx32KYZ1bXeRTRTc4mE-w"
            }
        }
        )
            .then((r) => r.json())
            .then(setComments)
            .catch(alert('errore caricamento'))
    }, [selected])

    console.table(comments)
    return (
        comments.map((comment) => (
            <h5>{comment.comment}</h5>
        )
        ))
}