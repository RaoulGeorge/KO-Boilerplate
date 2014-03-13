define(function (require) {
    var view = require('text!./view.html');
    var ko = require('knockout');

    function viewmodel() {
        console.log('viewmodel constructor');
        this.personName = ko.observable('Bob');
    }

    //var base = Object.inherit(KnockoutViewModel, SummaryHealthViewModel);

    viewmodel.prototype.activate = function () {
        console.log('viewmodel activate');
        $('body').append(view);
        ko.applyBindings(this);

        this.personName.subscribe(function(newValue) {
            alert("The person's new name is " + newValue);
        });
    };

    viewmodel.prototype.deactivate = function () {

    };

    return viewmodel;
});