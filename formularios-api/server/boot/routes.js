// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict'

module.exports = function (app) {
  // Install a "/ping" route that returns "pong"
  app.get('/about', function (req, res) {
    res.send('<body style="background-color:black;"><marquee style="color:limegreen;font-size:68px" behavior="scroll" direction="left">AUTHOR: Damian Ignacio Porchietto</marquee><marquee style="color:limegreen;font-size:68px" behavior="scroll" direction="right">AUTHOR: Damian Ignacio Porchietto</marquee></body>')
  })
}
