const Resource = require ("../models/resource");

// POST/api/resources
exports.createResource = async (req, res)=> {
    const resource = await Resource.create({...req.body, owner:req.user.id });
    res.json(resouce);
};

// GET/api/resources/all
exports.getAllResources = async (req, res) => {
    const resources = await Resource.find().populate("owner", "userName");
    res.json(resources)
};

