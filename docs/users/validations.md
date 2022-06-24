# Validations

### URL

```:no-line-numbers
POST {{server_url}}/validations
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_validate_user</p>
</div>

### Request

```json
{
  "verification_code": ["QATest2022", "ProdTestCode1"],
  "user_email": "sneha12@mailinator.com",
  "phone": "8668417759"
}
```

### Response - 200

```json
{
  "message": "Form is valid",
  "data": {
    "for_staff": true
  },
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Existing Email" active>

```json
{
  "message": "User with email ${data.user_email} already exists in cognito.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Existing Number">

```json
{
  "message": "Mobile phone number is already registered.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Signup Code">

```json
{
  "message": "Sign-up code is not valid.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
