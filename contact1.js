import React from "react"
import ContactCard from"./contact"
function Show1(){
	return(
<div className="contacts">



<ContactCard
imgUrl="https://images-na.ssl-images-amazon.com/images/I/51ZTgYVCaZL.jpg"
name="Blade Runner"
plot="kjl"
/>

<ContactCard
imgUrl="https://images-na.ssl-images-amazon.com/images/I/515kE2dEFaL._SL500_AC_SS350_.jpg"
name="Interstellar"
plot="kjl"
/>

<ContactCard
imgUrl="https://images-na.ssl-images-amazon.com/images/I/51ShRC1YMrL.jpg"
name="Inception"
plot="kjl"
/>

<ContactCard
imgUrl="https://images-na.ssl-images-amazon.com/images/I/91zh7rLwI3L._SY606_.jpg"
name="Star Wars"
plot="kjl"
/>

<ContactCard
imgUrl="https://images-na.ssl-images-amazon.com/images/I/91cHWS%2BXaoL._SY606_.jpg"
name="Rogue One"
plot="kjl"
/>

</div>


		)
}
export default Show1;