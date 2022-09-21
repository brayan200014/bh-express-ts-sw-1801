import express from 'express';
const router  = express.Router();

router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 });

 router.get('/hello', (req, res) => {
  const {name = 'NOT NAME FOUND'}= req.query;
  res.json({name});
 });

 router.get('/view/:id', (req, res)=> {
  const { id = -1}= req.params  as unknown as {id?:number};
  res.json({ id });
 });

 router.post('/new', (req, res) => {
  const { name ='NO NAME', email= "", age= 0}= req.body as {name?: String, email?: String, age?: number };
   res.json({name, email, age});

 });

 router.put('/update/:id', (req, res)=> {
  const { id = -1}= req.params  as unknown as {id?:number};
  const { name ='NO NAME', email= "", age= 0}= req.body as {name?: String, email?: String, age?: number };
  res.json({id, name, email, age});

 });

 router.delete('/delete/:id', (req, res)=> {
  const { id = -1}= req.params  as unknown as {id?:number};
  res.json({ id });
 });

export default router;
