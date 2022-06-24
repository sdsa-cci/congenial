# Change password

### URL

```:no-line-numbers
PUT {{server_url}}/users/password
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_update_user_password</p>
</div>

### Request

```json
{
  "old_password": "xxxxxxxx",
  "new_password": "zzzzzzzz"
}
```

### Response - 200

```json
{
  "message": "Password updated successfully.",
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
<CodeGroupItem title="Invalid Email">

```json
{
  "message": "Email-id is not present in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Credentials">

```json
{
  "message": "Invalid credentials supplied.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
