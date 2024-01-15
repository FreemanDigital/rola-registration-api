const jwt = require('jsonwebtoken');

const auth = {
    authenticateUser: async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Authentication failed' });
        }
    },

    checkIfAdmin: async (req, res, next) => {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Admin resource. Access denied' });
        }
        next();
    }
};

module.exports = auth;