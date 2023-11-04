import { useEffect } from "react"
import BookSelected from "../context/context"
import { useContext } from "react"

const APIallcomments = 'https://striveschool-api.herokuapp.com/api/comments/'
const allcomments = []


export default function CommentArea() {
    const { selected } = useContext(BookSelected)

    useEffect(() => {
        fetch(APIallcomments + selected, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZjlkMzc3Y2RhYTAwMTQ2ZGYzODIiLCJpYXQiOjE2OTgxNjcyNTIsImV4cCI6MTY5OTM3Njg1Mn0.F1WGzQ8_kui5LLDefDSgxqBx32KYZ1bXeRTRTc4mE-w"
            }
        }
        )
            .then(r => r.json())
            .then(Allcomment)
            .catch(alert('errore caricamento'))
    }, [selected])

    function Allcomment(comments) {
        console.log(comments)
    }

    return (
        <h5>{}</h5>
    )
}