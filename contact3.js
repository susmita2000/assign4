import React from "react"
import ContactCard from"./contact"
function Show1(){
	return(
<div className="contacts">



<ContactCard
imgUrl="https://images-na.ssl-images-amazon.com/images/I/51G13d3EwBL.jpg"
name="Titanic"
plot="kjl"
/>

<ContactCard
imgUrl="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
name="Godfather"
plot="kjl"
/>

<ContactCard
imgUrl="https://images-na.ssl-images-amazon.com/images/I/71c05lTE03L._SY679_.jpg"
name="Pulp Fiction"
plot="kjl"
/>

<ContactCard
imgUrl="https://images-na.ssl-images-amazon.com/images/I/51LrVjSbPVL.jpg"
name="Crash"
plot="kjl"
/>

<ContactCard
imgUrl="https://images-na.ssl-images-amazon.com/images/I/51%2B%2BLOsomTL.jpg"
name="The Departed"
plot="kjl"
/>

</div>


		)
}
export default Show1;