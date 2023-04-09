import './index.css';

const Car = (prop) => {
    const {title, description, author, img, price, getCar, id, number} = prop;
    
    console.log(number);
    const getSingleCar= ()=>{
      getCar(id);
    }
    return (
    <article className='book'>
      
      <img src = {img} alt ={title}/>
      <h2>{title}</h2>
      <h4>Description:</h4>
      <h4>{description}</h4>
      <h5>{author}</h5>
      <h5>${price}</h5>
      <span className = 'number'>{`# ${number + 1}`}</span>
      <button onClick = {getSingleCar} type = 'button' className="btn" >Order now</button>

  
      
    </article>
    );
   
  };
  
  export default Car;