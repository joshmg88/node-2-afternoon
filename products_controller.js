

const create = (req, res, next) => {
    const db = req.app.get('db');
    const { name, description, price, imageurl } = req.body;

    db.create_product([name, description, price, imageurl]).then(response => {
        res.status(200).send(response)
    }).catch(err => {
        res.status(500).send({ error: "this is an error message" })
        console.log(err)
    })
}

const update = (req, res, next) => {
    const db = req.app.get('db');
    db.update_product([req.params.id, req.query.desc]).then(response => {
        res.status(200)(response)
    }).catch(err => {
        res.status(500).send({ error: "this is an error message" })
        console.log(err)
    })
}

const deleter = (req, res, next) => {
    const db = req.app.get('db');
    db.delete_product(req.params.id).then(response => {
        res.status(200).send(response)
    }).catch(err => {
        res.status(500).send({ error: "this is an error message" })
        console.log(err)
    })
}

const getOne = (req, res, next) => {
    const db = req.app.get('db');
    db.read_product(req.params.id).then(product => {
        res.status(200).send(product)
    }).catch(err => {
        res.status(500).send({ error: "this is an error message" })
        console.log(err)
    })
}

const getAll = (req, res, next) => {
    const db = req.app.get('db');
    db.read_products().then(products => {
        res.status(200).send(products)
    }).catch(err => {
        res.status(500).send({ error: "this is an error message" })
        console.log(err)
    })
}

module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleter
}