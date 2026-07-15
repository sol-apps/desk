/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("users");
  const names = [
    "Alex Chen", "Priya Shah", "Marcus Wolf", "Jin Park", "Sofia Romero",
    "Tom Becker", "Nia Okafor", "Leo Hart", "Mei Tanaka", "Hannah Voss"
  ];
  for (const name of names) {
    const record = new Record(collection);
    record.set("name", name);
    app.save(record);
  }
}, (app) => {
  const collection = app.findCollectionByNameOrId("users");
  for (const record of app.findRecordsByFilter(collection, "")) {
    app.delete(record);
  }
})
