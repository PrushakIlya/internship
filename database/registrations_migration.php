<?php

$sql = 'CREATE TABLE registrations (id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
firstname VARCHAR(20) NOT NULL,lastname VARCHAR(20) NOT NULL,email VARCHAR(40) NOT NULL UNIQUE, 
password VARCHAR(60) NOT NULL,
created_date TIMESTAMP)';

return $sql;
