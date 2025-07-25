const Resource = require ("../models/resource");

// Create a new resource
exports.createResource = async (req, res) => {
    try {
        const { topic, description, url,  } = req.body;
        const userId = req.user._id; // Assuming user ID is stored in req.user

        const resource = await Resource.create({
            topic,
            description,
            url,
            subject,
            uploadedBy:userId,
            level,
        });

        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({ message: "Error creating resource", error });
    }
};

// Get all resources
exports.getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find().populate('userId', 'userName');
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: "Error fetching resources", error });
    }
};

// Get a resource by ID
exports.getResourceById = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id).populate('userId', 'userName');
        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: "Error fetching resource", error });
    }
};

// Update a resource
exports.updateResource = async (req, res) => {
    try {
        const { title, description, url, tags } = req.body;
        const resource = await Resource.findByIdAndUpdate(
            req.params.id,
            { title, description, url, subject, level },
            { new: true }
        );

        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }

        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: "Error updating resource", error });
    }
};

// Delete a resource

exports.deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.status(200).json({ message: "Resource deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting resource", error });
    }
}

