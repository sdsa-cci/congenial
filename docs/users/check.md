# User existence

### URL

```:no-line-numbers
GET {{server_url}}/users/{{user_email}}
```

### Response - 200

```json
{
    "message": "The User present.",
    "code": 200,
    "message_code": "MC002"
}
```

### Response - 400
<CodeGroup>
<CodeGroupItem title="User Doesn't Exist">

```json
{
    "message": "Email-id is not present in the database.",
    "code": 400
}
```
</CodeGroupItem>
</CodeGroup>
