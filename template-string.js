function getCardHTML(name, description, price) {
  const div = `
    <di class="card">
    <h2>${name.toUpperCase()}<h2/>
    <p>Price:$ ${price}<p/>
    <p>${description}<p/>
    <div/>
    
    `;
  console.log(div);
}

getCardHTML("iphone 12", "This is the latest iphone model", 999);
