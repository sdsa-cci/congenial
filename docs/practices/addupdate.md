# Add/Update farm practices of a field

### URL

```:no-line-numbers
POST {{server_url}}/fields/farm-practices
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_add_farm_practices</p>
</div>

### Request

```json
{
  "field_id": 2771,
  "irrig_unit_id": "TP0281",
  "farm_practices": [
    {
      "acres": "100.00",
      "crop": "Alfalfa",
      "tillage": "CTill",
      "deleted": false
    }
  ],
  "year": 2022
}
```

### Response - 200

```json
{
  "message": "Farm practices updated successfully.",
  "data": [
    {
      "id": 3126,
      "created": "2022-03-30T07:30:40.065873+00:00",
      "updated": "2022-03-30T07:30:40.065873+00:00",
      "deleted": false,
      "user_field_id": 1257,
      "acres": 50,
      "year": 2022,
      "tillage": "MTill",
      "crop": "Corn"
    },
    {
      "id": 3130,
      "created": "2022-03-30T10:19:50.645634+00:00",
      "updated": "2022-03-30T10:26:04.21433+00:00",
      "deleted": false,
      "user_field_id": 1257,
      "acres": 60,
      "year": 2022,
      "tillage": "MTill",
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
<CodeGroupItem title="Acres Exceeded">

```json
{
  "message": "Total acres of farm practices exceed the total acres assigned to this field.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Past Edits">

```json
{
  "message": "You cannot edit the crops of the past years.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Farm Practice">

```json
{
  "message": "Selected crop(s) do not exist in the database.",
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
