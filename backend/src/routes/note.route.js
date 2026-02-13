const express = require('express')
const noteController = require('../controllers/note.controllers')
const AuthMiddleware = require('../middlewares/Auth.middleware')

const router =  express.Router()

router.post('/CreateNotes',AuthMiddleware.authMiddleware,noteController.CreateNote)
router.get('/FetchNotes',AuthMiddleware.authMiddleware,noteController.FetchNotes)
router.get('/Delete/:id',AuthMiddleware.authMiddleware,noteController.Delete)
router.post('/UpdateTitle/:id',AuthMiddleware.authMiddleware,noteController.updateTitle)
router.post('/UpdateNotes/:id',AuthMiddleware.authMiddleware,noteController.updateNote)


module.exports = router;