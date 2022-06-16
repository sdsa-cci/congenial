# Get profile

### URL

```:no-line-numbers
GET {{server_url}}/users/profile
```

### Response - 200

```json
{
  "message": "Get user profile details.",
  "data": {
    "code": 1,
    "city": "Brady",
    "user_id": 5,
    "email": "rayburnmonsanto@nebnet.net",
    "first_name": "Rod",
    "last_name": "Rayburn",
    "legal_entities": ["Rayburn Farms", "Rod Rayburn"],
    "phone": 3085300342,
    "postal_code": "69123",
    "state": "Nebraska",
    "address": "24493 E Fort McPhearson Rd",
    "electric_power_provider": {
      "nppd": false,
      "qbppd": false,
      "prema": false,
      "mecc": false,
      "npmlwd": false,
      "cppd": false,
      "dppd": true
    }
  },
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Invalid User ID">

```json
{
  "message": "Invalid User Id.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
