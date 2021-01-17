import Vue from 'vue'

export default {
    state: {
        cases: [],
        // cases:[
        //     {
        //         id: 'graffiti',
        //         image: 'https://i.imgur.com/hUEQc9Q.png',
        //         price: '10 RUB',
        //         title: 'Граффити',
        //         //href: '/graffiti',
        //         content:[
        //             {
        //                 id: 'graffiti1',
        //                 title: '1G',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUUyXwJm6cfXXbSwo-ReFcY2iM9mKk5O-dE2vNRugkRl8EeaNQ8WVPb5vaPUYjlNlc7Wa3m0tvEwMkZsxWfBbmyCVHNekhUxqorB4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti2',
        //                 title: '200IQ',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUUyanOD7VYXmBTlhuSrENZ2uI9zai5uzAFmudQOApQg4ALqIHoW1MOJ3fbkdu0IQVu2u_0UdyEhk6f9BKZAarxm1OMuwmmSJDXZo5600/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti3',
        //                 title: 'Шар судьбы',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0qe6yGX3wYCPGLi3VUgluTOVdNDvf_WH05ezFS2nIROp_Fg0CL_cE-jYdOJraPBQ5htQD_zL2h0p6WBUnfspUfRq33n0DPaR4ySRKdpgGIJgXxgA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti4',
        //                 title: 'Аплодисменты',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUU3XneDvFOjLcUl86H7JeMjuKrDens7-TSzjNQu0lQloMKPQDpjZMaMGMOBU6gYUJrzf2h0p6WBUnfspUfRq33n0DPaR4y3ARdMhT1wckj6c/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti5',
        //                 title: 'БИП',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUU3bybSeKfCOKRQowG-VYNmrb_zSk5e6REGvIE-9-Fl8AfapR8zBMOs2NNhVo0ZlLpWL-lEtxEQQlZ8lSeR-30ylFNOkjkSctGyDvSA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti6',
        //                 title: 'БУМ',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUU3b4ZzqKdySJHw5pT7RYMW7YrWGj5LyWRTidQO8lQwBVeasC-jFAOcyLOhI_gplLpWL-lEtxEQQlZ8lSeR-30ykSNOV2myWYzsCUmA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti7',
        //                 title: 'Удар в спину',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0qeODGEv1fSPQKjPfEEcmHLBXN2-PqjSl7ezCQ2zARe0pF1wNeasB8DZNa5-ObkBr14cM-DbgkQptEBFuccpKfx2233gHOK0p0XwRdMhTyiW6aXtxCQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti8',
        //                 title: 'Побрякушка',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0r-eOF3j2azL7Ky7VEF96U7oKNT6M-TL2s-WXQzDNErl_S1pQf6IGpGNKaMqIOkA90YUP-mPhkRIzDhgvNMZJfACpx2EfJbQ1xDhPJ5NVmCD4g1fqJbY/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti9',
        //                 title: 'Куд-кудах',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUU3f_fTnPNiLRFV1jGO1AN23Y9mKh5L6SF26dQr0lFQACdfQN-zIcbsuJbRc43IBZ8ja8xhJ_Tlg4fMIAcwC3xWYeJLExwTEePJYBmHfxdZWwts9cSg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti10',
        //                 title: 'Разбитое сердце',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUU3blZzzBISncHUx8U7teNTvRrGaktL-cFD7KSe0lEVgMefdX9WxPO5zbOxdu144DqTa8lBMzDhgvNMZJfACpx2EfJbQ1xDhPJM5amiekkSJtgdA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti11',
        //                 title: 'Поцелуй шефа',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUU3f_bTH7JCjKDxA-RLVfZmmI9janse2QEDDJQrkqQgwBKadQ82QbP5uAbRZs1YUI_GPr2VRzGVArfclJYgKuxmAaIbE8lXVDcspWyKBjLHOT/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti12',
        //                 title: 'Нет слов',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUU3f_ZzzBYXSMTwk6RedbMG_erzKm5uSVRTmYFeAlRgECKKIF8mwdbMvcPRtsh4UVu2u_0UdyEhk6f9BKZAarxm1ONekmkXQQFnaTg7M/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti13',
        //                 title: 'Задира',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0s-2CD2DyenmdenGAH1s_HrcPMG7YrGej7ejAQjCYRul4Qg0AfPQD8jdIOciKbkFoysdVrCO7mEhyDBs9ftFPYAOilyxEZelxnGnCvEB9/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti14',
        //                 title: 'Наступила смерть',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUU3DyaTP7IS7OUgg6TuIPYTyPrDqnse2VFD_JRe8kRQkBLKIA8mYaP8-NahBvgoderTP2h0p6WBUnfspUfRq33n0DPaR4n3lLIZ5ReZTZ_dA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti15',
        //                 title: 'Минус два',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0pe2YHnjyVzzNIy2XHQYwH-ddMDrQ-TKn4rydSm7PSLx9FwwCKaRV9GUfPszbPRRogdIJ8yuomUM7HRkkfddLZQOvw2QfKOAkzXlBds9lAWjwgA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti16',
        //                 title: 'Пистолетка',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0pOGCI2T-eyPLI2-LSF1qTOVYPD3c_GWhtOuVQGvOFOt-Eg9VKPAD-zdIPMndOhNoh9IL5XW2kAJ-ERonYMhTfBuy2ngKbOUjnyVHITiiEx5Y/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'graffiti17',
        //                 title: 'Легкая игра',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0puWyTCW5aWOSKXaATwlpTeBcN2iI9zWl4-TCETrBEuAvRFtSKKYGo2dMa8uAbQx9itAdqGq0mFZwCxo8e9VKaVLvkiwVae3oZoz1zg/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'graffiti18',
        //                 title: 'Сдачи не надо',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0pe2BEHXlJjadf3HcTQswSrJbPD6IrTak5O6dQDjPRbklQVpSf_BR9zAfPsiNPRIjlNlc7Wa3m0tvEwMkZsxWfBbmyyIQZbxw7hyF-Lk/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'graffiti19',
        //                 title: 'Скрещённые ножи',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0quyECnHkVzTWIDLKGVomH-FeNmGNqzCi5-THFDyaQO5-EVhVfvAApDcaaZ2BbEc41NEO8zO-xAptEBFuccpKfx2233gHOK0p0XxEIJ8EkHKwNDoUWw/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'graffiti20',
        //                 title: 'Эйс',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRLTUDGQtu-x93SSk47JAdSier0ZV82hKvOJG9G7oSww9KPz_Slar6HxGkE7sRwjO-W9N2i3QLmqEE5Y27tZNjCMMZ5zFc/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'graffiti21',
        //                 title: 'Страж',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRLTUDGQtu-x93SSk47JhAZteLwL1Nii6qaImQWvdjjl4bdxaKnMu2BkGhSupYk2LqRrdyt3QDgr10sPT5ScMHcTw/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'graffiti22',
        //                 title: 'Крылья',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRLTUDGQtu-x93SSk47Mg1ZsanrKgYy1fHKJ28WvN7ikYLcxaKnYbmBwDxQupxw3LCVpt-n2A3kqhduanezetF0t4wdmw/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'graffiti23',
        //                 title: 'Цербер',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRLTUDGQtu-x93SSk47JgFFtL-3PhQug_bKKG5H6o_mlYaIwqL1Yr6JxG0I7Zd32e2X8NWjig21rRY6Nj3wcZjVLFFb4V7AbQ/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'graffiti24',
        //                 title: 'EZ',
        //                 description: 'Запечатанный граффити',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRLTUDGQtu-x93SSk47IB5o5ujrelEzhKDLKGUVvITikNaNwfSnMLiAxDoGu8Z32b3Do9723gPm-UtoZXezetFf1mJpWA/130fx97f/image.png'
        //             },
        //         ]
        //     },
        //     {
        //         id: 'stikers',
        //         image: 'https://images.steamcdn.io/easydrop/cases/Stickers.png',
        //         price: '50 RUB',
        //         title: 'Наклейки',
        //         //href: '/stikers_case'
        //         content:[
        //             {
        //                 id: 'stikers1',
        //                 title: 'Козырные тузы',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWE3eQ-W_04DSUFhnGgxesbLrcgVlhKCadW5H6o-wzdeJlK-ma-iDkm1Uv5Yh07vH8I-t3Qey80I-Y3ezetFbPCZS4g/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'stikers2',
        //                 title: 'Скрытный убийца',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRVTUDfCOW-xM7AQFR6awVV57v9LQJh0aHOcGkRvt_nxoXcwvLyNe6ElTIAuJwh3r3Crdms2QP6ux07Frp6c3E/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'stikers3',
        //                 title: 'Страна AWP',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdUuqkw9aDARJ1MhRotbWwJRNyyr3JdWQStYjhltDala6lNeuAxztQvMNzj-2Uot3wiQO1_hVuNmigJtLEbEZgNrvpJ7H5/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'stikers4',
        //                 title: 'Удар в спину',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdUuqkw9aDAhJ2JAdcpa6kKUk20fHMI25Hut7lltaKzqamZ73QlDIG6pEp3eiXoonxiwe2rkdsMGv1OsbLJWIuZ6U8/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers5',
        //                 title: 'Банан',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWEXTTOG_xJ2cUVx6JApW-Lv9e1A51aLMImwQ6o2ww9KPwKetau2IzjxS6cQp3-vCo9_x0Q2yrURyIzekrT3i0Zo/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers6',
        //                 title: 'Укуси меня',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRbSV7RS9u9xcrXUkl7NxcYtLOxLjht1szPfTJR_8X4ktaIz6_xZenQxGoDvsEi0u-RrNTzjQLg8hJva2CldtTEdFQ3YAnW-U_-n7mXR1hw3g/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers7',
        //                 title: 'Черный пёс',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWE3eQ-W_04DXWk5kJBBUvvTyeAE316adJT4Qudjuw9HZlKf3NbjUxWlQsJ1w3LCQoNmt2VHn_UY4fSmtc_sBD_sJ/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers8',
        //                 title: 'Блицкриг',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdUuqkw9aDARJ2KQ1DrLG3IgJnnafMIjlAtdrjxtaOlqWhNemClzwEvZAk072WrNWt3Azirko_ZWGnINeLMlhplXLKYw8/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers9',
        //                 title: 'Код от бомбы',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWEXTTOG_xJ2cUVJ5JztUub6gZQNigPHOcG8atdngxdbezqWkZe6GwDsJ650pjO_DoI7wjlDl_hVkZWHtZNjCEI7-FvA/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers10',
        //                 title: 'Борис',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWUvRVeKs1MrsUFxkNhFbs_WnJBVpwL2aKWRG6o2zkNfcw_KlNbjVk20BucYoi-qXpNqj0ACxrUNpMWDwLI6UbEZgNsGaw3_x/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers11',
        //                 title: 'Кемпинг',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdFbT8j_CDAhJ3JAlHs6jrKVY116eRJWoSvtm0l9HckvP2MO-FkzkHvMMg0-qW9tmgjAKw8xU9MnezetHO9_84YQ/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers12',
        //                 title: 'Петушок',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRYQkrFeOesx9zGX1g7JgxetbGgJUll1aaecDhH7drvkdPfw6WsZ-LQkj8Fu8R3276YrNqs0A3i_EE9NmmnOsbLJaeH3hTq/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers13',
        //                 title: 'Мастер Чиф',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRVTUDfCOel3srVHQt3clYD5eujeFVmivabcjlE7YjuzYaIk66ja-iBl2hTvsQhj73C8dW7mFqz1WUjHS4/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers14',
        //                 title: 'Кудах',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRbSV7RS9u9xcrXUkl7NxcYtbawKAxf1P_HYi5bot_ildnclPbya-LUxjIBvcYn07zDo96kjFfs8kZtNzz1JYCVdgc5Zw3Oug_pWhTY4TM/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers15',
        //                 title: 'Спец-тех',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRORE3EU-G_0svsRFh2agdYo7SxLhVfx_bLeXMStIrjkdeIw6Hwa-6AwD8JsZVz3b_E94nzjQbj_kM9ZTv0ctLBdA86fxiOrf5vMKh4/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers16',
        //                 title: 'Сладкие слёзы',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdUuqkw9aDARJwIAhetbOqPhRfx_bJYy4MuI3kkNCPxvWkY-OJlzsG7ccoibGQp9jw3FDir0ZrYWrzJoDHcFI8ZkaQpAZNcXO2Mw/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers17',
        //                 title: 'Хорошая игра',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWEXTTOG_xJ2cVFJ7IQNWu7_rKFU31aHJdWwSuo-wktaKxKahYeuAwzlUupwg3b-UpImk0AzgqkE5NnezetFn0oSnzw/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers18',
        //                 title: 'Сожжение',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRVTUDfCO2j1MbdVk91MQ1YuPShfV5mhPKRJz4Rv4-3wdiJk6PwMeuIkGgCsJJ037DD9N6i0ATg8hA5fSmtc94XnxWo/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers19',
        //                 title: 'Террорист на котане',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdUuqkw9aDARJgKgpUt67rKVc0h6GYJ28Qu4XhxtDZwa-hMOzUwD1XuMEh0uzHptmi0VXi_hI5a3ezetFEgBA-HA/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers20',
        //                 title: 'Трезвый ум',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReXx6ACOe-hZ_sR1xmKhBoor-oOwJy0v3LdHMTv4Tuw9DTxKXxNeKDxW1VsMRz07uXpN33ilbt-EZqMGD1JtfHIFQ2fxiOrQRW681f/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers21',
        //                 title: 'Токсичность',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRbSV7RS9u9xcrXUkl7NxcYorW9IgRf1P_HYi5bot2ww4bcwqD1NePUlW4HuZRziLzA8Ij20Qbh_0BlYmjzJ4eUJwFtMgnOug_peliMtqE/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers22',
        //                 title: 'Вигго',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWUvRVeKs1MrsUFxkNhFbs_WzIgBn3L2bJWxDvd7ixtCKwPGnZenXxjgCu8Amib_Do9mhjQXlqUE-Nm32JtWSbEZgNscT73ep/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers23',
        //                 title: 'Боевая сова',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdUuqkw9aDARJjJBZYobbrLlE1g6CRcmxBu4ywktTblvWnNeyEz2oB7MQmieqT8dqg0QWx-UNqY3ezetE6AuiQBQ/130fx97f/image.png'
        //             },
        //             {
        //                 id: 'stikers24',
        //                 title: 'В паутине',
        //                 description: 'Наклейка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRORE3EU-G_0svsRFh2ahNStIW2PxJj2L3KImUau4uywdjfz_WkYumHlTlT7p132ruT9N7xjlHl_BU9Yz-nINTEbEZgNhFs1g3r/130fx97f/image.png'
        //             },
        //         ]
        //     },
        //     {
        //         id: 'army',
        //         image: 'https://images.steamcdn.io/easydrop/cases/arm.png',
        //         price: '30 RUB',
        //         title: 'Случайное армейское',
        //         //href: '/randomarmy_case'
        //         content:[
        //             {
        //                 id: 'army1',
        //                 title: 'Элитное снаряжение',
        //                 description: 'АК-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQXJVfdhUfQp4A3-EBg_7cNqQdr48-9fLQrnsIXCNLkuYYxLGMbVD_SOMl_54kw8iaQMKsTY8yzq3y3oPXBKBUT7Bt81Vg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army2',
        //                 title: 'Анодированная синева',
        //                 description: 'AUG',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZu7P3JZyR97s63go-0m_7zO6-fzjsEv5Yp0uuQ8dui3wTt_RBsYG-lJdSXJg5sMFGDr1C7wO7sg5G06IOJlyVTQYQwXg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army3',
        //                 title: 'Хот-род',
        //                 description: 'AUG',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZu7OHNdQJO5du-gM7SlvP2a-KFkDsD6cN33b6Z84rz0QXs8xJuZzymdYfDclU2M17W_Fm7366x0jzU3_8y/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army4',
        //                 title: 'Ахерон',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957P3dcjFH7c6Jh4uem_vnDKnUkmld_cBOhuDG_Zi73gTlqhJuYD_6LYDGdg4-Z1zQrFW9yLvvgMC-vJmazCA3vXZzsy7Zlgv3308OIiH5Ag/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army5',
        //                 title: 'Змеиная кожа',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FBRw7ODGcDZH09GzkImemrmsY-PUxmgAv5Up2rnFrdmijlXgqUA_ZjzzIIKQcQA7Y1uE_Fbtlefum9bi68KPYhsE/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army6',
        //                 title: 'Метеорит',
        //                 description: 'Desert Eagle',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTj5Q9c-ilYyHnu3xN4TVl3la18l4jeHVu97x31Dj_kA9a2DwcdWWJAZvZV_Qqwe3x-fv1Me6uMmanCE3vSEm4ynD30vgrmdJqGM/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army7',
        //                 title: 'Кровавая паутина',
        //                 description: 'CZ75-Auto',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhvazvVBKJNY_g_8AH5BGlj7p8yBIGwr-8Eelm6toLDZ-J9MNFETsDXUvTXYg_8u05qhvAML8bdvmqxikWkcSVq/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army8',
        //                 title: 'Oxide Blaze',
        //                 description: 'Desert Eagle',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH_9mkgL-OlvD4NoTSmXlD58F0hNbM8Ij8nVn680E_ZDvwdo-Re1RtYA3W_gLrk-rngMC8upTJmHFmsiErs3jfnxe11wYMMLJe6xiBeg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army9',
        //                 title: 'Elite 1.6',
        //                 description: 'Dual Berettas',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4OOzmImfkuTLMLfQhXhY6_p9g-7J4cL00A3tqhdlNWumJdTHegM8Yw6ErwO-w-y8jJ_vupmay3ZmvCgg4yvcgVXp1kydJNnp/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army10',
        //                 title: 'Изумруд',
        //                 description: 'Dual Berettas',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v33dDBH_t26kL-HnvD8J_WDwjlSv5QoiOrD8N6njlXnrhFqZzv0dteUd1A6aVHY8wLtyOzvhcK0ot2XnjpNFkx7/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army11',
        //                 title: 'Survivor Z',
        //                 description: 'FAMAS',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JmIWFg_bLP7LWnn9u5MRjjeyPoo333QTsqkdsZDz2ItfHdwI_NQmF-1O5lLjq08W6uMvJwCRl63Ui7WGdwUJj4iqdBQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army12',
        //                 title: 'Демонтаж',
        //                 description: 'FAMAS',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3fDhR5OO-m5S0lvnwDLjemm9u5Mx2gv2P9tWmiQPk-xE-YDqlINKUdgQ6YAzTqVm9xuvpjMS5u5zPwXcxunIg7GGdwUK4xWYQ4w/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army13',
        //                 title: 'Flame Test',
        //                 description: 'Five-SeveN',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjpR09q_goWYkuHxPYTZmX9u-sp1tf_I-oDwnGu4ohQ0J3f1ItXHcVI4YlvWrFXrkO7o1JHquMibmyZguykgtnrUyRXm10sdbbM8m7XAHrBtyPY3/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army14',
        //                 title: 'Violent Daimyo',
        //                 description: 'Five-SeveN',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goW0hPLiNrXukmpY5dx-teTE8YXghRqwrRFoYWGhdYScdQQ8YAvS81a3wui80J606J6YzXE1siEn4yzYnBK1n1gSOVzaIvOT/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army15',
        //                 title: 'Ventilator',
        //                 description: 'G3SG1',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642JgoWFg_74Mq_ehFRc7cF4n-SPoY6h2QK2qRA-MGChIoOVcAE7ZwzVqFfvkOno05S5vpvIzCQwuCIh5mGdwULOeaXr_w/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army16',
        //                 title: 'Леденец',
        //                 description: 'Galil AR',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPqdfUPw29RrTGSYg_M5gWNKlyLYDLVWq6ZyUZeN4N45IF8jSW6CPMwGsv0xrg_NbKZLd9Snm3y_vPTgKD0e-q25QhqbZ7daZ7b9X/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army17',
        //                 title: 'Смокинг',
        //                 description: 'Galil AR',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbfgJN_t-3q4yCkP_gfe7VlDwJv5Up3r-V8Nym2Vfi80U9NmumI4WVJw83Zg3Q-1S8x7_o0Mei_MOe7tXEvoo/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army18',
        //                 title: 'Оксидное пламя',
        //                 description: 'Glock-18',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-ImOXmPL_UmFRc7cF4n-SP8Nz32VHlrUZvZWDydofAJgM5YliC-gC4wLvohpS57ZSfy3E2uiUks2GdwUJEnbR_2Q/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army19',
        //                 title: 'Sacrifice',
        //                 description: 'Glock-18',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJnIWZmMj4OrzZgiUG6pV337CWoI-ijQS2qkA_Nmj1LYLGdgE3ZF3S-lC2xbi8gJDvv5vO1zI97f93Cx2f/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army20',
        //                 title: 'Смешанный камуфляж',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-dluX9MLrcmVRd4cJ5nqeWrNit2AewqhY_Yj31cIDGJgRtZV-E8gS2xOzv0Z_qucvJm3M16SFw-z-DyBeWkcOk/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army21',
        //                 title: 'Преобразователь',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhoyszadDl95Nmuq4yCkP_gfbjVxDoEu8R3073AptyniwTm8kBqYWnxLI-ScwBvY1GE8wfsl7y61sei_MOeKVbcl-w/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army22',
        //                 title: 'Магний',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09--m5CbkuXLNLPehX9u5cB1g_zMu92giQLi_xFtZGD7JY_BJlA5YwvW-wC8kL_rhsfv75jPyiM263Ui4i7D30vgnY5vvjw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army23',
        //                 title: 'Desert Strike',
        //                 description: 'MP5-SD',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf0Ob3fC0X09izh4WZg8jnJ6nYnW5u5cB1g_zMu9Wn2gy2-EJvN2zyJtOSJwc7ZVvSqFW5x7jmhcO0uczKnCRqunYj5CrD30vgFU2Wrjg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'army24',
        //                 title: 'Градиент',
        //                 description: 'MAC-10',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3dzxG6eO6nYeDg7miZbqDxj8B7Z0n2-3E94mjjQTirRI9MTjyIIWQeg84Y1DS_lm3wOfom9bi6-g13CfU/130fx97f/image.png',
        //             },
        //         ]
        //     },
        //     {
        //         id: 'accidental_forbidden',
        //         image: 'https://images.steamcdn.io/easydrop/cases/zapret2.png',
        //         price: '100 RUB',
        //         title: 'Случайное запрещенное',
        //         //href: '/af_case'
        //         content:[
        //             {
        //                 id: 'af1',
        //                 title: 'Orbit Mk01',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_unm5Q_tw_iL6Tp4322gTi-UBrYGugItKTJwQ-Zg6F-gXsyLu5gZPptJzMzXFn7j5iuyhzWOiRzw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af2',
        //                 title: 'Защитная сетка',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rd4cJ5nqfHoYnw3gy2qEA-MT36I4TBJ1I4ZA2D-Vfsx-jtgJ-9tZSbziQy7HIl-z-DyBfVofz8/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af3',
        //                 title: 'Древесная гадюка',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5cyzhr-DkvbiKvWJwWkD7JJz07mV9IiijAe3_RZsN277dYecegE2ZwvW-Vbtwe6-0Ja6ot2XniH6VW3j/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af4',
        //                 title: 'Phobos',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJS5NO0m5O0mvLwOq7c2G4EucYk2L7Ep42t3VGx_RFtamHyLISXe1JsYw6Fr1e9wuvr1JS5vs7XiSw0S4ZJl1o/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af5',
        //                 title: 'Пиксельный камуфляж',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PfMYTxW08y_mou0mvLwOq7c2DxUscQkiO2S8I-h2gTm-hA4NTyhdoDDcVU3MwzV_1G4xb_uhpPo6Z7XiSw03MaHlHE/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af6',
        //                 title: 'Eco',
        //                 description: 'CZ75-Auto',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cicVueOzl4-0m_7zO6-fxzJQ6ZJz07iV9I-i2Q3i8xZrYDigII7Hcwc8M1GG_gK2wO_p1pG6u4OJlyX1lloaZw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af7',
        //                 title: 'Пламя',
        //                 description: 'Desert Eagle',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J_XVkjoFuMYiiLqUrI-k3le3r0s5amj7d9eTI1I-M1rW-Fm_xO-50Jfvot2XnhS4_w8U/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af8',
        //                 title: 'Рельсотрон',
        //                 description: 'Desert Eagle',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-Oj_jLO77QgHIf6pYo2bCUoY7x2ge2-0ZpYDr6I4LHJlJtYQnQ_1Lrl-bmjcO57pmcmmwj5Hc--hfdcA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af9',
        //                 title: 'Пульс',
        //                 description: 'FAMAS',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59Ne60IwhkZzvEAK1fT8oq4QT_DBg_7cNqQdr4oe9RcA_rtoOSZrgpOdFJScLZD6WCYQ35uUNs06RbLMTbo3jpji28OnBKBUTGBg33zQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af10',
        //                 title: 'Валентность',
        //                 description: 'FAMAS',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTck29Y_cg_0rrEodik0FC38kU5NmqnJICddlc4aAnX-AO3lL2-08C4vp7Ayns1vD5iuygKw238fw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af11',
        //                 title: 'Поверхностная закалка',
        //                 description: 'Five-SeveN',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9ALFhU_w28QzTBCI24dJuGoXhpbhQe1jmvNaSZ7AlOI5KGZTZXaOBZACp401q0_IJLJGNoS_m23z3ejBdcR0OBt0/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af12',
        //                 title: 'Неоновое кимоно',
        //                 description: 'Five-SeveN',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09e_mY-FmMjwOrrcmWVV-_p8j-3I4IG70AHk-xZqMm2iItWQcgc-MwzT_Fm3xubqjJe87p7KzydmvyMg4H3ayQv3309niA2tcQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af13',
        //                 title: 'Цербер',
        //                 description: 'Galil AR',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJB6c60hpWYqPD1P7LdqWNU6dNoxLGWoI2liwG18hZsZW2hcY6cIFNvMAvS_Ffrye-6h8e4uJqbwHpnsyA8pSGK_cSp9dA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af14',
        //                 title: 'Невозмутимость',
        //                 description: 'Galil AR',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczPYgJF7dC_mL-FnvD8J6zYmGxu5Mx2gv3--Y3nj1H6qRBrYj-hJNSccwY8N1rS-VW2l-3mhZe57pqdnHcy7HZ243_VnRzigQYMMLLI5LosnQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af15',
        //                 title: 'Градиент',
        //                 description: 'Glock-18',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3dzxG6eO6nYeDg7miYr7VlWgHscN32LyT8dmm31XgrxdtZzvzJYDGIFM2Y16D-FfvlOu9m9bi66Oq9HyE/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af16',
        //                 title: 'Ядерный сад',
        //                 description: 'Glock-18',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73fyhB4Nm3hr-YnOL4P6jukXlU7ctOh-zF_Jn4xlblqkRpMj37cI7GdgBsN1vTq1jsyeq-0JW4v5TBmHNhsyR0sH7bmhGpwUYbMOFLpz4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af17',
        //                 title: 'Падение Икара',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ClPbmJqjummJW4NE_3ujHpY2sigXl-UFoZGj7JYCXdgQ4YVnQ-1Lqxenn1MLpuszJz3tk6D5iuyjCqdNpmA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af18',
        //                 title: 'Flashback',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDL3dl3hZ6sRygdbM8Ij8nVn6r0FtN2-gJteVIFJoNF6E_1O4k-rthMO66J3InHdhviBx7X2LnhaxhwYMMLKHMI1gQw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af19',
        //                 title: 'Злобный дайме',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDzRyTQmWAPRhWeMz-DfoCC4_8chcWdKy_q4LZ1jqtYDPN7coY4oaTsXZCfeCMgiv7h0-h_VfKJOMpyvv3SrpPG9cCBb1ujVTu8qYAl4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af20',
        //                 title: 'Современный охотник',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhoyszAZDNW6c6JmY-PkuX6DLbUkmJE5Ysh3O_H94_wiwSxrxZpMDjzdtWVIwU6NwzUqAW7wOnpgJG_vM-fwCFgpGB8sg8KZlD2/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af21',
        //                 title: 'Малахит',
        //                 description: 'MAC-10',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAhmfzvPAKMPDMo39QTtCi87_MJcWdKy_q4LZw_otYDAO7J6MN5JS5LZC_ePNwj1vkg9iaNbfJXfpn6-i3noaDoDU0D1ujVTAllEXO4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af22',
        //                 title: 'Monster Call',
        //                 description: 'MAG-7',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09G5mpOfkuXLMLrdmlRc7cF4n-SP996g31K3-ERqNTv6IoWSJAU_ZlGD_Fa_yb_tgZS1vZnKzHAwuSNw7WGdwUJ7YPzLvg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af23',
        //                 title: 'Kitbash',
        //                 description: 'MP5-SD',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X_9iJg4GYg_L4MrXVqWdU78Ryk9bM8Ij8nVn6_0dtMm30dYfGdlRvaVuGqAe7xO3o15a86MycnXJivXZwsCrVlhywhAYMMLKSzhstMw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'af24',
        //                 title: 'Impire',
        //                 description: 'MP7',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7P7YJgJL4cy_hoW0mvLwOq7c2D1VvpYki73HotT0iVDg_hFrZj_1LY-RegU3YVnT-Vnowe_rjZ_v6pXXiSw0kXssCIY/130fx97f/image.png',
        //             },
        //         ]
        //     },
        //     {
        //         id: 'accidental_classified',
        //         image: 'https://images.steamcdn.io/easydrop/cases/secret2.png',
        //         price: '300 RUB',
        //         title: 'Случайное засекреченное',
        //         //href: '/ac_case'
        //         content:[
        //             {
        //                 id: 'ac1',
        //                 title: 'Поверхностная закалка',
        //                 description: 'АК-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzZ2TQvLDaVaY_g_8AH5BGljvJI2BI7noOlSKAW9vYGVNuUpNIlJTMnRXaLXYw6s40w6iaJfKsTYvmqxirPZAJU6/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac2',
        //                 title: 'Снежная буря',
        //                 description: 'АК-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5ntbN9J7yjRrn8xA4Yj3yd9OSdFU7aVmF8wPvwrrpgpG47c7InHVjuiMm5ymOn0S2n1gSOR29uyL_/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac3',
        //                 title: 'Гидропоника',
        //                 description: 'АК-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLfYkWNFppwpie2Rp9_w0VDm-UNrMj30IoPHdAY-M1rY-1K7w7291pO8vJTJzHN9-n51xLwwH8g/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac4',
        //                 title: 'Point Disarray',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18h0juDU-MLx2gKy8xFqMDr2IIORcAU6MlnS_Vjtxu7rhcK-u5-cyXZqsiEg7HnUgVXp1kpd_x09/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac5',
        //                 title: 'Динамика',
        //                 description: 'AUG',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJP49GzmpSemsj4OrzZgiUA7pYn2rqW9on23wTjqkppZG77IYCXd1A-ZQrT_VW-k7zqh5666JzP1zI97Zskx3bv/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac6',
        //                 title: 'БАХ',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKOC5YcAjDDJ9NVfgq-A3TBCI24dJuGoPlo-JUeQS84NGSMuQvOdBISpKBU6TUMwqruxo50fdcfcaAqHnpj3z3ejBdzQVSDJ4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac7',
        //                 title: 'Электрический улей',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKOC5Yeg3UBJ9TWfEz4QWiUXJl6cY2UNLl9e4HcVm-tobFOuIvMNBPF8TRDv6DZ1v84ks91aJae4vJ_n0-dvDrog/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac8',
        //                 title: 'Горячечные грёзы',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJS_8W1nI-bluP8DLbUkmJE5Ysji7vHrNjxjgKw_RVtazr3INWddQRsYljS-QLql-e9hJXt75ucm3BlpGB8snSRBTot/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac9',
        //                 title: 'Графит',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMTpYcRbXDLBSWco45gn6Bhg-4cBrQJnj8e5fLVnttoWSMbgsZtsfHJLTU6DXMw6o7kJp06BZLJaKqHm-2H_rJC5UDIW53w6s/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac10',
        //                 title: 'Механо-пушка',
        //                 description: 'FAMAS',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmYWIn_bLPr7Vn35cppNzi-rCp47z2Afh-0RtZWilJ4bHcFNtaA7W-1O9le290MK778_PnCZ9-n51_SX8Af0/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac11',
        //                 title: 'Обезьянье дело',
        //                 description: 'Five-SeveN',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9ArVhWvws8RvpHyI818ViWta49oQLLFi28d_YYbB-N9tJHpGBXvKAYV-p7koxh_RUepyBqH662CS7bj1cWEHjrD1WmvjH5OXENuHjvw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac12',
        //                 title: 'Эко',
        //                 description: 'Galil AR',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPqdfUPw2yw3vBhg_7cNqQdr4or4EeA_q4ICXZrd4Mo4fGJXXCKKGMFv07kMxgvJVL5WIpi3q3y3qb3BKBUS1IsSPCQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac13',
        //                 title: 'Sugar Rush',
        //                 description: 'Galil AR',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-IlvnwKrjZl2RC18l4jeHVu9uliwWwqRJqMGuncY-cdFNtZ17Wq1O4wbzphZLvu5vJnHJi6HIg5SvD30vgL7LkLAY/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac14',
        //                 title: 'Водяной',
        //                 description: 'Glock-18',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhkZzvFDa9dV7g2_Rn5DDQx7cl3a9qz87ITJBLmsoHEYbAtMNEeF8iBU_CFNVqrv09sgqJfKsTbqCu5iyrob2deCBC65Ctazz387ae9/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac15',
        //                 title: 'Атомный сплав',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_Q3ywW4CHZ_-_hiWNu57oQJO12x49epbuV4aZ0RAcLWX6OGZA2puB1pgqUMLpWBoC671XngOD1ZCEG_rmMAkbDWvORp1mcIAy_njWgGDWs/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac16',
        //                 title: 'Опустошитель',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDL_UlWJc6dF-mNbM8Ij8nVn6rhFtYmyiJ4SWJAc4NQvS8ge9xb3v1J65usmbnCY17CMr5CvYmkG1hgYMMLJencFQUA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac17',
        //                 title: 'Страж',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_YvywW4CHZ_-_hmWNKx9rUSFlG64NuDbq4qN4seF8jZWvXSYgqru0g-hKlfJpKNp3npiym6aDtZUxa_rmIMmeXWpPI11YiABWgk/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac18',
        //                 title: 'Хот-род',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mr-ZkvPLPu_Qx3hu5Mx2gv2P8I-g0VHtqUNlNmimLdCRdFdoYFCErwC4xLu6jJbpuc-dnydq73Jw5GGdwULhEbgmIQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac19',
        //                 title: 'Рыцарь',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-GkuP1P6jummJW4NE_2-zHpN2g3Vfj-kFvZ2ChJtfEJ1M2YF_Sq1LqkOm515fpup-cyHFluD5iuyj8q1fJzg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac20',
        //                 title: 'Шедевр',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bM8Ij8nVn6_ERkNT_0IoXHIQI9M1CE_1G3ku6605K-us7InyNhvnQnt37VnkOx1QYMMLJOVeO32Q/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac21',
        //                 title: 'Nightmare',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITfn2xZ_MhwmOz--YXygED6_Us5a2DxcdSRJlNqMAzY-li8weu-gMDovJufyHVmuCklsX6PyhTk0wYMMLLeV8xVfw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac22',
        //                 title: 'Desolate Space',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18h0juDU-MKt0Fex-kpkMTumJobEdlU7ZFCF-AO4wOnv0Mft752azyRh7CZ2ty2MgVXp1k8SoycS/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac23',
        //                 title: 'Адское пламя',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09SzmIyNnuXxDLfYkWNFpsEi3L6UrdiljFXlr0VsNmj6dteXdFBtYFnV-VjryO3qhMe86c7BwHB9-n51JK1M_qQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac24',
        //                 title: 'Посейдон',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszYfi5H5di5mr-GkvP9JrafwDtV7cAl2uiYpoqt3Q3n-kNkZWCmINTHe1I_YgrV-wS8xb-91p_vuoOJlyUlgXdlZw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac25',
        //                 title: 'Фосфор',
        //                 description: 'MP5-SD',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09qzh5SCgfb4DL_Dn3tu5Mx2gv2P9tukiVLkqkRkZzz2cdXBdFM7NV2G-Ae5wOfphMTpvZjMnHBruXN2sGGdwUKk4NUKRA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac26',
        //                 title: 'Airlock',
        //                 description: 'MP9',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJM7c61nZO0mvLwOq7c2DgJ6ZR1jLySot2h2wCy_UE9Nzj6cNDGew5raFvW-QPsx-27jJ64u5rXiSw0C_R9Otw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac27',
        //                 title: 'Скоростной зверь',
        //                 description: 'Nova',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09SvhIWZlfL1IK_um25V4dB8xLnApor33FK2qkBtYWvwIYaXdlM-NFrYqQK7kLvogsS5tJSdyncwvCU8pSGKT_oyuxQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac28',
        //                 title: 'Primal Saber',
        //                 description: 'UMP-45',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBSuImJhJKCmvb4ILrTk3lu5cB1g_zMu46jjAGy80c_ajqgd9OTdFRoZl_V_VG5xr_r1pO9vMvNyidhs3Rztn7D30vgvDNIovc/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac29',
        //                 title: 'Asiimov',
        //                 description: 'P250',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS092lnYmGmOHLPr7Vn35cpsB0j7qZoNn32QW2-xJoYGHzd9SWdwQ5ZgvYrFO9kOrn08XouJ_KyCR9-n51cFMXX4s/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac30',
        //                 title: 'Картель',
        //                 description: 'P250',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rZrblDzZ2TRSQVPBhX_Qo4A3gNio37M52WZmzpOpRe1rttNeTOuEkMdwdHcbXCfbXZAuv6x87ifJYJsGJpSLri37hJC5UDK03rOoN/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac31',
        //                 title: 'Nostalgia',
        //                 description: 'P90',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJM48-ilYyMnvbLP7LWnn8fv5AiiOiTodrz3gyyr0Q6Zjz0do6RdVA8MAyDrFntkue8jcXvupWfyWwj5HdxZxQhQQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'ac32',
        //                 title: 'Сайрекс',
        //                 description: 'SG 553',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oM7bgZghkZzvRBvULD8o57RrpERg_7cNqQdr4o-xQKAi954eSYLUsNthIHMLXX_DXYAv-7Rk5g6ELfJ2Ip3y73368MnBKBUTfd5LARA/130fx97f/image.png',
        //             },
        //         ]
        //     },
        //     {
        //         id: 'easysecret',
        //         image: 'https://images.steamcdn.io/easydrop/cases/tainoe2.png',
        //         price: '400 RUB',
        //         title: 'Изи тайное',
        //         //href: '/easysecret_case'
        //         content:[
        //             {
        //                 id: 'easysecret1',
        //                 title: 'Наёмник',
        //                 description: 'AUG',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7OPFcgJO5du-gM6OxfakZbnQw28H65Eg2L2RrYin3ADjrkJqYWz0Jo6UdVNrYV3SqAW9366x0l1OAhlP/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret2',
        //                 title: 'Хладагент',
        //                 description: 'Five-SeveN',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWZU7Mxkh6fErI-n3FXn-xc5ZGzwdYaTIVA3YFmD-lK9l-vujcDp6J7KzCZkuSl3-z-DyOkI1NfG/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret3',
        //                 title: 'Северный лес',
        //                 description: 'P250',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszOfi9H_8iJlo-Zkvb4DLfYkWNFpsEp2rzDpo-g3lLj_0duYzyiJoPAcwJqM1DWr1btl-bujZfotZXIynZ9-n51cU1OKdk/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret4',
        //                 title: 'Наёмник',
        //                 description: 'SCAR-20',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODHTi1P7-O-kYGdjrmsYeOCxDJUupEi3-3A892h2FHgrRdrZDv1Jo6ccwU2Yl3T81Tqx-jrm9bi6xwIv_x-/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret5',
        //                 title: 'Голубая хвоя',
        //                 description: 'SSG 08',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19fwPz3fDJR_-O6nYeDg7mjZ-yExW9Qu5wkj7-W8dis2AXk-kFqamHwLNLDcA5rYArW-VC9kOzqm9bi61mW1oPB/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret6',
        //                 title: 'Аквамариновая месть',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQXJVfdhX_ov5gnrDBgz5NNcWdKy_q4LZwm5toDOYrAuYdgYTcSEU_XQYAD84khqh6kLKsCAoy7r2nnoaGgLWhf1ujVTz27JTVE/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret7',
        //                 title: 'Азимов',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn8fvpMkjOqS99Smiwzk_0VvamH0LIHEdwFqYw2G_QC3lefsjZS4uJXLyWwj5HclxVTx0A/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret8',
        //                 title: 'Кровавый спорт',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_um25V4dB8xO3Hpdn22lWxqUc9Zmr0J9XBIw89M1GGqFC8ybzvgMLvvJ6azSE1viM8pSGK5KY2J5A/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret9',
        //                 title: 'Огненный змей',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQLLE6VNWecq8Qb4NiY5vJBcVsW34bQ5JFm77cebLbB-Zt4fGsDVW_DUZV31uR9sh_AJfsbcoXjpiy24OWZZX0C_-WkAyrWZ-uw81vin62w/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret10',
        //                 title: 'Fuel Injector',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRc7cF4n-SPpIr33gS1rkJqYGD7J4GQcQY5aFCG-lHrlO650JLv6ZzMziA2vXMgtmGdwULg8tCd0w/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret11',
        //                 title: 'Neon Revolution',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppwl3OyVp9Txi1Gy_0Y9MDjyd4fGJFVsZFGG-gC5xLvo1pfouJ3Bzyd9-n51-K95osI/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret12',
        //                 title: 'Вулкан',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQXJVfdhTuA49g3-Nio37M52WZnjpepeeQrm5YDBYOUlOIlJSsXQXv6FMA_4uEpriKFcfZ3a9irr2SjhJC5UDBM24vTE/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret13',
        //                 title: 'Пустынный повстанец',
        //                 description: 'AK-47',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTRDQCKJLSPAF9QO4Xhg_7cNqQdr4ou8Ffw-7s4GUM7IlYdAdH8bRUqSCblyv6Rg6hKcOKJSKqSq-1SrsPHBKBUSRoheuWQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret14',
        //                 title: 'Ахикабара',
        //                 description: 'AUG',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLGeDBH092jk7-HnvD8J_XXxj8IuJIkib-VoNSi2VGx_UQ-Yzv3I4SQcVA7aAvS_FC6wru51pK1ot2XnmtK7ev7/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret15',
        //                 title: 'Азимов',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqFNVfg14jfhDCM7_cotUNTkp-gAKF3otIfBOuUoNdBIHMCDX_SCZF_9uR8w0fJUfpyPpC7n3jOpZDl_eS2fcg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret16',
        //                 title: 'История о драконе',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5cB1g_zMu9zw3g2yrkVtZ2r6IoSVdAU-ZVrY_lS6lb_ogsDqu57NmCQ27iJx53nD30vgUTXWscs/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret17',
        //                 title: 'Скоростной зверь',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqhHTPAoywrpCDQm18pmUN6j-vUDeFi-4IbHNrcoNolIGMXRUvXVNwz_4khpgadefZzc9Hjmjny8bzxeRVO1rf9MwH3s/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret18',
        //                 title: 'Боец',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMTpYcxPSPqdSU-cjywXpDS4n5Yk0AIfvr-pVcQ2-toCUZrApY9pJTpHWCKDQMgD070o71aFcLJaA8S_nw223bVCT4Jfk/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret19',
        //                 title: 'Медуза',
        //                 description: 'AWP',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdShR7eO3g5C0mvLwOq7c2DkAvJQg27iT9NWm2VK3rkU6YmmiI4SVJAQ9MljUr1O5ku7ug8K1usnXiSw07gvX0uU/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret20',
        //                 title: 'Roll Cage',
        //                 description: 'FAMAS',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JhoGHm-7LPr7Vn35cpsRw3bySrYr03wLsqkE_MTzyLdWdclA9ZlqF_QDowL290JG-7s_IyHV9-n51iAGw7_U/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret21',
        //                 title: 'Hyper Beast',
        //                 description: 'Five-SeveN',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTZj3tU-sd0i_rVyoD8j1yg5RduNj_yLNSQdVQ-M1DS-1e8xbvrh56_vMiczSFnvXUg4X6IyxGzhh5SLrs4rcs7-T4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret22',
        //                 title: 'Шелкунчик',
        //                 description: 'Galil AR',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPqdfUPw2ywnuGyYh4chta9qz87ITJBLrs9TEO7d6MoxKGpaDU6CCMFyovhk81qdafpCJpSi9jyvhPGsCCUHi5CtazzBY6R44/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret23',
        //                 title: 'Пустынный повстанец',
        //                 description: 'Glock-18',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJg4GYg_L4MrXVqXlU6sB9teTE8YXghRrhr0U-NTulddSSdFVqN1HW_QPrl-u7gp61vpicmiE1uSkk4CvamkHjn1gSOWfdS3KX/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret24',
        //                 title: 'Сайрекс',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_YvywW4CHYh18R6RtKuyLYDLVWq6ZzFZrUqMItNHpbRUqCOYg-rvEMx1qdcLseIpy253Cy4Mz9fUxDi-ToHhqbZ7WBrCDQm/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret25',
        //                 title: 'Золотая спираль',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alIITCmGpa7cd4nuz-8oP5jGu5rhc1JjTtLIfEdVQ-YA6G-FbqwOzs05Tp6smdzHdiuCUi5y7YnRG1gB9OOLE50OveFwutvS5J8A/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret26',
        //                 title: 'Скоростной зверь',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_YvywW4CHYN4N5zUcWJ9b4HOkiA6deSavVxLt0aG5GCCKDQMgn-4kMxgaVYJ5CA9iO-3y-9OT8JDUXirD4GneXT6LJ1wjFBrFMBOCI/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret27',
        //                 title: 'Механо-пушка',
        //                 description: 'M4A1-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLphY4OiyuOoDGIFVvN1nRrFi4ku7vgMPov53MmHVruiUm7CyIzUaw1E4fOrRrgvCACQLJVjkHgfg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret28',
        //                 title: 'Азимов',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDzRyTQmWPqFNVfg14jfhDCM7_cotVtLn87oCewy8ttHBZ7J6ZIsaGMHWDPKFM1_940k60vRdfZTcpCi8iTOpZDkfJ7O9Pw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret29',
        //                 title: 'Buzz Kill',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW08-zl5SEhcj5Nr_Yg2Yfu8Ek0-uXrNyh3gbn_0M-YzqmIoLAJFA6M1vU_Fe7lLrrgp6_u52cyGwj5HcviqwPgQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret30',
        //                 title: 'Вой',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLPr7Vn35cppYo0riZp4-t3Q2x_UVpYGr6LIXHJABrYVGB_QS5k72905S_75ycm3t9-n51e4WtYjg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret31',
        //                 title: 'Император',
        //                 description: 'M4A4',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLP7LWnn8fvpRzj72ZoNmsigS1_hdpZDzzIIeVelA2Zl6G_wLoxuvq0MW07c6awWwj5HetHVr5dg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret32',
        //                 title: 'Неоновый гонщик',
        //                 description: 'MAC-10',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAhkZzvPAKMPDMo08QfiGy427dVcWdKy_q4LZ1rotNfGMrgqZoxKH8LXXv-EZQmouUk7iKVYLZeKoSPsjH7sbGpYXEH1ujVTXmYdmCw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret33',
        //                 title: 'Bloodsport',
        //                 description: 'MP7',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret34',
        //                 title: 'Прощальный оскал',
        //                 description: 'P250',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITck29Y_cg_3r2QpY2n0QWx_BU4aj_6ctTAJgE4aF7W-FC4lLq7hZO1vMnLznFhvj5iuyjLh3IIBg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret35',
        //                 title: 'Азимов',
        //                 description: 'P90',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYYl2STKFNVfw3-x7TBCI24dJuGoOy8-0EKgrv5YaVMbgkOIpJTcbSU_OFYwuo7UIxg_JafJCMqXvqjn_3ejBdkE3axU4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret36',
        //                 title: 'Смертоносные кошечки',
        //                 description: 'P90',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYcQXWEqtLUPkpyxi1WRg_7cNqQdr4o-wEKA3msoaSM7EoNdxIHZTSW_KCYwD7uB5rgaNffpDdo3ztjC69P3BKBUScTnBrdA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret37',
        //                 title: 'Градиент',
        //                 description: 'R8 Revolver',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cDx96t2ykb-ZkuH7P63UhFRd4cJ5nqfA89uiiVGx8hVkYWDwItOSdwc-M1DZr1bowb3u18Tqus-fmCM17CQn-z-DyMgtirei/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret38',
        //                 title: 'Кровь в воде',
        //                 description: 'SSG 08',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oJ-TlaAhkZzvRCaFMV8o38QzlHCp8usY6UNHip-1QeQm65YCQZeMvOdoYTsPWCaWDZV__vx5thaMLKpOKqDSvg3pKHSnaBw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret39',
        //                 title: 'Dragonfire',
        //                 description: 'SSG 08',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkJKKkPj6NbLDk1RC68phj9bM8Ij8nVn6qBE9Y2ilLYaUI1M3ZQ3T-FW4yb28hp68tc7IwHdjvyQm5XnfzRO00wYMMLKcF6HpFw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easysecret40',
        //                 title: 'Убийство подтверждено',
        //                 description: 'USP-S',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh5yYGr7IoWVdABrYQ3Y-1m8xezp0ZTtvpjNmHpguCAhtnndzRW10x9KOvsv26KUE4Zjjg/130fx97f/image.png',
        //             },
        //
        //         ]
        //     },
        //     {
        //         id: 'easyknife',
        //         image: 'https://images.steamcdn.io/easydrop/cases/redkoe-min.png',
        //         price: '500 RUB',
        //         title: 'Изи нож',
        //         //href: '/easyknife_case'
        //         content:[
        //             {
        //                 id: 'easyknife1',
        //                 title: 'Наёмник',
        //                 description: 'AUG',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7OPFcgJO5du-gM6OxfakZbnQw28H65Eg2L2RrYin3ADjrkJqYWz0Jo6UdVNrYV3SqAW9366x0l1OAhlP/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife2',
        //                 title: 'Хладагент',
        //                 description: 'Five-SeveN',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWZU7Mxkh6fErI-n3FXn-xc5ZGzwdYaTIVA3YFmD-lK9l-vujcDp6J7KzCZkuSl3-z-DyOkI1NfG/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife3',
        //                 title: 'Пиксельный камуфляж',
        //                 description: 'MP7',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957PfMYTxW09C_k4if2aemY-zXlD5X7ZVw2-yTpI_xjFXm8xZsY2ylI4-TclA8NQvU_VO2k-fxxcjrEfavWb4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife4',
        //                 title: 'Песчаная штриховка',
        //                 description: 'MP9',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRw7OfJYTh9_9S5hpS0hPb6N4Tdn2xZ_Isp07rFpY70i1Lk-ERpY233LNXAJAJsNFmG_FW3xOfu15-6vp_AyXU2pGB8suBC9uz5/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife5',
        //                 title: 'Занос',
        //                 description: 'MP9',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FA957ODYfTxW-Nmkx7-GkvP9JrafkGpV7Zd13eqWrNyt2AHi_hdqam33JdSQdlJtZ1_V-la_lby51pG974OJlyXgtRQKKA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife6',
        //                 title: 'Северный лес',
        //                 description: 'P250',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszOfi9H_8iJlo-Zkvb4DLfYkWNFpsEp2rzDpo-g3lLj_0duYzyiJoPAcwJqM1DWr1btl-bujZfotZXIynZ9-n51cU1OKdk/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife7',
        //                 title: 'Песчаное напыление',
        //                 description: 'P90',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7ODYYzxb08-3moS0mvLwOq7c2GlUuZR0ibiRpNqs2VXi-kI5Mm2hd4GdIQM9NwrW-Va5xObmjJK-uczXiSw0I3Bdoc4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife8',
        //                 title: 'Наёмник',
        //                 description: 'SCAR-20',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODHTi1P7-O-kYGdjrmsYeOCxDJUupEi3-3A892h2FHgrRdrZDv1Jo6ccwU2Yl3T81Tqx-jrm9bi6xwIv_x-/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife9',
        //                 title: 'Autotronic',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zPYgJA7cW5moWfqPbhJ7TFhGRf4cZOhuDG_Zi73FbjrUtsaj_3cdORcQJqNw7YrFO5wbzvgZe9vJ3JyHA1uSlx4CqPygv330-muln14A/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife10',
        //                 title: 'Чёрный глянец',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zLZAJA7cW5moWfqOTgPLXUgWpC4Pp8j-3I4IG7i1Xj8kY4N2_7LILBcwZsZlrS_gK5l-vu0MXu7Z6amnVqviki43nflgv3308aMEej8g/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife11',
        //                 title: 'Вороненая сталь',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-HnvD8J_WFxjIBvZIi3OqSo4j3jFbtr0NkY270cNLEJ1RsYV6DqAO8wum5gJ6_ot2Xnpnfakz6/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife12',
        //                 title: 'Северный лес',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWZU7Mxkh6eQoN6i2wXmrxZvamv6ddfBcAY2aFGE_VK2xO-815TptJibwSMy6Ch3-z-DyNmZMjxw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife13',
        //                 title: 'Чистая вода',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJN79m3mr-Amf7yNoTck29Y_cg_ibqRrNWg0QLhqRI9MjihJ4DEJwY_YljR-QS3wezp1566us6bzCFisz5iuyi2oe5tAw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife14',
        //                 title: 'Поверхностная закалка',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-GkvP9JrafkzJUv8QjjuyQoNzw3FLi_BZtMjigJtORdw5sMF3R-wO5wbzm0ZO06YOJlyXalsNg1w/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife15',
        //                 title: 'Кровавая паутина',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq42Ok_7hPvXUzjJS6pQki7HFrY-j2QLjqUM9ajqmd9KdcgU3MlzX-1a6xLrtjZG6ot2XngTDR_ke/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife16',
        //                 title: 'Дамасская сталь',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJG7dG3h4OehMj4OrzZgiVT7Jdz2euS84_x3wSyrxY_ZGr1dYGdcFBvZFnQ8gTvyOzng8K0uszB1zI97SQtQxI0/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife17',
        //                 title: 'Волны',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJG48ymmIWZqOf8MqjUxVRd4cJ5nqeXpdzx0FHgqhFqZmn6IY_DI1U8aFuB_FLql-nt1pe7tMybzHFmvCUj-z-DyAETkzcY/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife18',
        //                 title: 'Градиент',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gfe7QlT9XvJcj2r2S99itigDjrkdoZmqgd4SQclU5aA6Eq1LrxubngJOi_MOelmqWqpk/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife19',
        //                 title: 'Freehand',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJP7c69kYS0gufLP7LWnn8f65dw3u3D9o2s2wfsqEI9Zj-lddeXdgA5YF3W81foyOzug57tuJSbmmwj5HdBgeCTYA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife20',
        //                 title: 'Гамма-волны',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJF7dG7lb-PmOfkP77DqXtZ6dZ02dbN_Iv9nBrmrkFqYD_xcI_GcQ5rYg6DrAO6xL_mgJ_uvZ2YnXtq6CJ34nqPmkS2n1gSOSUsT3Uj/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife21',
        //                 title: 'Легенды',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zLZAJA7cW5moWfqPv7Ib7um25V4dB8xOiZooqg3FKyqkM6Ym2hLdKRIFNsYlvQrALqk7--hJ6-uprNz3UwuHU8pSGK3s1dbiE/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife22',
        //                 title: 'Мраморный градиент',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJP7c60mIW0kfbwNoTdn2xZ_ItwjuqTrdrz2w238ks9am_wJICXclc3ZlDT-wLvw7vqhZO8vp_AnSQ1pGB8slyqDZmn/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife23',
        //                 title: 'Ночь',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-HnvD8J_WAx2kDuZQmi--T8Nzz2gDk-kJtYGn2LIOSI1Q3Yg3Q-li_lO3rgsPoot2XniRHLjB0/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife24',
        //                 title: 'Пыльник',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJR-NmzmL-Amf7yNoTck29Y_cg_2rnHp9ul0AfirhFvYmigcoLGdFA3YQzS-gTvybrnhZ-778_KySAxuT5iuyjR-pKcpA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife25',
        //                 title: 'Зуб тигра',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfwJW5duzhr-Ehfb6NL7ummJW4NE_3bGR84qmiQHsr0NtMm7wcILBdVI5ZF2BrgPqkr_rg5K0v8nIyiQy7D5iuyj6nUSP2A/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife26',
        //                 title: 'Ультрафиолет',
        //                 description: '★ Штык-нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJS-c6mmIW0m_7zO6-flTxXuJ1yiLiZ89n2iwPt-RJuZDzyLIDAJwA9YV7R_gO3wr3sgJS8vIOJlyVBqcCF8Q/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife27',
        //                 title: 'Вороненая сталь',
        //                 description: '★ Bowie Knife',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMqrulGdE7cFOhuDG_Zi7jAbgqENvNjv2cYHDJ1Q4ZAqB-Vi5l-u-1MXtucvIynJn63N3syzbnQv3308wj9M7Tg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife28',
        //                 title: 'Поверхностная закалка',
        //                 description: '★ Bowie Knife',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMqrumWJd7cFOhuDG_Zi73VDi-hdqNmn6INCXc1Q8NFDV_Qe-x7i8g5e-v8ydzSZi7HUr437UnAv3309ikmqnoA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife29',
        //                 title: 'Кровавая паутина',
        //                 description: '★ Нож Боуи',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLO6LugW5T-_p8j-3I4IG73ALm_xc9YT_2IIPBIVQ8ZFnVrwO4wO_m0ZO1vZScynNnv3Mi4XyOnwv3308wbKcd5w/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife30',
        //                 title: 'Дамасская сталь',
        //                 description: '★ Нож Боуи',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMqrukmpc6dZyn_r-rNzKhF2zowdyMWzwJICTeg48ZlHQ8lC7k7_ugMC5vJWYmnBlsnYg7CyJmUbi1U5OP_sv26J6isl_AQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife31',
        //                 title: 'Волны',
        //                 description: '★ Нож Боуи',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQeLpxo7Oy3tJtOVe1dsY1nUqAO_kua5hZXtuMybmHtivHZz5ivdl0DkhB4aaONp0eveFwvzsJ5Rmg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife32',
        //                 title: 'Градиент',
        //                 description: '★ Нож Боуи',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrrukGpV7fp9g-7J4cLzjAzhrkA4aj-hcI6Sd1VvY13V-wO9xuvn05O_u5mcynE3uyYlsy2LgVXp1uhoh_bX/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife33',
        //                 title: 'Мраморный градиент',
        //                 description: '★ Нож Боуи',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbum2pD6sl0te_A8YnKhF2zowdyNjz1INCWewU9YArR-wO6w7jp0MC76Z3Jn3dkunJx5SuMnxzk1xgZO_sv26Is8TDGIA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife34',
        //                 title: 'Поверхностная закалка',
        //                 description: '★ Нож-бабочка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWdY781lxO2Upomt2Fbj-0U5ZD30ctfGe1I8YwzS_FS7yOu61JfttZjAnCNks3I8pSGKtqA3AxE/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife35',
        //                 title: 'Кровавая паутина',
        //                 description: '★ Нож-бабочка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajummJW4NE_0uyS9N-j3gy180Vrazj3d9OQdFQ8Z1_VqVe-lem61pDtu5jPwXBk6z5iuyhUtHBvlA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife36',
        //                 title: 'Волны',
        //                 description: '★ Нож-бабочка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPP7I6vdk3lu-M1wmeySyoD8j1yg5Uo_MGD7cYaXdw5oN1HS_Fnrx-m91MTt6JjJnXtmsicr7SrZyxK2gUxSLrs40_zJGdY/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife37',
        //                 title: 'Градиент',
        //                 description: '★ Нож-бабочка',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GKqPH1N77ummJW4NE_iLjA99nzigexr0NkYmH2dYSTdAU9ZQrW_lm2kO3pgcTuv8vLy3I1sj5iuyin5z3u1g/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife38',
        //                 title: 'Поверхностная закалка',
        //                 description: '★ Classic Knife',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxT09O_mIWPqPv9NLPF2DkBuJUgib2Q8NX3jgex-hBtNzj6LYWdIQ9oZlqB81K7w-rugpO575XXiSw0EEOhUO8/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife39',
        //                 title: 'Градиент',
        //                 description: '★ Classic Knife',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxD09q3kIW0m_7zO6-fkDgI6cB13rzDo9ms0VfkrkZkZmmgdo-RelQ2YA7U_1O4ybi618W0v4OJlyXq5FP8lw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife40',
        //                 title: 'Волны',
        //                 description: '★ Фальшион',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlY20k_jkI7fUhFRB4MRij7r--YXygED6-0RtYTr7I4LDcwJvMlnXrwK4xe_sgsK66JWcnXJj7nUj5HffnRHmggYMMLJlW7phRA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife41',
        //                 title: 'Пыльник',
        //                 description: '★ Фальшион',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlZG0hOPxNrfunWVY7sBOguzA45W70QWyrUI9MGClINSQcwE4M1GG-1XtxO3ugJbt78jAzyM3uSEj5S7eyQv330-ozWYuhw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife42',
        //                 title: 'Autotronice',
        //                 description: '★ Складной нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJF_-OwmImbqPbhJ7TFhGRf4cZOhuDG_Zi70Azmr0NtYTylJdOSdw5taA3T-FLqleu7g5S8vs7NwCQx7ygr4Srdmgv3308RsNJJvQ/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife43',
        //                 title: 'Lore',
        //                 description: '★ Складной нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJB-eOwmImbqPv7Ib7ummJW4NE_ju-Rpo6m2QziqEJsZm_0IoKSclI8MAvX-QS6k7u-hpG56sidmyRkvT5iuygfdmLhDg/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife44',
        //                 title: 'Gamma Doppler',
        //                 description: '★ Складной нож',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOxlY2GlsjwPKvBmm5D19V5i_rEpLP5gVO8v11rMT_6JtWUcwE2ZVmF_1S9wurv18W5752dyXBlvHNw4XrVzRy1gxxFcKUx0qdLIRFw/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife45',
        //                 title: 'Легенды',
        //                 description: '★ Керамбит',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJl5W0nPbmMrbummRD7fp8j-3I4IG72ADgrUJoazqhIYOccwZsaAvSrlHtlO6-jZPt78ufynZk7yggtnnanwv3308QSsudOA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife46',
        //                 title: 'Волны',
        //                 description: '★ Керамбит',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7r--YXygED6-EtrNmihLYaXIQ83Nw6C-1C6k-zvgMO7up7NmHs2uykl43fYnUG3hQYMMLINmYZu2g/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife47',
        //                 title: 'Гамма-волны',
        //                 description: '★ Штык-нож М9',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjzMrbcl1RV59VhhuzTypz9iUex-CwwOj6rYJiWdFQ7N1DS_Fa3lOvv15a578-ayCRr7nRw5SuMnUS00BwYOrNvgfSYVxzAUKnD8K-k/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easyknife48',
        //                 title: 'Легенды',
        //                 description: '★ Штык-нож М9',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Igsj5aoTTl3Ju5Mpjj9bM8Ij8nVn6qkRuYGH7I4STdldqZFCG-QS-xOy7gpW7vJ2bnSdn6XIg4X2OzkHlgAYMMLIs05iQHg/130fx97f/image.png',
        //             },
        //         ]
        //     },
        //     {
        //         id: 'easygloves',
        //         image: 'https://images.steamcdn.io/easydrop/cases/gloves.png',
        //         price: '500 RUB',
        //         title: 'Изи перчатки',
        //         //href: '/easygloves_case'
        //         content:[
        //             {
        //                 id: 'easygloves1',
        //                 title: 'Наёмник',
        //                 description: 'AUG',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7OPFcgJO5du-gM6OxfakZbnQw28H65Eg2L2RrYin3ADjrkJqYWz0Jo6UdVNrYV3SqAW9366x0l1OAhlP/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easygloves2',
        //                 title: 'Хладагент',
        //                 description: 'Five-SeveN',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09ijl5SYqPDmNr7fqWZU7Mxkh6fErI-n3FXn-xc5ZGzwdYaTIVA3YFmD-lK9l-vujcDp6J7KzCZkuSl3-z-DyOkI1NfG/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easygloves3',
        //                 title: 'Пиксельный камуфляж',
        //                 description: 'MP7',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957PfMYTxW09C_k4if2aemY-zXlD5X7ZVw2-yTpI_xjFXm8xZsY2ylI4-TclA8NQvU_VO2k-fxxcjrEfavWb4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easygloves4',
        //                 title: 'Песчаная штриховка',
        //                 description: 'MP9',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRw7OfJYTh9_9S5hpS0hPb6N4Tdn2xZ_Isp07rFpY70i1Lk-ERpY233LNXAJAJsNFmG_FW3xOfu15-6vp_AyXU2pGB8suBC9uz5/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easygloves5',
        //                 title: 'Занос',
        //                 description: 'MP9',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FA957ODYfTxW-Nmkx7-GkvP9JrafkGpV7Zd13eqWrNyt2AHi_hdqam33JdSQdlJtZ1_V-la_lby51pG974OJlyXgtRQKKA/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easygloves6',
        //                 title: 'Северный лес',
        //                 description: 'P250',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszOfi9H_8iJlo-Zkvb4DLfYkWNFpsEp2rzDpo-g3lLj_0duYzyiJoPAcwJqM1DWr1btl-bujZfotZXIynZ9-n51cU1OKdk/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easygloves7',
        //                 title: 'Песчаное напыление',
        //                 description: 'P90',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7ODYYzxb08-3moS0mvLwOq7c2GlUuZR0ibiRpNqs2VXi-kI5Mm2hd4GdIQM9NwrW-Va5xObmjJK-uczXiSw0I3Bdoc4/130fx97f/image.png',
        //             },
        //             {
        //                 id: 'easygloves8',
        //                 title: 'Наёмник',
        //                 description: 'SCAR-20',
        //                 image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODHTi1P7-O-kYGdjrmsYeOCxDJUupEi3-3A892h2FHgrRdrZDv1Jo6ccwU2Yl3T81Tqx-jrm9bi6xwIv_x-/130fx97f/image.png',
        //             },
        //         ]
        //     }
        // ]
    },
    mutations: {
        SET_CASES(state, payload){
            state.cases = payload
        },
    },
    actions:{
        LOAD_CASES({commit}){
            Vue.$db.collection('cases')
            .get()
            .then(querySnapshot => {
                let cases = []
                querySnapshot.forEach(s => {
                    const data = s.data()
                    let kase = {
                        id: s.id,
                        title: data.title,
                        price: data.price,
                        imageUrl: data.imageUrl,
                    }

                    let content = []
                    if(data.content) {
                        data.content.forEach(p => {
                            let contents = {
                                id: p.id,
                                title: p.title,
                                description: p.description,
                                imageUrl: p.imageUrl,
                            }
                            content.push(contents)
                        })
                    }
                    kase.content = content

                    cases.push(kase)
                })
                commit('SET_CASES', cases)
            })
                .catch(error => console.log(error))
        }
    },

    getters:{
        getCases: (state) => state.cases,
    }
}