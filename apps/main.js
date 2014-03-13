require(['config/global'], function () {
    require(['poc/viewmodel'], function main(application) {
        new application().activate();
    });
});
