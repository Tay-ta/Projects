import './app.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];

function App() {

  
  
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header () {
  return(
    <header className='header'>
    <h1>FAST REACT PIZZA CO.</h1>
   </header>
  )
}
function Menu () {
  //当 pizzas 为有内容的数组，比如这里是6，此时numPizzas > 0 为true
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  //所以下面会渲染&&后面的内容--ul,如果设置为 pizzas =[]空数组， numPizzas < 0 为false，不会渲染ul.
  return (
    <main className='menu'>
      <h2>OUR MENU</h2>
      {numPizzas > 0 ? (
      <>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic all delicious.</p>
        <ul className='pizzas'>
          {pizzas.map((pizza)=> (
            <Pizza pizzaObj={pizza} key={pizza.name}/>
          ))} 
        </ul>
      </>
      ) : (
        <p>we&apos;re still working on our menu. Please come back later :) </p>
      )}
      
      {/*<Pizza 
        name='Spinaci' 
        ingredients ='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='spinaci.jpg'
        price ={10}/>
      
      <Pizza 
        name= "Focaccia"
        ingredients= "Bread with italian olive oil and rosemary"
        photoName= "focaccia.jpg"
        price ={6}/>
      */}
    </main>
  )
}
function Pizza({pizzaObj}) {
  //child componet 继承 parents componet 的属性
  //.pizzaObj 访问的是我们通过 pizzaObj={pizza} 传递的披萨数据
  //if (pizzaObj.soldOut) return null;
  return (
  //用三元法表达法返回想要的classname文字，如果soldout为真，返回className="sold-out",如果假返回空，则还是pizza
  //反向单引号用于连接字串➕变量
  <li className={ `pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
    <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
  </li>
  );
}
function Footer () {
  //设置一个弹窗
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour =22;
  const isOpen = hour >= openHour && hour<= closeHour;
  console.log(isOpen)
 
 

return (
  <footer className='footer'>
          { isOpen ? (
            < Order hour={hour} closeHour={closeHour} openHour={openHour}/>
          ):(
            <p>
              We&apos;re happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>
          )}

  </footer>
  );
}
function Order({closeHour, openHour}) {
  return(
    <div className='order'>
              <p>
                We&apos;re open from {openHour}:00 to {closeHour}:00. Come visit us or order online. 
                </p>
              <button className='btn'>Order Now</button>
            </div>
  )
}


export default App
