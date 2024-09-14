const imp = {
    "port": 4545,
    "protocol": "http",
    "recordRequests": true,
    "stubs": [
      {
        "predicates": [
          {
            "equals": {
              "method": "GET",
              "path": "/customers/123"
            }
          }
        ],
        "responses": [
          {
            "is": {
              "statusCode": 201,
              "headers": {
                "Content-Type": "application/xml"
              },
              "body": "<customer><email>customer@test.com</email></customer>"
            },
            "behaviors": [
                { "wait": 120 }
            ]
          }
        ]
      }
    ]
};

const stubs = Array.from(Array(500).keys()).map((_,i) => ({ 
    ...imp.stubs[0], 
        "predicates": [
          {
            "equals": {
              "method": "GET",
              "path": `/customers/123${i}`
            }
          }
        ],
}));

const out = JSON.stringify({ ...imp, stubs },null,3);

const fs = require("fs");
fs.writeFileSync("imposters.json",out,"utf-8");
