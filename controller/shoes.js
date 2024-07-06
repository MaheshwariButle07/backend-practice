const shoes = [
    {
      id: "5",
      brand: "PUMA",
      price: "1,363",
      color: "Grey",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/6/i/-original-imahfqz3grzgagzp.jpeg?q=70",
      gender: "Men",
      description: "Fire run IDP Walking Shoes For Men ",
    },
    {
      id: "4",
      brand: "PUMA",
      price: "1,363",
      color: "Grey",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/6/i/-original-imahfqz3grzgagzp.jpeg?q=70",
      gender: "Men",
      description: "Fire run IDP Walking Shoes For Men ",
    },
    {
      id: "9",
      brand: "PUMA",
      price: "1,363",
      color: "Grey",
      image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/6/i/-original-imahfqz3grzgagzp.jpeg?q=70",
      gender: "Men",
      description: "Fire run IDP Walking Shoes For Men ",
    },
  ];


const postShoes = (req, res) => {
    const { brand, price, color, image, gender, description } = req.body;
  
    if (!brand) {
      return res.json({
        success: false,
        data: null,
        message: "brand cannont be empty",
      });
    }
  
    if (!price) {
      return res.json({
        success: false,
        data: null,
        message: "price cannont be empty",
      });
    }
  
    if (!color) {
      return res.json({
        success: false,
        data: null,
        message: "color cannont be empty",
      });
    }
  
    if (!image) {
      return res.json({
        success: false,
        data: null,
        message: "image cannont be empty",
      });
    }
  
    if (!gender) {
      return res.json({
        success: false,
        data: null,
        message: "gender cannont be empty",
      });
    }
  
    if (!description) {
      return res.json({
        success: false,
        data: null,
        message: "description cannont be empty",
      });
    }
  
    const randomNumber = Math.round(Math.random() * 100);
  
    const newShoes = {
      id: randomNumber,
      brand: brand,
      price: price,
      color: color,
      image: image,
      gender: gender,
      description: description,
    };
  
    shoes.push(newShoes);
  
    res.json({
      success: true,
      data: newShoes,
      message: "Shoes added successfully",
    });
  }


const getShoes = (req, res) => {
    res.json({
      success: true,
      data: shoes,
      message: "shoes added succesfully",
    });
  }


const getShoesId = (req, res) => {
    const { id } = req.params;
  
    const shoe = shoes.find((p) => p.id == id);
  
    res.json({
      success: shoe ? true : false,
      data: shoe || null,
      message: shoe ? "shoes Id found succesfully" : "shoes Id does not found",
    });
  }
  
  
const putShoesId = (req, res) => {
    const { brand, price, color, image, gender, description } = req.body;
  
    const { id } = req.params;
  
    let index = -1;
  
    shoes.forEach((shoes, i) => {
      if (shoes.id == id) index = i;
    });
  
    const newobj = {
      id,
      brand,
      price,
      color,
      image,
      gender,
      description,
    };
  
    if ((index = -1)) {
      return;
      res.json({
        success: false,
        data: null,
        message: `${id} id not found in shoe`,
      });
    } else {
      shoes[index] = newobj;
  
      return;
      res.json({
        success: true,
        data: newobj,
        message: `${id} id found in shoe`,
      });
    }
  }


const deleteShoesId = (req, res) => {
    const { id } = req.params;
  
    let index = -1;
  
    shoes.forEach((shoes, i) => {
      if (shoes.id == id) {
        index = i;
      }
    });
  
    if (index == -1) {
      res.json({
        success: false,
        data: null,
        message: `${id} id not found in shoes`,
      });
    } else {
      shoes.splice(index, 1);
  
      res.json({
        success: true,
        data: null,
        message: `${id} id deleted successfully`,
      });
    }
  }  


  export { postShoes, getShoes, getShoesId, putShoesId, deleteShoesId}