import Shoes from "../model/Shoes.js";


const postShoes = async (req, res) => {
    const { 
      brand, 
      price, 
      color, 
      image, 
      gender,
      review, 
      description } = req.body;
  
    
    const newShoes = new Shoes({
      brand:brand, 
      price:price, 
      color:color, 
      image:image, 
      gender:gender, 
      review:review,
      description:description
    })

    const savedShoes = await newShoes.save()
  
    res.json({
      success: true,
      data: savedShoes,
      message: "Shoes added successfully",
    });
  }


const getShoes =async (req, res) => { 
  
  const allShoes =await Shoes.find().sort({updatedAt: -1})

    res.json({
      success: true,
      data: allShoes,
      message: "shoes added succesfully",
    });
  }


const getShoesId = async (req, res) => {
    const { id } = req.params;
  
    const shoesWithId = await Shoes.findOne({_id:id});
  
    res.json({
      success: shoesWithId ? true : false,
      data: shoesWithId || null,
      message: shoesWithId ? "shoes Id found succesfully" : "shoes Id does not found",
    });
  }
  
  
const putShoesId = async (req, res) => {
    const { brand, price, color, image, gender,review, description } = req.body;
  
    const { id } = req.params;
  
   const updatedShoes =await Shoes.updateOne({_id:id},{$set:{
    brand:brand, 
    price:price, 
    color:color, 
    image:image, 
    gender:gender,
    review:review, 
    description:description
   }})

   
  
    
      return res.json({
        success: true,
        data: updatedShoes,
        message: `${id} id found in shoe`,
      });
    }
  


const deleteShoesId = async (req, res) => {
    const { id } = req.params;
  
    const deleteone = await  Shoes.deleteOne({_id:id})

    
      res.json({
        success: true,
        data: null,
        message: `${id} id deleted successfully`,
      });
    }
  


  export { postShoes, getShoes, getShoesId, putShoesId, deleteShoesId}