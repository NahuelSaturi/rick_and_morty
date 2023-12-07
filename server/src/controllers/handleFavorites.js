let myFavorites = []

const postFav = (req, res) =>{
    myFavorites.push(req.body)
    return res.json(myFavorites)
}

const deleteFav = (req, res) =>{
    myFavorites = myFavorites.filter(character =>{
        return  character.id !== Number(req.params.id)
    })
    return res.json(myFavorites)
};
module.exports = { postFav, deleteFav }