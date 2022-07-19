<?php

class Web
{
    private array $web;
    private array $api;
    private string $namespace;

    public function __construct()
    {
        $this->web = include '../routes/web.php';
        $this->api = include '../routes/api.php';
        $this->namespace = 'Prushak\Internship\HTTP\Controller\\';
    }

    public function route()
    {
        $route = [];
        $arr = explode('/', $_SERVER['REQUEST_URI']);
        if ($arr[1] === 'api') {
            $route = $this->api;
        } else {
            $route = $this->web;
        }

        foreach ($route as $pattern => $replacement) {
            $match = preg_match("~^$pattern$~", $_SERVER['REQUEST_URI']);

            if ($match) {
                $route = preg_replace("~$pattern~", $replacement, $_SERVER['REQUEST_URI']);

                $route = explode('/', $route);

                $controller = ucfirst(array_shift($route)) . 'Controller';

                $method = array_shift($route);

                $id = array_shift($route);
                $method = explode('?', $method);
                $method = array_shift($method);

                $controllerName = $this->namespace . $controller;
                $controller = new $controllerName();
                echo $id ? $controller->$method($id) : $controller->$method();

                return 0;
            }
        }

        return header('HTTP/1.1 404 Not Found');
    }
}
