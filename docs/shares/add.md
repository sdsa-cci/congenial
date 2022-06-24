# Add share field

### URL

```:no-line-numbers
POST {{server_url}}/fields/share
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_share_user_field</p>
</div>

### Request

```json
{
  "secondary_user_email": "riya.banaulikar@creativecapsule.com",
  "share_fields": [
    {
      "field_id": 2506,
      "field_name": "SFN-8888",
      "editor": false
    }
  ]
}
```

### Response - 200

```json
{
  "message": "Field(s) shared successfully.",
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Invalid User" active>

```json
{
  "message": "Email-id is not present in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Already Shared" active>

```json
{
  "message": "The field(s) you are trying to share are already shared",
  "data": [2506],
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Duplicate Fields">

```json
{
  "message": "Field ids have duplicate values.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Fields">

```json
{
  "message": "Selected share field id(s) are invalid.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
