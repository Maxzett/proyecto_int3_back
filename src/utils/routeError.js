const routeError = (req, res) => {
    res.status(404).json({
        message: `Error en la ruta ${req.url}, chequea que esté bien escrita. El método ${req.method} no fue implementado.`
    })
}

export default routeError