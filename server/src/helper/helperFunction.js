export const sendCreated = (res, message) => {
    return res.status(201).json({
        message: message
    });
}


export const sendServerError = (res, message) => {
    return res.status(500).json({
        message: message
    });
}

export const notAuthorized = (res, message) => {
    return res.status(401).json({ message: message });
}

