/*
 * 酱茄小程序开源版 v1.5.0
 * Author: 酱茄
 * Help document: https://www.jiangqie.com/ky
 * github: https://github.com/longwenjunjie/jiangqie_kafei
 * gitee: https://gitee.com/longwenjunj/jiangqie_kafei
 * Copyright © 2020-2021 www.jiangqie.com All rights reserved.
 */

const Auth = require('./utils/auth.js');

App({

    appName: '酱茄Free',

    onLaunch: function () {
        Auth.checkSession();
    },
    
})