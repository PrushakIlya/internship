<?php


return [
    //Task-6
    ['/combine/ifAutorized', ['combine', 'ifAutorized']],
    ['/combine/storeUploded', ['combine', 'storeUploded']],
    ['/combine/logout', ['combine', 'logout']],
    ['/combine/check', ['combine', 'check']],
    ['/combine/store', ['combine', 'store']],
    ['/combine/upload', ['combine', 'upload']],
    ['/combine/authorization', ['combine', 'authorization']],
    ['/combine/registration', ['combine', 'registration']],

    //Task-5
    ['/registration/store', ['registration', 'store']],
    ['/registration', ['registration', 'index']],

    //Task-4
    ['/autorization/logout', ['autorization', 'logout']],
    ['/autorization/ifAutorized', ['autorization', 'ifAutorized']],
    ['/autorization/check', ['autorization', 'check']],
    ['/autorization', ['autorization', 'autorization']],

    //Task-3
    ['/upload', ['front', 'upload']],
    ['/saveUpload', ['front', 'saveUpload']],

    //Task-2
    ['/two/massDestroy', ['gorest', 'massDestroy']],
    ['/two/destroy/{id}', ['gorest', 'destroy']],
    ['/two/update/{id}', ['gorest', 'update']],
    ['/two/edit/{id}', ['gorest', 'edit']],
    ['/two/store', ['gorest', 'store']],
    ['/two/create', ['gorest', 'create']],
    ['/two', ['gorest', 'index']],

    //Task-1
    ['/destroy/{id}', ['front', 'destroy']],
    ['/massDestroy', ['front', 'massDestroy']],
    ['/edit/{id}', ['front', 'edit']],
    ['/update/{id}', ['front', 'update']],
    ['/create', ['front', 'create']],
    ['/store', ['front', 'store']],
    ['/', ['front', 'index']],
];
