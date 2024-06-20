const express = require('express');
const customerController = require('./../controllers/CustomerController');

const router = express.Router();

router.post('/signup', customerController.signup);
router.post('/login', customerController.login);

router
    .route('/')
    .get(customerController.getAllCustomers)
    // .post(customerController.createCustomer);

router
    .route('/:id')
    .get(customerController.getCustomer)
    .patch(customerController.updateCustomer)
    .delete(customerController.deleteCustomer);

module.exports = router;