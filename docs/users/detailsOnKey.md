# User details on keys

### URL

```:no-line-numbers
POST {{server_url}}/users/user-details
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_get_user_detail_on_key</p>
</div>

### Request

<CodeGroup>
<CodeGroupItem title="With Phone" active>

```json
{
  "search": [
    {
      "key": "PHONE",
      "value": "xxxxxxxxxx"
    }
  ]
}
```

</CodeGroupItem>
<CodeGroupItem title="With Email">

```json
{
  "search": [
    {
      "key": "EMAIL",
      "value": "xxxxxxxxx@xxx.com"
    }
  ]
}
```

</CodeGroupItem>
</CodeGroup>

### Response - 200

```json
{
  "message": "The user details are fetched successfully.",
  "data": {
    "code": 1,
    "city": "Vasco",
    "user_id": 523,
    "email": "sneha92@mailinator.com",
    "first_name": "sneha",
    "last_name": "Nagarsenker",
    "legal_entities": ["test", "sneha Nagarsenker"],
    "phone": 8668417759,
    "postal_code": "444111"
  },
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Empty Fields" active>

```json
{
  "message": "Empty fields.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid User" active>

```json
{
  "message": "Email-id is not present in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Self Share">

```json
{
  "message": "You cannot share this field with yourself.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
