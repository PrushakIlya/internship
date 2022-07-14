<?php

return [
  '/destroy/([0-9]+)' => 'front/destroy/$1', //Perfect way create API + AJAX
  '/mass_destroy' => 'front/mass_destroy',
  '/create' => 'front/create',
  '/store' => 'front/store',
  '/edit/([0-9]+)' => 'front/edit/$1',
  '/update/([0-9]+)' => 'front/update/$1',
  '/' => 'front/index',
];
