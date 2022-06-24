# Add/Update farm practices of a field

### URL

```:no-line-numbers
PUT {{server_url}}/fields/share
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_update_shared_field</p>
</div>

### Request

```json
{
  "shared_field_id": 285,
  "deleted": true, // atleast one of the below
  "removed": true,
  "rejected": true,
  "business_name": "My new business",
  "farm_name": "My new farm",
  "field_name": "mFarm2022"
}
```

### Response - 200

```json
{
  "message": "The shared field updated successfully.",
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
<CodeGroupItem title="Invalid field">

```json
{
  "message": "Shared field details are not valid.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Already Rejected">

```json
{
  "message": "The secondary user already rejected the shared field.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
