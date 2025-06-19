const express = require('express');
const router = express.Router();
const person = require('../modals/persons')

router.post('/', async (req, res) => {
  try {
  const data = req.body;  // asumming the request  body contains thr person data

  // if(!data.name){
  //   return res.status(400).json({success: false, message: "name is required"});
  // }
  const persondata = new person(data);

  const result = await persondata.save();
   res.json({success: true, data: result});
  
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  })
  
  router.get('/', async (req, res) => {
    try {
      const result = await person.find();
      console.log("datafetched", result);
      res.json({success: true, data: result});
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
  router.get("/:worktype", async (req, res) => {
    try {

      const worktype = req.params.worktype;
      if(worktype == "student" || worktype == "teacher" || worktype == "engineer"){
        
      const result = await person.find({work: worktype});
      console.log("datafetched", result);
      res.status(200).json({success: true, data: result});
      
      }
      else{
        res.status(400).json({ success: false, message: "worktype is invalid" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
router.put('/:id', async (req, res)=>{
    try{
        const Personid = req.params.id;
        const updateddata = req.body;
        const result = await person.findByIdAndUpdate(Personid, updateddata);
        res.status(200).json({success: true, data: result});

    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const Personid = req.params.id;
        const result = await person.findByIdAndDelete(Personid);
        if(!result){
            return res.status(400).json({success: false, message: "person deleted successfully"});
        }
        res.status(200).json({success: true, data: result});
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})



module.exports = router