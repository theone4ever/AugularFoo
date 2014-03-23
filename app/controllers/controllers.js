demoApp.controller("SimplerController", function ($scope, AjaxFactory) {
    $scope.customers = AjaxFactory.getCustomers(
        function (result) {
            $scope.customers = result;
        }
    );

    $scope.addCustomer = function () {
        $scope.customers = AjaxFactory.putCustomer(
            {
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city,
                address: $scope.newCustomer.address
            }, function (result) {
                $scope.customers = result;
            }
        );
    };

    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

});

demoApp.controller("ChartController", function ($scope) {
    $scope.chart = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "#e67e22",
                pointColor: "rgba(151,187,205,0)",
                pointStrokeColor: "#e67e22",
                data: [4, 3, 5, 4, 6]
            },
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "#f1c40f",
                pointColor: "rgba(151,187,205,0)",
                pointStrokeColor: "#f1c40f",
                data: [8, 3, 2, 5, 4]
            }
        ]
    };

    $scope.myChartData = [
        {
            value: 30,
            color: "#F7464A"
        },
        {
            value: 50,
            color: "#E2EAE9"
        },
        {
            value: 100,
            color: "#D4CCC5"
        },
        {
            value: 40,
            color: "#949FB1"
        },
        {
            value: 120,
            color: "#4D5360"
        }
    ];

    $scope.myChartOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,

        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",

        //Number - The width of each segment stroke
        segmentStrokeWidth: 24,

        //The percentage of the chart that we cut out of the middle.
        percentageInnerCutout: 50,

        //Boolean - Whether we should animate the chart
        animation: true,

        //Number - Amount of animation steps
        animationSteps: 100,

        //String - Animation easing effect
        animationEasing: "easeOutBounce",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,

        //Function - Will fire on animation completion.
        onAnimationComplete: null
    };
});


demoApp.controller('MainCtrl', ['$scope',
    function ($scope) {
        $scope.greeting = "Try to render with data:";
        $scope.data = [
            {
                name: "Greg",
                score: 98
            },
            {
                name: "Ari",
                score: 96
            },
            {
                name: 'Q',
                score: 75
            },
            {
                name: "Loser",
                score: 48
            }
        ];
    }
]);

demoApp.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});