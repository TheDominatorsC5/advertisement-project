import { Link } from 'react-router';
import { ShoppingCart, SquarePen, Trash2 } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router';
import { apiClient } from '../api/client';
import { useEffect, useState } from 'react';

export default function ViewAProduct() {

    const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [product, setProduct] = useState({});

  const getBook = () => {
    apiClient.get(`/product/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(getBook, []);

    return (
        <>
            <section className="">
                <div className="h-[20vh]"></div>
                <div className="md:flex justify-around">
                    <div className="border border-gray-500 md:w-[400px] h-100 md:h-[500px]">
                        <img 
                        src="" 
                        alt="" />
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-3xl font-semibold mb-4">{product.productname}</h1>

                        <p className="text-xl text-red-500 font-semibold mb-4">{product.price}</p>

                        <p>DESCRIPTION - {product.description}</p>

                        <div className="flex mt-4 gap-4">
                            <input
                                type="number"
                                defaultValue="1"
                                min="1"
                                className="w-20 px-2 py-1 border border-slate-500 rounded-md text-center"
                            />
                            <button className="bg-green-700 text-white hover:bg-[#29492f] transition duration-300 block px-8 py-2 border rounded-md font-semibold"><a href="">Buy Now</a></button>
                        </div>

                        <div>
                    <p>Company Name:</p>
                    <p>Location:</p>
                    <p>Tel:</p>
                </div>

                    </div>
                </div>
                
            </section>

        </>
    );
}