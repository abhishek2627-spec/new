const express = require('express');
const router = express.Router();
const menuitem = require('../modals/menuitems')

router.post('/', async (req, res) => {
    try {
    const menudata = req.body;  // asumming the request  body contains thr person data
  
    // if(!data.name){
    //   return res.status(400).json({success: false, message: "name is required"});
    // }
    const menuitemdata = new menuitem(menudata);
  
    const result = await menuitemdata.save();
     res.json({success: true, data: result});
    
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })

router.get('/getall', async (req, res) => {
    try {
      const result = await menuitem.find();
      console.log("datafetched", result);
      res.json({success: true, data: result});
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })

router.get('/:tastetype', async (req, res) => {
        

    try {
        const tastetype = req.params.tastetype;

      if(tastetype == 'sweet' || tastetype == 'sour' || tastetype == "salty" || tastetype == 'bitter'){
        const result = await menuitem.find({taste: tastetype});
        console.log("datafetched", result);
        res.json({success: true, data: result});
      }
      else{
        res.status(400).json({ success: false, message: "tastetype is invalid" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
)



  module.exports = router