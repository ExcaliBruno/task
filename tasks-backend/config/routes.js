module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signinn', app.api.auth.signin)
}