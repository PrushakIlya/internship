<?php

namespace Prushak\Internship\Console;

use Prushak\Internship\Console\FridgeProduct;
use Prushak\Internship\Console\LaptopProduct;
use Prushak\Internship\Console\PhoneProduct;
use Prushak\Internship\Console\TvsetProduct;
use Prushak\Internship\Console\Inter;
include 'Inter.php';
include 'Products/FridgeProduct.php';

class BlankProduct implements Inter
{
    private array $arr;
    public function blanks()
    {
        $blanck_1 = new FridgeProduct('install', 'Fridge Samsung g-5', 'Samsung', '05.05.2022', 100);
        $blanck_1->configure($blanck_1->getType());
        
        $this->arr = [$blanck_1];
    }
    
    public function calculateCost($arr)
    {
        $sum = 0;
        foreach ($arr as $item) {
            $sum+=$item;
        }
        return $sum;
    }
}
