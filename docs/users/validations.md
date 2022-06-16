# Validations

### URL

```:no-line-numbers
POST {{server_url}}/validations
```

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
<CodeGroupItem title="Invalid Signup Code" active>

```json
{
  "message": "Sign-up code is not valid.",
  "code": 400
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
</CodeGroup>
