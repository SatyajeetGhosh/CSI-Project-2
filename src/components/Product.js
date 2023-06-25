import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [])
    

    const Loading = () => {
        return(
            <>
                <div className="spinner-border m-auto" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return(
            <div className='d-flex justify-content-center align-items-center mt-4 p-5'>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating: {product.rating && product.rating.rate}
                        <i className="fa fa-star ms-1"></i>
                    </p>
                    <h3 className='display-6 fw-bold my-2'>
                        ₹ {product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <button className="btn btn-primary me-2" onClick={()=>addProduct(product)}>
                        Add to Cart
                    </button>
                    <NavLink className="btn btn-outline-success" to="/cart">
                        Go to Cart
                    </NavLink>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="container">
                <div className="row">{loading ? <Loading/> : <ShowProduct/>}</div>
            </div>
        </div>
    )
}

export default Product