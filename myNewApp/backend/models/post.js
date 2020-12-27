const mongoose = require ('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String, required: true },
  creator: { type: mongoose.SchemaTypes.ObjectId, ref: "user", required: true}
});

module.exports = mongoose.model('Post', postSchema);

/*collection will always be plural form of ur
* model name all in lowercase
*/
