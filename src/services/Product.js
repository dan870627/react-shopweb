// const API = 'https://dan870627.github.io/react-shopweb/api/drinks.json';
// const API = 'http://localhost:3000/api/drinks.json';
const API = './api/drinks.json'

function get() {
    // console.log(API);
    // return fetch(API).then(function (api){
    //     // console.log(api);
    //     return api.json();
    // })
    // 直接 arrow function
    return fetch(API).then(api => api.json());
};

export default { get }