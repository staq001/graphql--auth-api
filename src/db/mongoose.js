const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/chat-app-api', {
  useNewUrlParser: true
})
mongoose.set('strictQuery', true)