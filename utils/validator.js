const { Types } = require("mongoose");

exports.orderDetails = (data) => {
  let errors = {};

  if (!data.billingAddress) {
    errors.billingAddress = "Billing Address is a required field!";
  } else if (data.billingAddress.trim() === "") {
    errors.billingAddress = "Billing Address Must Not Be Empty!";
  }

  if (!data.products || data.products.length < 1) {
    errors.products = "Product must not be empty!";
  } else {
    for (var i = 0; i < data.products.length; i++) {
      if (!data.products[i].unit || data.products[i].unit < 1) {
        errors.products = `Invalid Unit in Product No. ${i}`;
        break;
      }
      if (
        !data.products[i].productId ||
        !Types.ObjectId.isValid(data.products[i].productId)
      ) {
        errors.products = `Invalid Product Id in Product No. ${i}`;
        break;
      }
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
