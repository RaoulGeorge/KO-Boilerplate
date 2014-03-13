var require = {
    urlArgs: 'v=' + new Date().getTime(),
    paths: {
        'knockout': 'lib/knockout-3.1.0',
        'Application': 'framework/application-instance',
        'text': 'lib/text'
    },
    shim: {

        'knockout': {
            exports: 'ko'
        },

    }
};