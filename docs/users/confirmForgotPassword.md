# Confirm forgot password

### URL

```:no-line-numbers
POST {{server_url}}/users/forgot-password/confirm
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_reset_user_password</p>
</div>

### Request

```json
{
  "confirmation_code": "821146SSS",
  "password": "password",
  "user_email": "salvinodsa.13062022@mailinator.com"
}
```

### Response - 200

```json
{
  "message": "Password updated successfully.",
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Validation Error" active>

```json
{
  "message": "There were 3 validation errors:\n* MissingRequiredParameter: Missing required key 'Username' in params\n* MissingRequiredParameter: Missing required key 'ConfirmationCode' in params\n* MissingRequiredParameter: Missing required key 'Password' in params",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Code">

```json
{
  "message": "Invalid verification code provided, please try again.",
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
