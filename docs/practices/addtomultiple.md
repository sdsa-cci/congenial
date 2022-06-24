# Add farm practice (multiple fields)

### URL

```:no-line-numbers
POST {{server_url}}/fields/farm-practice/multiple
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_add_mulitple_field_farm_practices</p>
</div>

### Request

```json
{
  "tillage": "CTill",
  "crop": "Soybeans",
  "fields": [2520, 2521]
}
```

### Response - 200

```json
{
  "message": "Farm practice has been added to field(s) successfully.",
  "data": [
    {
      "id": 3245,
      "created": "2022-04-07T08:31:41.350395+00:00",
      "updated": "2022-04-07T08:31:41.350395+00:00",
      "deleted": false,
      "user_field_id": 2521,
      "acres": 183.1,
      "year": 2022,
      "tillage": "CTill",
      "crop": "Soybeans"
    },
    {
      "id": 3246,
      "created": "2022-04-07T08:31:41.350395+00:00",
      "updated": "2022-04-07T08:31:41.350395+00:00",
      "deleted": false,
      "user_field_id": 2520,
      "acres": 127.37,
      "year": 2022,
      "tillage": "CTill",
      "crop": "Soybeans"
    }
  ],
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
<CodeGroupItem title="No Permissions">

```json
{
  "message": "You do not have permission to edit the crop(s) of this field.",
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
<CodeGroupItem title="Existing Crops">

```json
{
  "message": "Selected crop(s) already exists for this year in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
