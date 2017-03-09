var users = [{
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'test',
        password: '1234',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
    login: function(req, res, next) {
        let bool;
        for (var i in users) {
            // console.log(req.body);
            if (users[i].name === req.body.name && users[i].password === req.body.password) {
                bool = true;
                req.session.currentUser = users[i];

                break;
            }
        }
        if(bool){
            res.send({userFound:true})
        }else{
            res.send({userFound:false})
        }
    },
}
