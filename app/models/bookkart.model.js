/**
 * file that defines the schema for mongoose
 */
module.exports = mongoose => {
    const bookkart = mongoose.model(
        "tiagodb",
        mongoose.Schema(
            {
                section: String,
                item: String,
                price: String,
                title: String,
                published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return bookkart;
  };