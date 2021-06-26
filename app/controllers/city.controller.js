const axios = require('axios').default;
const querystring = require('querystring');

async function getCity(req, res){
    const query = {
        nombre: req.query.nombre,
        max: 100
    };
    const axiosParams = querystring.stringify({...query});
    axios.get(`https://apis.datos.gob.ar/georef/api/provincias?${axiosParams}`)
    .then((response) =>{
        res.json(response.data);
    })
    .catch(err => {
        res.status(500).json(err);
    });
};

async function postCity(req, res){
    const reqBody = req.params.body;
    const axiosParams = querystring.stringify({reqBody});
    axios.post(`https://apis.datos.gob.ar/georef/api/provincias?${axiosParams}`)
    .then((response) =>{
        res.json(response.data);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

module.exports = {getCity, postCity};