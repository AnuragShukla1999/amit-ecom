import addToCartModel from "../../models/cartProduct"


const addToCartController = async (req, res) => {
    try {
        const { productId } = req?.body
        const currentUser = req.userId 

        const isProductAvailable = await addToCartModel.findOne({ productId });

        console.log("isProductAvailabel", isProductAvailable);

        if (isProductAvailable) {
            return res.json({
                message : "Already exists in Add to cart",
                success : false,
                error : true
            })
        }


        const payload = {
            productId : productId,
            quantity : 1,
            userId : currentUser,
        }

        const newAddToCart = new addToCartModel(payload);
        const saveProduct = await newAddToCart.save();

        return res.json({
            data : saveProduct,
            message : "Product Added in Cart",
            success : true,
            error : false
        })
    } catch (error) {
        res.json({
            messgae : err?.message || error,
            error : true,
            success : false
        })
    }
};


export default addToCartController;