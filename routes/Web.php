<?php

return [
    //Task-4
    '/auntification/logout' => 'auntification/logout',
    '/auntification/ifAutorized' => 'auntification/ifAutorized',
    '/auntification/check' => 'auntification/check',
    '/auntification/store' => 'auntification/store',
    '/registration' => 'auntification/registration',
    '/autorization' => 'auntification/autorization',

    //Task-3
    '/upload' => 'front/upload',
    '/saveUpload' => 'front/saveUpload',

    //Task-2
    '/two/massDestroy' => 'gorest/massDestroy',
    '/two/destroy/([0-9]+)' => 'gorest/destroy/$1',
    '/two/update/([0-9]+)' => 'gorest/update/$1',
    '/two/edit/([0-9]+)' => 'gorest/edit/$1',
    '/two/store' => 'gorest/store',
    '/two/create' => 'gorest/create',
    '/two' => 'gorest/index',

    //Task-1
    '/destroy/([0-9]+)' => 'front/destroy/$1', //Perfect way create API + AJAX
    '/massDestroy' => 'front/massDestroy',
    '/create' => 'front/create',
    '/store' => 'front/store',
    '/edit/([0-9]+)' => 'front/edit/$1',
    '/update/([0-9]+)' => 'front/update/$1',
    '/' => 'front/index',
];
