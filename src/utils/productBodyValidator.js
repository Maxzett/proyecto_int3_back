const productBodyValidator = (req, res, next) => {
    const { name, description, new_price, old_price, image, stock, category } = req.body;
      const validationArray = [];
      if(typeof name !== "string") validationArray.push('Name must be string.')
      if(typeof description !== "string") validationArray.push('Description must be string.')
      if(typeof category !== "string") validationArray.push('Category must be string.')
      if(typeof image !== "string") validationArray.push('Image must be URL.')
      if(typeof new_price !== "number") validationArray.push('New Price must be number')
      if(typeof old_price !== "number") validationArray.push('Old Price must be number')
      if(new_price,old_price < 0) validationArray.push('Price must be a positive number')
      if(typeof stock !== "number") validationArray.push('Stock must be number')
      if(validationArray.length > 0) {
          return res.status(400).json({message: 'Error in the body, inspect.', errors: validationArray})
      }
      next();
  };
  
  export default productBodyValidator ;