const express = require ('express');
const router = express.Router();

router.getAll = async function(req, res){
    try{
        await model.course_los.findAll().then((result) => {
            if(result.length > 0){
                res.status(200).json({
                    message: "Data CPMK Ditemukan",
                    data: result
                })
            }else{
                res.status(200).json({
                    message:"Data Tidak Ditemukan",
                    data: []
                })
            }
        })
    }catch(error){
        res.status(404).json({
            message: error,
        })
    }
}

module.exports = router;