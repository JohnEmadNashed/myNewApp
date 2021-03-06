const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

/*collection will always be plural form of ur
* model name all in lowercase
*/
