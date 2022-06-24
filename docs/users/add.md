# Add users

### URL

```:no-line-numbers
POST {{server_url}}/users
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_add_user</p>
</div>

### Request

```json
{
  "district_id": 1,
  "user_email": "riya457000@mailinator.com",
  "address": "Mapusa",
  "authorized_electric_power_provider": {
    "nppd": true,
    "qbppd": true,
    "prema": true,
    "mecc": true,
    "npmlwd": true,
    "cppd": true,
    "dppd": true
  },
  "verification_code": ["TPkickoff", "TestCode1"],
  "postal_code": "403507",
  "state": "Goa",
  "city": "Mapusa",
  "password": "password",
  "deleted": 0,
  "last_name": "Mhapshekar",
  "first_name": "Rishab",
  "legal_entities": ["Bana"],
  "phone": "7507697513",
  "for_staff": "0",
  "prefix": "+91"
}
```

### Response - 200

```json
{
  "message": "The User is created successfully.",
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Empty fields" active>

```json
{
  "message": "Empty fields.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Code">

```json
{
  "message": "Sign-up code is not valid.",
  "code": 400,
  "message_code": "MC004"
}
```

</CodeGroupItem>
<CodeGroupItem title="Existing Phone" active>

```json
{
  "message": "Mobile phone number is already registered.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Existing Email">

```json
{
  "message": "User with email ${userData.user_email} already exists in cognito.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Duplicate Entites">

```json
{
  "message": "Entities were duplicated ${userData.legal_entities}.",
  "code": 400
}
```

</CodeGroupItem>
</CodeGroup>
