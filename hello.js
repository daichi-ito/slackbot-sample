module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello, ' + userName + '! (ito bot)'
  };

  return res.status(200).json(botPayload);
}
