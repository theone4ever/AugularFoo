demoApp.factory("AjaxFactory", function ($http) {
    var factory = {};
    factory.getCustomers = function (callback) {
        $http.jsonp('http://localhost:11337/customer?callback=JSON_CALLBACK').
            success(function (data, status, headers, config) {
                callback(data);
            }).
            error(function (data, status, headers, config) {
                alert("error!:");
                alert(headers);
            })

    }

    factory.putCustomer = function (customer, callback) {
        $http.jsonp(
            'http://localhost:11337/customer/create?callback=JSON_CALLBACK',
            {
                params: {
                    name: customer.name,
                    city: customer.city,
                    address: customer.address
                }
            }
        )
            .success(function (data, status, headers, config) {
                factory.getCustomers(callback);
            }).error(function (data, status, headers, config) {
            });
    }
    return factory;
});