/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "",
    "deleteRule": "",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "help": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text2862495610",
        "max": 10,
        "min": 10,
        "name": "date",
        "pattern": "^[0-9]{4}-[0-9]{2}-[0-9]{2}$",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "help": "",
        "hidden": false,
        "id": "select1923043739",
        "maxSelect": 1,
        "name": "room",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "select",
        "values": [
          "sm",
          "md",
          "lg"
        ]
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text2886606951",
        "max": 5,
        "min": 5,
        "name": "slot",
        "pattern": "^[0-9]{2}:[0-9]{2}$",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "cascadeDelete": true,
        "collectionId": "pbc_3754236674",
        "help": "",
        "hidden": false,
        "id": "relation2375276105",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "user",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      }
    ],
    "id": "pbc_861389184",
    "indexes": [
      "CREATE UNIQUE INDEX idx_room_bookings_date_room_slot ON room_bookings (date, room, slot)"
    ],
    "listRule": "",
    "name": "room_bookings",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": ""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_861389184");

  return app.delete(collection);
})
