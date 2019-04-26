const API = 'https://dan870627.github.io/react-shopweb/api/drinks.json';

function get(){
    console.log(API);
    return fetch(API).then(function (api){
        console.log(api);
        return api.json();
    })
};

export default {get}