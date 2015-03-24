module.exports = function (req, res, next) {
    var userName = req.body.user_name;

    if (userName === 'hellobot')
        return res.status(403);

    var botPayload = {
        text: 'Hello, ' + userName + '! (ito bot)'
    };

    return res.status(200).json(botPayload);
};
