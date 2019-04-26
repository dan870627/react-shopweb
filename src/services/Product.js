const API = './api/drinks.json';

function get(){
    return fetch(API).then(function (api){
        return api.json();
    })
};

export default {get}