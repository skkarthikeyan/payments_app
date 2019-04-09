export let payOrder = (req, res) => {
    try {
        let params = req.body;
        console.log('params', params);
        DataAccessService.executeSPWithCallback('sp_create_order', params, true, (queryResponse) => {
            if (queryResponse.status === 0) {
                res.send(queryResponse.result);
            }
            else {
                res.status(500).send("Error: " + JSON.stringify(queryResponse));
            }
        });
    }
    catch (err) {
        console.log('error', err);
    }
}