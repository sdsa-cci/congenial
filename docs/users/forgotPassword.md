# Forgot password

### URL

```:no-line-numbers
POST {{server_url}}/users/forgot-password
```

### Request

```json
{
    "user_email": "leeroyfernandes13@mailinator.com"
}
```

### Response - 200

```json
{
    "message": "Verification code sent successfully.",
    "data": {
        "CodeDeliveryDetails": {
            "Destination": "+********1824",
            "DeliveryMedium": "SMS",
            "AttributeName": "phone_number"
        }
    },
    "code": 200,
    "message_code": 0
}
```

### Response - 400
<CodeGroup>
<CodeGroupItem title="Missing Key" active>

```json
{
    "message": "Missing required key 'Username' in params",
    "code": 400,
    "message_code": 0
}
```
</CodeGroupItem>
</CodeGroup>
