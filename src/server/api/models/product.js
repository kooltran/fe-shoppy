import mongoose from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const ProductSchema = new mongoose.Schema({
  sku: { type: 'String', required: true, unique: true },
  name: { type: 'String', required: true },
  categoryId: { type: 'String', required: true },
  groupId: { type: 'String', required: true },
  colorId: { type: 'String', required: true },
  promotionId: { type: 'String' },
  images: { type: 'Array', required: true },
  price: { type: 'String', required: true },
  sizes: { type: 'Array' },
  description: { type: 'String', required: true },
  comments: { type: 'Array' },
  pin: { type: 'Boolean' },
  userAdded: { type: 'String', required: true },
  userEdited: { type: 'String' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateEdited: { type: 'Date', default: Date.now },
});
ProductSchema.plugin(URLSlugs('name', { update: true }));
module.exports = mongoose.model('Product', ProductSchema);
