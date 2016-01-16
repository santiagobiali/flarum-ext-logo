<?php

/*
 * This file is part of Flarum.
 *
 * (c) Santiago Testa Biali <santiago.t.biali@gmail.com@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Santiagobiali\Flarum\Logo\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddLogoAttribute::class);
};