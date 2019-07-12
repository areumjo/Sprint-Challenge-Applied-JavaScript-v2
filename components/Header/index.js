// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerCompo = document.querySelector('.header-container');
console.log(headerCompo);

function Header() {
    const headerDiv = document.createElement('div');

    const spanDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const spanTemp = document.createElement('span');

    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(spanTemp);

    headerDiv.classList.add('header');
    spanDate.classList.add('date');
    spanDate.textContent = "SMARCH 28, 2019";
    headerTitle.textContent = "Lambda Times"
    spanTemp.classList.add('temp');
    spanTemp.textContent= "98°";
    
    return headerDiv;
}
const addHeader = Header();
headerCompo.appendChild(addHeader);
