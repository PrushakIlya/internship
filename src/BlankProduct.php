<?php

namespace Prushak\Task7;

use Prushak\Task7\Products\FridgeProduct;
use Prushak\Task7\Services\ConfigureService;
use Prushak\Task7\Products\LaptopProduct;
use Prushak\Task7\Products\TvsetProduct;
use Prushak\Task7\Services\InstallService;

class BlankProduct implements ProductInterface
{
    public function blanks()
    {
        $product_1 = new FridgeProduct((new ConfigureService(5, 4, 1))->getParams(), 'Samsung', '05.05.2022', 100);
        $product_2 = new LaptopProduct((new InstallService(5, 4, 10))->getParams(), 'Samsung', '05.05.2022', 1000);

        echo $product_1->show();
        echo $product_2->show();
        
        return [
                    $product_1->type['cost'],
                    $product_2->type['cost'],
               ];
    }
    
    public function calculateCost($arr)
    {
        $sum = 0;
        foreach ($arr as $item) {
            $sum+=$item;
        }
        return '>>>>COST FOR ALL:'.$sum;
    }
}
