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
  "message": "Fetched farm practices successfully.",
  "data": {
    "crops": [
      {
        "crop_name": "Corn"
      },
      {
        "crop_name": "Soybeans"
      },
      {
        "crop_name": "Alfalfa"
      }
    ],
    "tillages": [
      {
        "tillage_name": "CTill"
      },
      {
        "tillage_name": "MTill"
      },
      {
        "tillage_name": "NTill"
      },
      {
        "tillage_name": "STill"
      }
    ]
  },
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
