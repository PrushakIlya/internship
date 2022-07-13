<?php

class Web
{
    private array $routes;

    public function __construct()
    {
        $this->routes = include '../config/routes.php';
    }

    public function route()
    {
        foreach ($this->routes as $pattern => $replacement) {
            $match = preg_match("~^$pattern$~", $_SERVER['REQUEST_URI']);
            if ($match) {
                $route = preg_replace("~$pattern~", $replacement, $_SERVER['REQUEST_URI']);

                $route = explode('/', $route);

                $controller = ucfirst(array_shift($route)) . 'Controller';

                $method = array_shift($route);

                $id = array_shift($route);
                $method = explode('?', $method);
                $method = array_shift($method);

                $controller = new ('Prushak\Internship\HTTP\Controller\\' . $controller);
                echo $id ? $controller->$method($id) : $controller->$method();
                return 0;
            }
        }
        return header("HTTP/1.1 404 Not Found");
    }
}
