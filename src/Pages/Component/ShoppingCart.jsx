import { useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';

export const ShoppingCart =  ({product}) => {
	const [productsInCart, setProducts] =
	useState(
		JSON.parse(
			localStorage.getItem(
				"shopping-cart"
			)
		) || []
	);
	const addProductToCart = (product) => {
		const updatedCart = [...productsInCart];
	  const updatedItemIndex = updatedCart.findIndex(
		(item) => item.id === product.id
	  );
	
	  if (updatedItemIndex < 0) {
		updatedCart.push({ ...product, count: 1 });
	  } else {
		const updatedItem = {
		  ...updatedCart[updatedItemIndex]
		};
		//updatedItem.count++;
		updatedCart[updatedItemIndex] = updatedItem;
	  }
		setProducts(
			updatedCart
		  );
		};
	
		useEffect(() => {
			localStorage.setItem( 
			  "shopping-cart",
			  JSON.stringify(productsInCart)
			);
		  },  [productsInCart]); // Or [] if effect doesn't need props or state
  return (
    <button
		className="btn"
		onClick={() =>
		addProductToCart(
			product
		)
		}>
		Add to cart
	</button>
  );
};
