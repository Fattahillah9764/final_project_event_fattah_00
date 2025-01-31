import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailEvent() {
const [dataById, setDataById] = useState({})
const router = useRouter()
const id = router.query.id

useEffect(() => {
    console.log(id, "==> APA SIH ?");
    getById()
    
}, [id])

const getById = async () => {
    try {
        const data = await fetch (`/api/event-id/${id}`)
        const result = await data.json()
        setDataById(result.data)

    } catch (error) {
        console.log(error, "==> ini 2");    
    }
}
return (
<>
<h3>This is detail event</h3>
<p>{JSON.stringify(dataById)}</p>
</>
)
}