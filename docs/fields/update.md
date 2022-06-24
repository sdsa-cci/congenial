# Update field

### URL

```:no-line-numbers
PUT {{server_url}}/fields
```

### :eight_spoked_asterisk: Stored Procedure

<div class="custom-container tip">
<p>usp_update_user_field</p>
</div>

### Request

```json
{
  "field_id": 1935,
  "field_name": "test f2",
  "business_name": "demo444",
  "farm_name": "Farm BBD",
  "well_data": [
    {
      "well_id": "G-071025",
      "pump_rate": 800,
      "updated_pump_rate": 900,
      "active": true,
      "isElectricWell": true
    }
  ],
  "surfaceWaterPercentage": 10,
  "groundWaterPercentage": 90
}
```

### Response - 200

```json
{
  "message": "Field updated successfully.",
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
</CodeGroup>
