export let payOrder = (req, res) => {
    try {
        let result = {
            status: 'confirmed',
            status_code: 0,
            description: 'payment confirmed'
        }
        res.send(result);        
    }
    catch (err) {
        console.log('error', err);
    }
}