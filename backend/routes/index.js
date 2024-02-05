var express = require('express');
var router = express.Router();
const userModel=require("./users")
/* GET home page. */
router.get('/', async function(req, res) {


  // creating data
 const user= await userModel.create({
    userName:"user3",
    Password:"shivkumarsuthar",
  });
res.send(user);


});

//reading(Getting enteries)
// Update route
router.put("/update/:id", async function(req, res) {
  const id = req.params.id;
  const updatedData = req.body; // Get the updated data from the request body

  try {
      const updatedUser = await userModel.findByIdAndUpdate({_id:id}, updatedData, { new: true });

      if (updatedUser) {
          res.send(updatedUser);
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});





//deleting enteries

router.get("/destroy", async function(req,res){
const user=await userModel.findOneAndDelete({userName:'user1'});
res.send(user)
})




module.exports = router;
