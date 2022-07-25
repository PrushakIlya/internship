<?php

use Prushak\Internship\Console\BlankProduct;
include 'BlankProduct.php';

$blankProduct = new BlankProduct();

echo($blankProduct->calculateCost($blankProduct->blanks()));
