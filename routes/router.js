const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

router.use(express.static('public'))

const wineRoutes = require('./api/wineRoutes')

router.use('/wines', wineRoutes)

router.get('/', (req, res) => {
    const URL = 'https://api.sampleapis.com/wines/reds'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                title: 'Here Is Some Info Regarding Some Wines',
                name: 'Here Is Some Info Regarding Some Wines',
                data
            })
        })
})

// Red Wines
// router.get('/reds', (req, res) => {
//     const URL = 'https://api.sampleapis.com/wines/reds'
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/red-wines', {
//                 title: 'Red Wines',
//                 name: 'Lets Find A Red Wine For You',
//                 data
//             })
//         })
// })

// White Wines
// router.get('/whites', (req, res) => {
//     const URL = 'https://api.sampleapis.com/wines/whites'
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/white-wines', {
//                 title: 'White Wines',
//                 name: 'Lets Find A White Wine For You',
//                 data
//             })
//         })
// })

// Sparkling Wines
// router.get('/sparkling', (req, res) => {
//     const URL = 'https://api.sampleapis.com/wines/sparkling'
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/sparkling-wines', {
//                 title: 'Sparkling Wines',
//                 name: 'Lets Find A Sparkling Wine For You',
//                 data
//             })
//         })
// })

// Rose Wines
// router.get('/rose', (req, res) => {
//     const URL = 'https://api.sampleapis.com/wines/rose'
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/rose-wines', {
//                 title: 'Rose Wines',
//                 name: 'Lets Find A Rose Wine For You',
//                 data
//             })
//         })
// })

// Port Wines
// router.get('/port', (req, res) => {
//     const URL = 'https://api.sampleapis.com/wines/port'
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/port-wines', {
//                 title: 'Port Wines',
//                 name: 'Lets Find A Port Wine For You',
//                 data
//             })
//         })
// })


router.get('*', (req, res) => {
    if (req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error - The Cork Broke Off In The Bottle, Better Luck Next Time',
            name: '404 Error - The Cork Broke Off In The Bottle, Better Luck Next Time'
        })
    }
})

module.exports = router