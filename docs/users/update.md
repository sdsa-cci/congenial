# Update user

### URL

```:no-line-numbers
PUT {{server_url}}/users
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_update_user_profile</p>
</div>

### Request

```json
{
  "city": "Verna",
  "first_name": "Riya",
  "last_name": "Banaulikar-m",
  "legal_entities": ["riabusiness", "Riya Banaulikar"],
  "phone": 8390878405,
  "postal_code": "40345",
  "state": "Nebraska",
  "address": "Goa",
  "authorized_electric_power_provider": {
    "cppd": false,
    "dppd": false,
    "mecc": false,
    "nplatte": false,
    "prema": false,
    "nppds": false,
    "wbppd": false,
    "iotPm": false,
    "nppd": false
  }
}
```

### Response - 200

```json
{
  "message": "The User profile updated successfully.",
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Missing Fields" active>

```json
{
  "message": "Empty fields.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid User Login">

```json
{
  "message": "Email-id is not present in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
