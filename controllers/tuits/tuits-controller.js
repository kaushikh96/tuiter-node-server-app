import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.image = "../../image/nasa3.png";
    newTuit.topic = "NASA";
    newTuit.handle = "@nasa";
    newTuit.time = "1m";
    newTuit.dislikes = 0;
    newTuit.userName = "NASA";
    tuits.push(newTuit);
    res.json(newTuit);  
}

const findTuits  = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params['tid'];
    const updates = req.body;
    tuits = tuits.map((t) =>
      t._id === tuitdIdToUpdate ?
        {...t, ...updates} :
        t
    );
    res.sendStatus(200);
}
  

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
      t._id !== tuitdIdToDelete);
    res.sendStatus(200);  
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
   