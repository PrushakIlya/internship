<?php

$sql = 'CREATE TABLE locked (id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
ip VARCHAR(11) NOT NULL,unlocked_date VARCHAR(20), locked_date TIMESTAMP)';

return $sql;
