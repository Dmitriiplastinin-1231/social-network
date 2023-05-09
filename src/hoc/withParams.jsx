import { useParams } from "react-router-dom"

export const withParams = (Component) => {
    return (props) => {
        return <Component {...props} param={useParams()} />
    }
}