const express = require('express');
const customerController = require('./../controllers/CustomerController');

const router = express.Router();

router.post('/signup', customerController.signup);
router.post('/login', customerController.login);
// router.get('/logout', customerController.logout);

router.post('/forgotPassword', customerController.forgotPassword);
router.patch('/resetPassword/:token', customerController.resetPassword);

router
    .route('/')
    .get(customerController.protect, customerController.getAllCustomers);
// .post(customerController.createCustomer);

router
    .route('/:id')
    .get(customerController.protect, customerController.getCustomer)
    .patch(customerController.protect, customerController.updateCustomer)
    .delete(customerController.protect, customerController.restrictTo('admin'), customerController.deleteCustomer);

module.exports = router;
