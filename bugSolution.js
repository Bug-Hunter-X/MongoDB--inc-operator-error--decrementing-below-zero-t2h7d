```javascript
db.collection('myCollection').updateOne(
  { "_id": ObjectId("651234567890abcdef12345678"), "count": { $gt: 0 } },
  { "$inc": { "count": -1 } }
);
```