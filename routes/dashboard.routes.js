// Import Module
const express = require('express');
const db = require('../db/models');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

const router = express.Router({caseSensitive: false});

// middleware
router.use(methodOverride('_method'));

// main dashboard route
router.get('/', (req, res) => {
  res.status(200).render('dashboard/dashboard');
})

// Login Handler
const loginHandler = async (req, res) => {
  const body = req.body
  if ((req, body.username === 'admin' && req.body.password === 'admin')) {
    res.redirect('/dashboard/users');
  } else {
    res.redirect('/dashboard');
  }
}

router.post('/login', loginHandler);

// READ databse using GET /users
router.get('/users', async (req, res) => {
  const users = await db.User.findAll({
    include: [db.UserBio, db.UserHistory],
  })
  res.status(200).render('dashboard/allUsers', { users })
})

// GET create page for POST /users/create
router.get('/create', async (req, res) => {
  res.status(200).render('dashboard/create');
})

// CREATE database using POST /users/create
router.post('/users/create', async (req, res) => {
  const user = req.body;
  const uuid = uuidv4();
  await db.User.create({
    id: uuid,
    username: user.username,
    email: user.email,
    password: user.password,
    UserBio: {
      uid: uuid
    },
    UserHistories: [
      {
        log_id: uuidv4(),
        user_id: uuid
      }
    ]
  },
  {
    include: [db.UserBio, db.UserHistory]
  })
  res.status(201).redirect('/dashboard/users');
})

// READ database using GET /users/:id
router.get('/users/:id', async (req, res) => {
  await db.User.findByPk(req.params.id, {
    include: [db.UserBio, db.UserHistory]
  }).then(user => {
    if(user) {
      res.status(200).render('dashboard/userDetail', {user});
    }
  })
})

// GET create page for POST /users/create
router.get('/users/update/:id', async (req, res) => {
  await db.User.findByPk(req.params.id, {
    include: [db.UserBio, db.UserHistory]
  }).then(user => {
    if(user) {
      res.status(200).render('dashboard/update', {user});
    }
  }) 
})

// UPDATE databse using PUT /users/:id
router.put('/users/update/:id', async (req, res) => {
  const data = req.body;
  await db.User.update({ email: data.email }, {
    where:{
      id:req.params.id
    }
  })
  await db.UserBio.update({
    firstname:data.firstname,
    lastname:data.lastname,
    city: data.city
  },{
    where: {
      uid: req.params.id
    }
  })
  await db.UserHistory.update(
    {
      winStatus: data.winStatus,
      score: data.score,
    },
    {
      where: {
        user_id: req.params.id,
      },
    }
  )
  res.redirect(`/dashboard/users/${req.params.id}`)
})

// DELETE database using DELETE /users/:id
router.delete('/users/:id', async (req, res) => {
  await db.User.destroy({
    where:{
      id:req.params.id
    },
    include: [db.UserBio, db.UserHistory]
  }).then(() => {
    // alert('User deleted');  
    res.status(201).redirect('/dashboard/users')
  }).catch(err => {
    res.status(400).json(`Can't delete article - ${err.message}`)
  })
})

module.exports = router;
