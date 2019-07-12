// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(tab => {
        console.log('checking if it works:', tab.data.topics);
        const topicList = tab.data.topics;
        topicList.forEach( ele => tabCompo.appendChild(Tabs(ele)));
    })
    .catch(error => {
        console.log('API is currently down, try again later', error);
    })

const tabCompo = document.querySelector('.topics');

function Tabs(str) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = str;

    return tab;
}