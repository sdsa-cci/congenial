# Add fields

### URL

```:no-line-numbers
POST {{server_url}}/fields
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_add_fields</p>
</div>

### Request

```json
{
  "fields": [
    {
      "field_name": "test f2",
      "irrig_unit_id": "TP0964",
      "business_name": "demo1",
      "farm_name": "Farm A",
      "well_data": [
        {
          "well_id": "G-071025",
          "pump_rate": 800,
          "updated_pump_rate": 1000,
          "active": true,
          "isElectricWell": true
        }
      ],
      "surfaceWaterPercentage": 10,
      "groundWaterPercentage": 90
    }
  ]
}
```

### Response - 200

```json
{
  "message": "Added field(s) successfully.",
  "code": 200,
  "message_code": 0
}
```

### Response - 400

<CodeGroup>
<CodeGroupItem title="Empty Fields" active>

```json
{
  "message": "Empty fields.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid User">

```json
{
  "message": "Email-id is not present in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Invalid Irrig Unit ID">

```json
{
  "message": "Invalid irrig unit id.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Existing Irrig Unit ID">

```json
{
  "message": "Field with this irrigation unit id already exists in the database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
<CodeGroupItem title="Existing Name">

```json
{
  "message": "Field with this name already exists in database.",
  "code": 400,
  "message_code": 0
}
```

</CodeGroupItem>
</CodeGroup>
