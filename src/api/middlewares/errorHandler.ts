export const errorHandler = (err, req, res, next) => {
    try {
        console.error(err.stack);
        res.status(400).json({ error: JSON.parse(err.message) ?? err.stack });
    } catch (error) {
        res.status(500).json({ error: JSON.parse(err.message) ?? err.stack });
    }
}