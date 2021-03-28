import "./Categories.css";

function Categories() {


  
  return (
    <div className="category">
    <div>
    <img src = "/images/fashionicon.png" alt="NotAvailable" onClick={() => categoriesClick('Mobiles')}></img>
    </div>
  <div onClick={click}> 
  <img src = "/images/mobileIcon.png" alt="NotAvailable"></img>
  </div>
  <div>
  <img src = "/images/groceryicon.png" alt="NotAvailable"></img>
  </div>
</div>
  );
}
const categoriesClick = (category) => {
  console.log('dsjvjvnvx');
  console.log(`hi ${category}`);
  return (
    window.location = `/products/category/${category}`
 );

}
const click = () => {
  console.log("hi");
  return (
    <h1>sdf</h1>
  )};
export default Categories;