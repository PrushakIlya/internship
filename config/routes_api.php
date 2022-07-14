<?php

return [
  '/api/checkEmail' => 'api/check_email', 

  '/api/massDestroy' => 'gorest/mass_destroy',
  '/api/destroy/([0-9]+)' => 'gorest/destroy/$1', 
  '/api/update/([0-9]+)' => 'gorest/update/$1',
  '/api/edit/([0-9]+)' => 'gorest/edit/$1',
  '/api/checkEmailGo' => 'gorest/check_email', 
  '/api/store' => 'gorest/store',
  '/api/create' => 'gorest/create',
  '/api' => 'gorest/index',
];
