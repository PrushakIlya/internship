<?php

class Kernal
{
    private array $web;
    private array $api;
    private string $namespace;
    private array $routes;
    private bool $match;

    public function __construct()
    {
        $this->web = include '../routes/web.php';
        $this->api = include '../routes/api.php';
        $this->namespace = 'Prushak\Internship\HTTP\Controller\\';
        $this->match = false;
    }

    public function run()
    {
        $uri = explode('/', $_SERVER['REQUEST_URI']);


        if (count($uri) < 4 && $uri[1] === 'api') {
            $this->routes = $this->api;
        } else {
            $this->routes = $this->web;
        }

        $id = array_pop($uri);
        $this->match = preg_match('~^([0-9]+)$~', $id);

        foreach ($this->routes as $route) {
            $this->match && $route[0] = str_replace('{id}', $id, $route[0]);
            if ($route[0] === $_SERVER['REQUEST_URI']) {
                $controller = ucfirst($route[1][0]) . 'Controller';
                $controllerName = $this->namespace . $controller;
                $method = $route[1][1];
                $controller = new $controllerName();
                echo $this->match ? $controller->$method($id) : $controller->$method();

                return 0;
            }
        }

        header('HTTP/1.1 404 Not Found');
        include '../resources/views/404.php';
        die();
    }

    // public function run()
    // {
    //     $route = [];
    //     $arr = explode('/', $_SERVER['REQUEST_URI']);
    //     if ($arr[1] === 'api') {
    //         $route = $this->api;
    //     } else {
    //         $route = $this->web;
    //     }

    //     foreach ($route as $pattern => $replacement) {
    //         $match = preg_match("~^$pattern$~", $_SERVER['REQUEST_URI']);

    //         if ($match) {
    //             $route = preg_replace("~$pattern~", $replacement, $_SERVER['REQUEST_URI']);

    //             $route = explode('/', $route);

    //             $controller = ucfirst(array_shift($route)) . 'Controller';

    //             $method = array_shift($route);

    //             $id = array_shift($route);
    //             $method = explode('?', $method);
    //             $method = array_shift($method);

    //             $controllerName = $this->namespace . $controller;
    //             $controller = new $controllerName();
    //             echo $id ? $controller->$method($id) : $controller->$method();

    //             return 0;
    //         }
    //     }

    //     header('HTTP/1.1 404 Not Found');
    //     include '../resources/views/404.php';
    //     die();
    // }
}
