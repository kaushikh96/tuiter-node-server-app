import * as tuitsDao from './tuits-dao.js'
import posts from "./tuits.js";
let tuits = posts;

const createTuit = async(req, res) => {
    const newTuit = req.body;
    //newTuit._id = (new Date()).getTime()+'';
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
    newTuit.title = " Pioneering the future in space exploration, scientific discovery and aeronautics research.";
    //tuits.push(newTuit);
    const insertedTuit = await tuitsDao
                             .createTuit(newTuit);
    res.json(insertedTuit);  
}

const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params['tid'];
    const updates = req.body;
    // tuits = tuits.map((t) =>
    //   t._id === tuitdIdToUpdate ?
    //     {...t, ...updates} :
    //     t
    // );
    const status = await tuitsDao
            .updateTuit(tuitdIdToUpdate,
                updates);
    res.json(status);
}
  

const deleteTuit = async (req, res) => {

    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
            .deleteTuit(tuitdIdToDelete);
    //tuits = tuits.filter((t) =>
    //  t._id !== tuitdIdToDelete);
    res.json(status);  
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
   