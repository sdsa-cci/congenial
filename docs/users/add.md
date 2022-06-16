# Add users

### URL

```:no-line-numbers
POST {{server_url}}/users
```

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
  "code": 200
}
```

### Response - 400
<CodeGroup>
<CodeGroupItem title="Missing Fields" active>

```json
{
  "message": "Empty fields.",
  "code": 400
}
```
</CodeGroupItem>
<CodeGroupItem title="Existing User">

```json
{
  "message": "User with email ${userData.user_email} already exists in cognito.",
  "code": 400
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
