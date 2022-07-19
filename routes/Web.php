<?php

return [
    '/upload' => 'front/upload',
    '/saveUpload' => 'front/saveUpload',

    '/two/massDestroy' => 'gorest/massDestroy',
    '/two/destroy/([0-9]+)' => 'gorest/destroy/$1',
    '/two/update/([0-9]+)' => 'gorest/update/$1',
    '/two/edit/([0-9]+)' => 'gorest/edit/$1',
    '/two/store' => 'gorest/store',
    '/two/create' => 'gorest/create',
    '/two' => 'gorest/index',

    '/destroy/([0-9]+)' => 'front/destroy/$1', //Perfect way create API + AJAX
    '/massDestroy' => 'front/massDestroy',
    '/create' => 'front/create',
    '/store' => 'front/store',
    '/edit/([0-9]+)' => 'front/edit/$1',
    '/update/([0-9]+)' => 'front/update/$1',
    '/' => 'front/index',
];
