<?php

namespace Prushak\Internship\HTTP\Controller;

use Prushak\Internship\HTTP\Models\UsersModel;

class GorestController extends BaseController
{
  private $users_model;
  private $remote_api;

  public function __construct()
  {
    $this->users_model = new UsersModel;
    $this->remote_api = include '../config/gorest_api.php';
  }

  public function check_email()
  {
    $data = json_decode(file_get_contents('php://input'), true);
    $json_data = file_get_contents($this->remote_api['get']);
    $response_data = json_decode($json_data);
    foreach ($response_data as $item) {
      if ($item->email === $data) {
        return json_encode(true);
      }
    }
    return json_encode(false);
  }

  public function index()
  {
    $json_data = file_get_contents($this->remote_api['get'] . $this->remote_api['token']);
    $response_data = json_decode($json_data);
    $results = [];
    foreach ($response_data as $item) {
      array_push($results, (array)$item);
    }
    include '../resources/views/layout.php';
  }

  public function edit($id)
  {
    $json_data = file_get_contents($this->remote_api['get'] . $this->remote_api['token']);
    $response_data = json_decode($json_data);
    $results = [];
    foreach ($response_data as $item) {
      if ($item->id === (int)$id) {
        array_push($results, (array)$item);
        break;
      }
    }
    include '../resources/views/layout.php';
  }

  public function create()
  {
    include '../resources/views/layout.php';
  }

  public function store()
  {
    header('Location: /api');
    $curl = curl_init($this->remote_api['post'] . $this->remote_api['token']);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $_POST);

    curl_exec($curl);
    curl_close($curl);
  }

  public function update($id)
  {
    header('Location: /api');

    $curl = curl_init($this->remote_api['update'] . $id . $this->remote_api['token']);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($curl, CURLOPT_POSTFIELDS, $_POST);

    curl_exec($curl);
    curl_close($curl);

    // $response = curl_exec($curl);
    // if (!$response) {
    //   return false;
    // }
  }

  public function destroy($id)
  {
    header('Location: /api');

    $curl = curl_init($this->remote_api['destroy'] . $id . $this->remote_api['token']);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE");

    curl_exec($curl);
    curl_close($curl);
  }

  public function mass_destroy()
  {
    header('Location: /api');
    if (preg_match('~^([0-9]+)-([0-9]+)~', $_POST['ids'], $matches)) {
      $arr = explode('-', $_POST['ids']);
      $first_elem = array_shift($arr);
      $range = array_pop($arr) - $first_elem + 1;
      for ($i = 0; $i < $range; $i++) {
        var_dump($this->remote_api['destroy'] . $first_elem . $this->remote_api['token']);
        $curl = curl_init($this->remote_api['destroy'] . $first_elem . $this->remote_api['token']);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE");
        curl_exec($curl);
        curl_close($curl);
        $first_elem++;
      }
    }
  }
}
