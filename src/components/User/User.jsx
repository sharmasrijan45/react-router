import { useParams } from "react-router-dom"

function User() {

    const {id} = useParams()
    return (
        <>
        <div className="bg-gray-600  text-4xl p-5 text-white text-center"  >
        USER : {id}
        </div>
        </>
    )
}

export default User
