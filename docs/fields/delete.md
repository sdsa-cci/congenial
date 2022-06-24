# Delete field

### URL

```:no-line-numbers
DELETE {{server_url}}/fields/{{field_id}}
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_user_delete_field</p>
</div>

### Response - 200

```json
{
  "message": "The User Field deleted successfully.",
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
<CodeGroupItem title="Invalid Field">

```json
{
  "message": "Field id selected is not present in database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="No Permissions">

```json
{
  "message": "You do not have permission to delete this field.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
