import { useParams } from 'react-router'

function ProductCategoryType() {
    const { type } = useParams();
    return (
        <div>
            <h1>WELCOME TO {type} PAGE</h1>
        </div>
    )
}

export default ProductCategoryType