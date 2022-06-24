# User exists

### URL

```:no-line-numbers
GET {{server_url}}/users/{{user_email}}
```

### :eight_spoked_asterisk: Stored Function

<div class="custom-container warning">
<p>___uf_user_exists</p>
</div>

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
    "code": 400,
    "message_code": 0
}
```
</CodeGroupItem>
</CodeGroup>
