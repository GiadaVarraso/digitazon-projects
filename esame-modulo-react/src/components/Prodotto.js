export default function Prodotto({ product }) {

    return (
        <div className="searchedProducts">
            <ul className="flex">
                {product.map((p) =>
                    <li
                        className="card flex ">
                        <img src={p.images[0]} width='20%'></img>
                        <div>
                            <div><b>Product : </b>{p.title}</div>
                            <div><b>Brand : </b>{p.brand}</div>
                            <div><b>Category : </b>{p.category}</div>
                            <div><b>description : </b>{p.description}</div>
                            <div><b>Price : </b>{p.price} $</div>
                            <div><b>Stock : </b>{p.stock}</div>
                            <div><b>Rating : </b>{p.rating}</div>
                        </div>
                    </li>)}
            </ul>
        </div>

    )
}